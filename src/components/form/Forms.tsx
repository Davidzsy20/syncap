import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { FormLayout } from '@/components/layout/FormLayout';
import {
  TypographyH1,
  TypographyH2,
  TypographyP0,
  TypographyP1,
  TypographyP2,
} from '@/components/Text';
import { DataContext } from '@/pages/_app';

import { inquiryFormSchema } from './formSchema';

export const UserInquiryForm = () => {
  // const { handleSubmit, control, formState } = useForm<FormData>({
  //   shouldFocusError: false,
  // });
  const { data, setData } = React.useContext(DataContext) as any;

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);

  const onSubmit = async (e: any, resend = false) => {
    e.preventDefault();
    setMessages([]);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { inquiry_form } = data;
    const formSchema = z.object({
      first_name: z.string().min(1, 'First name is required'),
      last_name: z.string().min(1, 'Last name is required'),
      company_name: z.string().min(1, 'Company name is required'),
      company_email: z.string().email('Invalid email address'),
      title: z.string().min(1, 'Title is required'),
      role: z.string().min(1, 'Role is required'),
    });

    const toastId = toast.loading('Submitting...');

    const result = formSchema.safeParse(inquiry_form);
    if (!result.success) {
      // Get all validation errors
      const { errors } = result.error;

      // Create a formatted error message
      const errorMessages = errors
        .map((error) => `${error.path.join('.')}: ${error.message}`)
        .join('\n');

      // Display a toast with all error messages
      toast.error(`Please correct the following errors:\n${errorMessages}`, {
        id: toastId,
        duration: 5000, // Increase duration to give users time to read
      });

      // Optionally, you can also set these errors in your form state
      // setFormErrors(result.error.flatten().fieldErrors);

      return;
    }
    try {
      const response = await fetch('http://localhost:8000/form/userInquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: inquiry_form.first_name,
          last_name: inquiry_form.last_name,
          company_type:
            inquiry_form.company_type_i ||
            inquiry_form.company_type_p ||
            inquiry_form.company_type_b,
          objectives:
            inquiry_form.objectives_b ||
            inquiry_form.objectives_i ||
            inquiry_form.objectives_p,
          company_name: inquiry_form.company_name,
          title: inquiry_form.title,
          company_email: inquiry_form.company_email,
          phone_number: inquiry_form.phone_number,
          interest_in_syncap: inquiry_form.interest_in_syncap,
          country: inquiry_form.country,
          how_did_you_hear_about_us: inquiry_form.how_did_you_hear_about_us,
          ltm_revenue_range: inquiry_form.ltm_revenue_range,
          ltm_net_profit_range: inquiry_form.ltm_net_profit_range,
          search_fund_structure: inquiry_form.search_fund_structure,
          role: inquiry_form.role,
          employee_count: inquiry_form.employee_count,
          user_type: 'client', // Assuming all inquiries are from clients for now
          user_status: 'new',
          resend,
        }),
      });
      if (!response.ok) {
        if (response.status === 409) {
          // If the user already exists (conflict)
          toast.error(
            <div className="flex gap-1 text-nowrap">
              email already exist, try another email,{' '}
              <span className="underline" onClick={() => onSubmit(e, true)}>
                {' '}
                <TypographyP1>resend</TypographyP1>{' '}
              </span>
              or
              <Link
                href="https://workspace.syncap.ai/auth"
                className="underline"
              >
                login
              </Link>
            </div>,
            {
              id: toastId,
            }
          );
        } else {
          toast.error(
            'There was an error submitting the form. Please try again.',
            { id: toastId }
          );
          throw new Error(`Error: ${response.statusText}`);
        }
      } else {
        setSubmitted(true);
        toast.success('Form submitted successfully', { id: toastId });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
      // eslint-disable-next-line no-console
      console.error(
        'There was an error submitting the form. Please try again.'
      );
      toast.error('There was an error submitting the form. Please try again.', {
        id: toastId,
      });
    }
  };

  // const onError = (results) => {
  //   console.log(results);
  //   const messages = Object.entries(results).map(([key]) => {
  //     return (
  //       'please enter a valid ' +
  //       inquiryFormSchema.find((field) => field.name === key)?.label
  //     );
  //   });
  //   setMessages(messages);
  //   // toast.error(messages.join(', '), {
  //   //   duration: 8000, // Make the toast stay until dismissed
  //   //   important: true,
  //   // });
  // };

  const renderFields = (fields: any[]) => {
    return fields.map((field, ind) => {
      return (
        <div className="min-w-[300px] flex-1" key={field.name + ind}>
          <Input
            className=" w-full"
            placeholder={field.placeholder}
            type={field.type}
            required={field.validation.required}
            onChange={(e) => {
              setData({
                ...data,
                inquiry_form: {
                  ...data.inquiry_form,
                  [field.name]: e.target.value,
                },
              });
            }}
            // helpText={fieldState.error?.message}
            value={data.inquiry_form?.[field.name] || ''}
          />
        </div>
      );
    });
  };

  const header = submitted ? (
    <TypographyH2 className="w-full text-center">Thank You!</TypographyH2>
  ) : (
    <div className="flex">
      <span>
        <Link
          href="/qualification/interest_in_syncap"
          className="flex items-center gap-2"
        >
          <ArrowRightIcon className="w-fit rotate-180" />
          <TypographyH1 className=" text-center">back</TypographyH1>
        </Link>
      </span>
      <TypographyH2 className="w-full text-center">
        Great! Let’s connect over your business goals.
      </TypographyH2>
    </div>
  );
  const description = submitted ? (
    <>
      <TypographyP2 className="mb-6 w-full text-center">
        We will get back to you by email shortly.
      </TypographyP2>
      <span className="flex justify-center">
        <Button variant="solid" className="">
          <Link href="/">
            <h1 className="font-normal text-gray-100">Back to Home</h1>
          </Link>
        </Button>
      </span>
    </>
  ) : (
    <TypographyP2 className="w-full text-center">
      Once you submit your information below, you can expect to speak with us to
      discuss your objectives.
    </TypographyP2>
  );
  const content = !submitted && (
    <div className=" flex max-w-[880px] flex-col gap-2">
      <div className="flex w-full  flex-1 flex-wrap gap-4">
        {renderFields(inquiryFormSchema)}
        {/* <TypographyP0 className="text-text-100">
          if you are not ready to proceed with speaking, we can put your
          information in record and we will followup to schedule the call with
          you at your best convience
        </TypographyP0> */}
      </div>{' '}
      {messages.length > 0 && (
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <TypographyP0 key={index} className="text-warning">
              {message}
            </TypographyP0>
          ))}
        </div>
      )}{' '}
      <Button onClick={onSubmit} variant="solid" className="justify-center">
        Continue
      </Button>
    </div>
  );

  return (
    <FormLayout header={header} description={description} content={content} />
  );
};

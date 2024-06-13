import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/Button';
import { DropdownInput, Input } from '@/components/Input';
import { FormLayout } from '@/components/layout/FormLayout';
import { TypographyH2, TypographyP2 } from '@/components/Text';

import { inquiryFormSchema, interestOptions } from './formSchema';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  companyType: string;
  interestInSyncap: string;
  country: string;
  howDidYouHearAboutUs: string;
  ltmRevenueRange?: string;
  ltmNetProfitRange?: string;
  searchFundStructure?: string;
  role?: string;
  [key: string]: any; // Allows additional fields dynamically
}

export const UserInquiryForm = () => {
  const { handleSubmit, control, watch, setError } = useForm<FormData>();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const companyType = watch('companyType');

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:8000/form/userInquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          company_name: data.companyName,
          company_title: data.companyType,
          company_email: data.email,
          phone_number: data.phoneNumber,
          company_type: data.companyType,
          interest_in_syncap: [data.interestInSyncap],
          country: data.country,
          how_did_you_hear_about_us: data.howDidYouHearAboutUs,
          ltm_revenue_range: data.ltmRevenueRange,
          ltm_net_profit_range: data.ltmNetProfitRange,
          search_fund_structure: data.searchFundStructure,
          role: data.role,
          user_type: 'client', // Assuming all inquiries are from clients for now
          user_status: 'new',
        }),
      });
      if (!response.ok) {
        if (response.status === 409) {
          // If the user already exists (conflict)
          setError('email', {
            type: 'manual',
            message:
              'This email is already registered. Please sign in to submit a request.',
          });
        } else {
          throw new Error(`Error: ${response.statusText}`);
        }
      } else {
        const result = await response.json();
        // eslint-disable-next-line no-console
        console.log(result);
        setSubmitted(true);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
      // eslint-disable-next-line no-console
      console.error(
        'There was an error submitting the form. Please try again.'
      );
    }
  };

  const renderFields = (fields: any[]) => {
    return fields.map((field) => {
      const localField = { ...field }; // Create a local copy of the field

      if (localField.name === 'interestInSyncap' && companyType) {
        localField.options = interestOptions[companyType] || [];
      }

      if (
        localField.conditions &&
        !localField.conditions.includes(companyType)
      ) {
        return null;
      }

      return (
        <div key={field.name} className="mb-4">
          <TypographyP2>
            {field.label} {field.validation.required && '*'}
          </TypographyP2>
          <Controller
            name={field.name}
            control={control}
            rules={field.validation}
            render={({ field: controllerField, fieldState }: any) =>
              field.type === 'dropdown' ? (
                <DropdownInput
                  {...controllerField}
                  className="mt-2 block w-full"
                  required={field.validation.required}
                  defaultValue={field.placeholder}
                >
                  <option value="" className="text-gray-500">
                    {field.placeholder}
                  </option>
                  {field.options &&
                    field.options.map((option: string) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </DropdownInput>
              ) : (
                <Input
                  {...controllerField}
                  placeholder={field.placeholder}
                  type={field.type}
                  required={field.validation.required}
                  helpText={fieldState.error?.message}
                />
              )
            }
          />
        </div>
      );
    });
  };

  const header = submitted ? (
    <TypographyH2 className="w-full text-center">Thank You!</TypographyH2>
  ) : (
    <TypographyH2 className="w-full text-center">Join Syncap</TypographyH2>
  );
  const description = submitted ? (
    <>
      <TypographyP2 className="mb-6 w-full text-center">
        We will get back to you by email shortly.
      </TypographyP2>
      <Button variant="solid">
        <Link href="/">
          <h1 className="font-normal text-gray-100">Back to Home</h1>
        </Link>
      </Button>
    </>
  ) : (
    <TypographyP2 className="w-full text-center">
      Once you submit your information below, you can expect next steps for
      becoming a Syncap member.
    </TypographyP2>
  );
  const content = !submitted && (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-[700px] flex-col gap-4"
    >
      {renderFields(inquiryFormSchema)}
      <Button variant="solid" className="mt-6 text-lg">
        Complete
      </Button>
    </form>
  );

  return (
    <FormLayout header={header} description={description} content={content} />
  );
};

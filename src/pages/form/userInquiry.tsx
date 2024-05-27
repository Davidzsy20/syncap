import { Input, Textarea } from '@headlessui/react';

import { Button } from '@/components/Button';
import { CheckBox } from '@/components/Checkbox';
import { DropdownInput } from '@/components/Input';
import { FormLayout } from '@/components/layout/FormLayout';
import { TypographyP2 } from '@/components/Text';
// import { useFormValidation } from '@/hooks/useValidation';

const userInquiry = () => {
  // const { validateForm } = useFormValidation('/form/userInquiry');

  return (
    <FormLayout>
      <div className="mx-auto flex max-w-[700px] flex-wrap gap-2 ">
        <TypographyP2 className="flex w-full">
          1. First we need to learn more about you.
        </TypographyP2>
        <Input type="name" placeholder="Fist Name" required />
        <Input type="name" placeholder="Last Name" required />
        <Input type="name" placeholder="Company Name" required />
        <Input type="email" placeholder="Working Email" required />
        <Input type="name" placeholder="Phone Number" required />
        <Input type="name" placeholder="Job Title" required />
        <DropdownInput>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="France">Argentina</option>
          <option value="France">Hongkong</option>
          <option value="France">Australia</option>
        </DropdownInput>
        {/* <OurServicesSection /> */}

        <TypographyP2 className=" flex w-full">
          2. What can we help with? Select all that apply.*
        </TypographyP2>
        <div className="flex flex-wrap gap-2">
          <CheckBox label="Sell-side M&A" />
          <CheckBox label="Buy-side M&A" />
          <CheckBox label="Strategic Advisory" />
          <CheckBox label="Valuation" />
          <CheckBox label="Fractional CFO" />
          <Textarea placeholder="Additional Notes" />
        </div>

        <TypographyP2 className="my-5 flex w-full">
          3. Optional Valuation Report
        </TypographyP2>
        <CheckBox
          className="my-5 flex w-full flex-1"
          label="I would like to receive a complimentary preliminary valuation assessment report."
        />
        <CheckBox label="I agree to receive communications from Syncap, and I understand Syncap will process my personal information in accordance with Syncap's Privacy Policy.*" />
        <Button variant="solid" className="w-1/3">
          Submit
        </Button>
      </div>
    </FormLayout>
  );
};

export default userInquiry;

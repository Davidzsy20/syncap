import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/Button';
import { DropdownInput, Input } from '@/components/Input';
import { FormLayout } from '@/components/layout/FormLayout';
import { TypographyH2, TypographyP2 } from '@/components/Text';

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
  [key: string]: any; // Allows additional fields dynamically
}

const UserInquiry = () => {
  const { handleSubmit, control, setValue } = useForm<FormData>();
  const [companyType, setCompanyType] = useState<string>('');

  const handleCompanyTypeChange = (type: string) => {
    setCompanyType(type);
    setValue('interestInSyncap', ''); // Reset interestInSyncap field
    setValue('additionalField', ''); // Reset additionalField field
  };

  const interestOptions: { [key: string]: string[] } = {
    'M&A Advisor': [
      'Sellside M&A',
      'Buyside M&A',
      'Raising Capital for an Operating Company',
      'Raising Capital for a Fund',
      'Raising Project Financing',
    ],
    'Business Owner / CXO': [
      'Hire an M&A Advisor',
      'Sell My Company',
      'Raise Growth Capital',
      'Make Acquisitions',
      'Acquire / Invest in Real Estate',
    ],
    'Private Equity Fund': [
      'Acquire / Invest in Companies',
      'Acquire / Invest in Real Estate',
      'Sell a Portfolio Company',
      'Raising Capital for an Operating Company',
      'Raising Capital for a Fund',
    ],
    'Fundless Sponsor': [
      'Acquire / Invest in Companies',
      'Acquire / Invest in Real Estate',
      'Sell a Portfolio Company',
      'Raising Capital for an Operating Company',
      'Raising Capital for a Fund',
    ],
    'Single Family Office': [
      'Acquire / Invest in Companies',
      'Acquire / Invest in Real Estate',
      'Sell a Portfolio Company',
      'Raising Capital for an Operating Company',
    ],
    'Holding Company': [
      'Acquire / Invest in Companies',
      'Acquire / Invest in Real Estate',
      'Sell a Portfolio Company',
      'Raising Capital for an Operating Company',
      'Raising Capital for a Fund',
    ],
    'Search Fund': [
      'Acquire / Invest in Companies',
      'Raising Capital for an Operating Company',
    ],
    'Individual Investor': [
      'Acquire / Invest in Companies',
      'Acquire / Invest in Real Estate',
      'Raising Capital for an Operating Company',
    ],
    Lender: [
      'Lend Directly to Businesses',
      'Lend to Sponsors',
      'Find Capital Providers',
    ],
    'Service Provider': [
      'Help a Client Exit Their Business',
      'Help a Corporate Client Raise Capital',
      'Source Investments for Myself',
      'Source Investments for a Client',
      'Find New Clients',
    ],
    'Student or Recent Graduate': [],
    Other: [],
  };

  const countryOptions = [
    'United States',
    'Argentina',
    'Belgium',
    'Bolivia',
    'Brazil',
    'Canada',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Dominican Republic',
    'Ecuador',
    'El Salvador',
    'France',
    'Germany',
    'Guatemala',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Luxembourg',
    'Mexico',
    'Monaco',
    'Netherlands',
    'Other',
    'Peru',
    'Singapore',
    'Switzerland',
    'United Kingdom',
  ];

  const onSubmit = async (data: FormData) => {
    try {
      // eslint-disable-next-line no-console
      console.log(data);
      // TODO: Add API integration here
      // const response = await fetch('API_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // const result = await response.json();
      // console.log(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
    }
  };

  const renderAdditionalFields = () => {
    switch (companyType) {
      case 'Business Owner / CXO':
        return (
          <>
            <div>
              <TypographyP2>LTM Revenue Range *</TypographyP2>
              <Controller
                name="ltmRevenueRange"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DropdownInput
                    {...field}
                    className="mt-2 block w-full"
                    required
                  >
                    <option value="" className="text-gray-500">
                      Please select
                    </option>
                    <option value="Pre-Revenue">Pre-Revenue</option>
                    <option value="$0-$5M">$0-$5M</option>
                    <option value="$5M-$25M">$5M-$25M</option>
                    <option value="$10M-$50M">$10M-$50M</option>
                    <option value="$20M-$100M">$20M-$100M</option>
                    <option value="$50M-$250M">$50M-$250M</option>
                  </DropdownInput>
                )}
              />
            </div>
            <div>
              <TypographyP2>LTM Net Profit Range *</TypographyP2>
              <Controller
                name="ltmNetProfitRange"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DropdownInput
                    {...field}
                    className="mt-2 block w-full"
                    required
                  >
                    <option value="" className="text-gray-500">
                      Please select
                    </option>
                    <option value="Pre-Profit">Pre-Profit</option>
                    <option value="$0-$500K">$0-$500K</option>
                    <option value="$500K-$1M">$500K-$1M</option>
                    <option value="$1M-$2M">$1M-$2M</option>
                    <option value="$2M-$5M">$2M-$5M</option>
                    <option value="$5M+">$5M+</option>
                  </DropdownInput>
                )}
              />
            </div>
          </>
        );
      case 'Search Fund':
        return (
          <div>
            <TypographyP2>
              Which Structure Best Describes Your Search Fund *
            </TypographyP2>
            <Controller
              name="searchFundStructure"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DropdownInput
                  {...field}
                  className="mt-2 block w-full"
                  required
                >
                  <option value="" className="text-gray-500">
                    Please select
                  </option>
                  <option value="Traditional Model">Traditional Model</option>
                  <option value="Accelerator or Entrepreneur in Residence Model">
                    Accelerator or Entrepreneur in Residence Model
                  </option>
                  <option value="Self Funded Model">Self Funded Model</option>
                </DropdownInput>
              )}
            />
          </div>
        );
      case 'Service Provider':
        return (
          <div>
            <TypographyP2>Describe Your Role *</TypographyP2>
            <Controller
              name="role"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DropdownInput
                  {...field}
                  className="mt-2 block w-full"
                  required
                >
                  <option value="" className="text-gray-500">
                    Please select
                  </option>
                  <option value="Accountant">Accountant</option>
                  <option value="Wealth Manager">Wealth Manager</option>
                  <option value="Attorney">Attorney</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Placement Agent">Placement Agent</option>
                  <option value="Other">Other</option>
                </DropdownInput>
              )}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <FormLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-w-[700px] flex-col gap-4"
      >
        <TypographyH2 className="w-full text-center">Join Syncap</TypographyH2>
        <TypographyP2 className="w-full text-center">
          Once you submit your information below, you can expect next steps for
          becoming a Syncap member.
        </TypographyP2>
        <div className="flex gap-4">
          <div className="w-1/2">
            <TypographyP2>Name *</TypographyP2>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="First Name" required />
              )}
            />
          </div>
          <div className="w-1/2">
            <TypographyP2>&nbsp;</TypographyP2>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Last Name" required />
              )}
            />
          </div>
        </div>
        <div>
          <TypographyP2>Company Name *</TypographyP2>
          <Controller
            name="companyName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Required" required />
            )}
          />
        </div>
        <div>
          <TypographyP2>Company Email *</TypographyP2>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="example@example.com"
                type="email"
                required
              />
            )}
          />
        </div>
        <div>
          <TypographyP2>Phone Number *</TypographyP2>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Required" required />
            )}
          />
        </div>
        <div>
          <TypographyP2>Company Type *</TypographyP2>
          <Controller
            name="companyType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DropdownInput
                {...field}
                className="mt-2 block w-full"
                onChange={(e) => {
                  field.onChange(e);
                  handleCompanyTypeChange(e.target.value);
                }}
                required
              >
                <option value="" className="text-gray-500">
                  Please select
                </option>
                {Object.keys(interestOptions).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </DropdownInput>
            )}
          />
        </div>
        {companyType && (interestOptions[companyType]?.length ?? 0) > 0 && (
          <>
            <div>
              <TypographyP2>Interest in Syncap *</TypographyP2>
              <Controller
                name="interestInSyncap"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DropdownInput
                    {...field}
                    className="mt-2 block w-full"
                    required
                  >
                    <option value="" className="text-gray-500">
                      Please select
                    </option>
                    {(interestOptions[companyType] ?? []).map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </DropdownInput>
                )}
              />
            </div>
            {renderAdditionalFields()}
          </>
        )}
        <div>
          <TypographyP2>Country of Residence *</TypographyP2>
          <Controller
            name="country"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DropdownInput {...field} className="mt-2 block w-full" required>
                <option value="" className="text-gray-500">
                  Please select
                </option>
                {countryOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </DropdownInput>
            )}
          />
        </div>
        <div>
          <TypographyP2>How Did You Hear About Us?</TypographyP2>
          <Controller
            name="howDidYouHearAboutUs"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Required" required />
            )}
          />
        </div>
        <Button variant="solid" className="mt-6 w-full text-lg">
          Complete
        </Button>
      </form>
    </FormLayout>
  );
};

export default UserInquiry;

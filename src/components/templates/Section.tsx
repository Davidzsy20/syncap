import { ArrowTopRightIcon, CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import { CheckBox, CheckBoxButton } from '@/components/Checkbox';
import type { DataContextType } from '@/pages/_app';
import { DataContext, workspaceBaseUrl } from '@/pages/_app';

import { Button } from '../Button';
import { Input } from '../Input';
import { TypographyP1, TypographyP2 } from '../Text';

export const optInFlow = {
  interest_in_syncap: {
    id: 'interest_in_syncap',
    text: 'What would you like to know about?',
    options: [
      { text: 'Selling a Business', next: 'role' },
      { text: 'Buying a Business', next: 'role' },
      { text: 'Raising Capital', next: 'role' },
    ],
  },
  role: {
    id: 'role',
    text: 'What is your main role?',
    options: [
      { text: 'Business Owner / CXO', next: 'objectives_b' },
      { text: 'Investor', next: 'objectives_i' },
      { text: 'Professional Service / Specialist', next: 'objectives_p' },
    ],
    prev: 'interest_in_syncap',
  },
  objectives_b: {
    id: 'objectives_b',
    text: 'Which of the following best describes your objective with Syncap?',
    options: [
      { text: 'Sell My Company', next: 'ltm_revenue_range' },
      { text: 'Scale My Business with Capital', next: 'ltm_revenue_range' },
      {
        text: 'Grow My Business through Acquisitions',
        next: 'ltm_revenue_range',
      },
      { text: 'Other', next: 'ltm_revenue_range' },
    ],
  },
  objectives_i: {
    id: 'objectives_i',
    text: 'Which of the following best describes your objective with Syncap?',
    options: [
      { text: 'Acquire / Invest in Companies', next: 'companytype_i' },
      { text: 'Acquire / Invest in Real Estate', next: 'companytype_i' },
      { text: 'Sell a Portfolio Company', next: 'companytype_i' },
      { text: 'Raise Capital for an Operating Company', next: 'companytype_i' },
      { text: 'Raise Capital for a Fund', next: 'companytype_i' },
    ],
  },
  objectives_p: {
    id: 'objectives_p',
    text: 'Which of the following best describes your objective with Syncap?',
    options: [
      { text: 'Help a Client Exit Their Business', next: 'employee_count' },
      { text: 'Help a Corporate Client Raise Capital', next: 'employee_count' },
      { text: 'Source Investments for Myself', next: 'employee_count' },
      { text: 'Source Investments for a Client', next: 'employee_count' },
      { text: ' Find New Clients', next: 'employee_count' },
    ],
  },
  companytype_i: {
    id: 'companytype_i',
    text: 'Which of the following best describes your company?',
    options: [
      { text: 'Venture Capital', next: 'inquiry_form' },
      { text: 'Private Equity', next: 'inquiry_form' },
      { text: 'Corporate', next: 'inquiry_form' },
      { text: 'Family Office', next: 'inquiry_form' },
      { text: 'Search Fund', next: 'inquiry_form' },
      { text: 'Independent Sponsor', next: 'inquiry_form' },
      { text: 'Other', next: 'inquiry_form' },
    ],
  },
  companytype_p: {
    id: 'companytype_p',
    text: 'Which of the following best describes your company?',
    options: [
      { text: 'Accountant', next: 'employee_count' },
      { text: 'Attorney', next: 'employee_count' },
      { text: 'Wealth Manager', next: 'employee_count' },
      { text: 'Advisor Consultant', next: 'employee_count' },
      { text: 'Placement Agent', next: 'employee_count' },
      { text: 'Other', next: 'employee_count' },
    ],
  },
  ltm_revenue_range: {
    id: 'companyRev_b',
    text: 'To help us understand your business better, which range of annual revenue does your company fall into?',
    options: [
      { text: 'Pre-revenue', next: 'ltm_net_profit_range' },
      { text: 'Below $5M', next: 'ltm_net_profit_range' },
      { text: '$5M-$25M', next: 'ltm_net_profit_range' },
      { text: '$25M-$100M', next: 'ltm_net_profit_range' },
      { text: 'Above $100M', next: 'ltm_net_profit_range' },
    ],
    prev: 'objectives_b',
  },
  ltm_net_profit_range: {
    id: 'companyProfit_b',
    text: 'To help us understand your business better, which range of annual revenue does your company fall into?',
    options: [
      { text: 'Pre-profit', next: 'employee_count' },
      { text: 'Below $1M', next: 'employee_count' },
      { text: '$1M-$10M', next: 'employee_count' },
      { text: '$10M+', next: 'employee_count' },
    ],
  },
  employee_count: {
    id: 'employee_count',
    text: 'This helps us understand your scale of operation. How many employees does your company have?',
    options: [
      { text: 'solo', next: 'inquiry_form' },
      { text: '1-10 Employees', next: 'inquiry_form' },
      { text: '11-50 Employees', next: 'inquiry_form' },
      { text: '51-100 Employees', next: 'inquiry_form' },
      { text: '101-250 Employees', next: 'inquiry_form' },
      { text: '251+', next: 'inquiry_form' },
    ],
  },
  search_fund_structure: {
    id: 'search_fund_structure',
    text: 'What type of search fund structure do you use?',
    options: [
      { text: 'Traditional Model', next: 'inquiry_form' },
      {
        text: 'Accelerator or Entrepreneur in Residence Model',
        next: 'inquiry_form',
      },
      { text: 'Self Funded Model', next: 'inquiry_form' },
    ],
  },
  inquiry_form: {
    id: 'inquiry_form',
    text: 'Confirm the information below and we will get in touch with you as soon as possible.',
  },
  // Add more nodes as needed...
};
export const MultiSelectionGroup = ({ options, onSelect, selections }: any) => {
  return (
    <div className="mb-4 mt-8 flex flex-col gap-2">
      <div className="flex flex-col gap-4 lg:flex-row">
        {options.map((option: any, ind: number) => {
          const { text } = option;
          const selected = selections === option.text;
          return (
            <CheckBoxButton
              variation="checkbox"
              classname={clsx(
                'min-w-[250px] whitespace-nowrap p-3 lg:w-1/3',
                selected && 'bg-gray-200/20'
              )}
              key={text + ind}
              onSelect={() => {
                onSelect(option);
              }}
            >
              <div className={clsx('flex items-center justify-between')}>
                <h3 className="text-text-100"> {text}</h3>
                {selected && <CheckIcon color="white" />}
              </div>
            </CheckBoxButton>
          );
        })}
      </div>
    </div>
  );
};
export const OptInSection = () => {
  const [withReport, setWithReport] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');
  const { setData, data } = useContext(DataContext) as DataContextType;
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    const result = z.string().email().safeParse(email);
    if (!result.success) {
      toast.error('Please enter a valid email');
      return;
    }
    if (!selectedOptions) {
      toast.error('Please select a preferrence');
      return;
    }

    setData({
      ...data,
      inquiry_form: {
        company_email: email,
        withReport,
        interest_in_syncap: selectedOptions,
      },
    });

    router.push(
      `${workspaceBaseUrl}/qualification/role?company_email=${email}&withReport=${withReport}&interest_in_syncap=${selectedOptions}`
    );
  };
  return (
    <div
      className={clsx(
        'z-50 mx-0 w-full bg-primary-1050',
        pathname?.includes('/interest_in_syncap') &&
          'no-scroll fixed top-0 h-screen w-screen backdrop-blur'
        // : 'h-screen w-screen backdrop-blur fixed top-0 no-scroll'
      )}
    >
      <div className="mx-auto w-full max-w-screen-lg p-8">
        <TypographyP2 className="text-gray-100">
          Learn how Syncap can help you achieve your strategic objectives <br />
          with speed, control, and optimized value.
        </TypographyP2>

        <MultiSelectionGroup
          onSelect={(option: any) => setSelectedOptions(option.text)}
          selections={selectedOptions}
          options={optInFlow.interest_in_syncap.options}
        />
        <CheckBox
          onSelect={() => {
            setWithReport(!withReport);
          }}
          className="invert"
          selected={withReport}
          label="I would like to receive a complimentary preliminary valuation assessment report."
        />
        <div className="mt-10 flex justify-start">
          <div className="flex flex-wrap gap-2 pb-1">
            <Input
              className="w-[350px] border-white text-text-100"
              placeholder="Enter business email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="Company Email"
              type="email"
            />
            <Button
              onClick={handleClick}
              className="flex h-fit self-end text-nowrap items-center"
              variant="secondary"
            >
              <TypographyP1>Schedule a Free Consultation</TypographyP1>
              <ArrowTopRightIcon className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}
export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-6">
      {/* <div className="text-sm font-medium text-gray-700 mb-1">
        Step {currentStep} of {totalSteps}
      </div> */}
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-text-100 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

import React from 'react';

import FeatureComparisonTable from '../FeatureComparisonTable';
import PricingTier from '../PricingTier';

const PricingFeatures = () => {
  const headers = ['Syncap', 'Syncap Plus', 'Syncap Enterprise'];
  const rows = [
    {
      category: 'Corporate card & expense management',
      features: [
        { name: 'Unlimited virtual cards', values: [true, true, true] },
        { name: 'Category and vendor controls', values: [true, true, true] },
        {
          name: 'Expense policy enforcement',
          values: [true, true, 'Advanced capabilities'],
        },
        { name: 'Travel booking', values: [true, true, true] },
        { name: 'Multiple travel policies', values: [true, true, true] },
        {
          name: 'Unlimited auto-receipt collection, matching, and generation',
          values: [true, true, true],
        },
        {
          name: 'Multi-currency, cash, and mileage reimbursements',
          values: [true, true, true],
        },
        {
          name: 'Customizable workflows for approval accounting, and transaction alerts/flags',
          values: [true, 'Advanced capabilities', 'Advanced capabilities'],
        },
        {
          name: 'Issue limits and create spend programs in non-USD',
          values: [true, true, true],
        },
        { name: 'International card issuance', values: [false, true, true] },
      ],
    },
    {
      category: 'Accounts payable & procurement',
      features: [
        {
          name: 'AP automation with unlimited invoice extraction (OCR)',
          values: [true, true, true],
        },
        {
          name: 'Pay bills by check, ACH, same-day ACH, Card or internationally in USD & local currency',
          values: [true, true, true],
        },
        { name: 'Extended payment terms', values: [true, true, true] },
        {
          name: 'Automatic vendor tracking, context extraction & price intelligence',
          values: [true, true, true],
        },
        { name: 'Custom request intake form', values: [true, true, true] },
        { name: 'Purchase order (PO) management', values: [true, true, true] },
      ],
    },
    {
      category: 'Accounting & integrations',
      features: [
        {
          name: 'HRIS integrations',
          values: [true, 'Advanced capabilities', 'Advanced capabilities'],
        },
        { name: 'Automated HRIS syncs', values: [true, true, true] },
        {
          name: 'Direct accounting integrations',
          values: [
            'QuickBooks & Xero',
            '+ Microsoft, Netsuite & Sage',
            '+ Oracle & Workday',
          ],
        },
        {
          name: 'Rules to automate accounting coding',
          values: ['Basic', 'Advanced', 'Advanced'],
        },
        {
          name: 'Advanced accounting capabilities (e.g. amortization, multi-entity, multi-currency, tax support, custom field support)',
          values: [true, 'Advanced capabilities', 'Advanced capabilities'],
        },
      ],
    },
    {
      category: 'Reporting, security, and compliance',
      features: [
        {
          name: 'Real-time spend reporting with automated savings insights and perks',
          values: [true, true, true],
        },
        {
          name: 'Secure logins with SSO, SAML, and IDP',
          values: [true, true, true],
        },
        {
          name: 'Advanced user roles & permissions (e.g. delegate approvers, guest, IT admin)',
          values: [true, true, true],
        },
        { name: 'Custom reporting', values: [false, true, true] },
      ],
    },
    {
      category: 'Customer success & support',
      features: [
        { name: 'Email, chat, and phone support', values: [true, true, true] },
        { name: 'Priority support', values: [false, true, true] },
        { name: 'Dedicated account management', values: [false, false, true] },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Everything you need to spend less
      </h1>
      <p className="mb-8 text-center text-gray-600">
        No matter where you are in your growth or the world, Syncap is designed
        to save you time and money.
      </p>
      <div className="mb-12 flex flex-col justify-center space-x-6 md:flex-row">
        <PricingTier
          saveText="Save an average of 5%"
          planName="Syncap"
          price="$0"
          priceDescription="per user/mo"
          description="Control spend, automate payments, and close your books at lightning speed."
          buttonText="Get started"
          featuresTitle="Syncap features:"
          features={[
            'Unlimited cards and smart controls',
            'Travel booking',
            'Automated expense management',
            'Vendor management and accounts payable',
            'Accounting software sync',
            'Real-time saving insights',
          ]}
        />
        <PricingTier
          saveText="Save an average of 7%"
          planName="Syncap Plus"
          price="$15"
          priceDescription="per user/mo billed monthly"
          description="Granular controls and increased customization to scale and expand globally."
          buttonText="Try Plus free for 30 days"
          featuresTitle="Everything in Syncap, and:"
          features={[
            'Custom controls and advanced user roles',
            'Unlimited customizable workflows',
            'Procurement automation and PO management',
            'Advanced ERP integrations with multi-entity support',
            'International capabilities, with multi-currency card limits and spend programs',
          ]}
        />
        <PricingTier
          saveText="Contact us for a custom value assessment"
          planName="Syncap Enterprise"
          price="Contact sales for pricing"
          priceDescription=""
          description="Enhanced security, compliance, and dedicated support to operate efficiently."
          buttonText="Contact sales"
          featuresTitle="Everything in Syncap Plus, and:"
          features={[
            'Custom implementation',
            'Enterprise ERP integrations',
            'Local card issuance',
            'SOX compliance customizations',
            'Premium support',
          ]}
        />
      </div>
      <FeatureComparisonTable headers={headers} rows={rows} />
    </div>
  );
};

export default PricingFeatures;

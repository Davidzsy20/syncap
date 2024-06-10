import React from 'react';

type PricingTierProps = {
  saveText: string;
  planName: string;
  price: string;
  priceDescription: string;
  description: string;
  buttonText: string;
  featuresTitle: string;
  features: string[];
};

const PricingTier = ({
  saveText,
  planName,
  price,
  priceDescription,
  description,
  buttonText,
  featuresTitle,
  features,
}: PricingTierProps) => {
  return (
    <div className="w-80 rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4">
        <span className="rounded bg-yellow-200 px-2.5 py-0.5 text-sm font-semibold text-yellow-800">
          {saveText}
        </span>
      </div>
      <h2 className="mb-4 text-2xl font-bold">{planName}</h2>
      <p className="mb-4 text-xl font-semibold">
        {price}{' '}
        <span className="text-base font-normal">{priceDescription}</span>
      </p>
      <p className="mb-6 text-gray-600">{description}</p>
      <button className="w-full rounded bg-yellow-500 py-2 text-white">
        {buttonText}
      </button>
      <hr className="my-6 border-gray-300" />
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold">{featuresTitle}</h3>
        <ul className="space-y-1 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="mr-2 size-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingTier;

import React from 'react';

type FeatureComparisonTableProps = {
  headers: string[];
  rows: {
    category: string;
    features: {
      name: string;
      values: (string | boolean)[];
      notes?: string;
    }[];
  }[];
};

const FeatureComparisonTable = ({
  headers,
  rows,
}: FeatureComparisonTableProps) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">Compare features</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="w-1/4 px-4 py-2"></th>
              {headers.map((header, index) => (
                <th key={index} className="w-1/4 border px-4 py-2 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr className="bg-gray-100">
                  <td
                    colSpan={headers.length + 1}
                    className="px-4 py-2 text-left font-semibold"
                  >
                    {row.category}
                  </td>
                </tr>
                {row.features.map((feature, featureIndex) => (
                  <tr key={featureIndex}>
                    <td className="w-1/4 border px-4 py-2">{feature.name}</td>
                    {feature.values.map((value, valueIndex) => (
                      <td
                        key={valueIndex}
                        className="w-1/4 border px-4 py-2 text-center"
                      >
                        {value ? (
                          <svg
                            className="mx-auto size-4 text-green-500"
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
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparisonTable;

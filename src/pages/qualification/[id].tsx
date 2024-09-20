import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/Button';
import {
  MultiSelectionGroup,
  optInFlow,
  OptInSection,
  ProgressBar,
} from '@/components/templates/Section';
import { TypographyH5, TypographyH6 } from '@/components/Text';

const calculateMaxDepth = (flow: any, nodeId = 'init', depth = 0) => {
  const node = flow[nodeId];
  if (!node || !node.options) return depth;

  return Math.max(
    ...node.options.map((option: any) =>
      calculateMaxDepth(flow, option.next, depth + 1)
    )
  );
};

const getStepInfo = (flow: any, path: string[]) => {
  const maxDepth = calculateMaxDepth(flow);
  const currentDepth = path.length;

  const stepsTaken = currentDepth;
  const estimatedStepsLeft = maxDepth - currentDepth;

  return {
    stepsTaken,
    estimatedStepsLeft,
    maxPossibleSteps: maxDepth,
  };
};

const QualificationPage = () => {
  const router = useRouter();
  const { id: queryId = 'init' } = router.query;
  const [step, setStep] = useState<string>(
    typeof queryId === 'string' ? queryId : 'init'
  );
  const [path, setPath] = useState<string[]>([step]);

  useEffect(() => {
    if (typeof queryId === 'string') {
      setStep(queryId);
      setPath((prev) => [...prev, queryId]);
    }
  }, [queryId]);

  const renderInitialStep = useCallback(() => {
    const stepData = optInFlow[step as keyof typeof optInFlow];
    if (!stepData) return null;
    const { options, text, id, prev } = stepData as any;

    if (!options?.length) {
      router.push(`/qualification/${id}`);
      return null;
    }

    if (step === 'init') {
      return <OptInSection />;
    }

    return (
      <div className="mx-auto flex size-full max-w-[880px] flex-col justify-center p-8">
        <TypographyH6 className="invert">Is Syncap right for you?</TypographyH6>
        <TypographyH5 className="text-gray-800 invert">{text}</TypographyH5>
        <MultiSelectionGroup
          onSelect={(option: any) => {
            const nextStep = option.next;
            setStep(nextStep);
            setPath((prevState) => [...prevState, nextStep]);
            router.push(`/qualification/${nextStep}`);
          }}
          options={options}
        />
        {prev && (
          <Button
            onClick={() => {
              setStep(prev);
              setPath((prevPath) => prevPath.slice(0, -1));
              router.push(`/qualification/${prev}`);
            }}
            variant={'checkbox'}
            className="w-fit text-white"
          >
            Back
          </Button>
        )}
      </div>
    );
  }, [step, router]);

  const stepInfo = getStepInfo(optInFlow, path);

  return (
    <div
      className={clsx(
        'z-50 mx-0 w-full bg-gray-1000',
        step === 'init'
          ? 'h-full'
          : 'no-scroll fixed top-0 h-screen w-screen backdrop-blur'
      )}
    >
      <ProgressBar
        currentStep={stepInfo.stepsTaken}
        totalSteps={stepInfo.maxPossibleSteps}
      />
      {renderInitialStep()}
    </div>
  );
};

export default QualificationPage;

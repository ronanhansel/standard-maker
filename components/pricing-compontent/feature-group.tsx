import type { PlanFeature } from './feature-row';
import { FeatureRow } from './feature-row';

export interface FeatureGroupData {
  title: string;
  features: PlanFeature[];
}

export const FeatureGroup = ({
  data,
  highlightPro = false
}: {
  data: FeatureGroupData;
  highlightPro?: boolean;
}) => {
  const { title, features } = data;

  return (
    <div className='mb-4 sm:mb-6'>
      <div className='my-2 px-3 text-lg font-bold text-white sm:my-4 sm:px-4 sm:text-xl'>
        {title}
      </div>
      <div className='overflow-hidden'>
        {features.map((feature, index) => (
          <FeatureRow key={index} data={feature} highlightPro={highlightPro} />
        ))}
      </div>
    </div>
  );
};

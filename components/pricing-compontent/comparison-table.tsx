import type { DictionaryType } from '@/lib/types';

import type { FeatureGroupData } from './feature-group';
import { FeatureGroup } from './feature-group';
import { TableCTA } from './table-cta';
import { TableHeader } from './table-header';

export const ComparisonTable = ({ dictionary }: { dictionary: DictionaryType }) => {
  // Example data - can be modified as needed
  const featureGroups: FeatureGroupData[] = [
    {
      title: '',
      features: [
        {
          free: dictionary.pricing.comparisonTable.unlimitedNote,
          pro: dictionary.pricing.comparisonTable.unlimitedNote
        },
        {
          free: dictionary.pricing.comparisonTable.publicStorage25MB,
          pro: dictionary.pricing.comparisonTable.publicStorage2GB
        },
        {
          free: dictionary.pricing.comparisonTable.crossDeviceSync,
          pro: dictionary.pricing.comparisonTable.realtimeSync
        },
        {
          free: dictionary.pricing.comparisonTable.limitedAutoCompletion,
          pro: dictionary.pricing.comparisonTable.unlimitedAutoCompletion
        }
      ]
    },
    {
      title: dictionary.pricing.comparisonTable.features,
      features: [
        {
          free: dictionary.pricing.comparisonTable.liteModels,
          pro: dictionary.pricing.comparisonTable.tenPlusModels
        },
        {
          free: dictionary.pricing.comparisonTable.limitedMessages,
          pro: dictionary.pricing.comparisonTable.premiumMessages
        },
        {
          free: dictionary.pricing.comparisonTable.noYouTubeAnalysis,
          pro: dictionary.pricing.comparisonTable.multiMediaAnalysis
        },
        {
          free: dictionary.pricing.comparisonTable.noCustomAPI,
          pro: dictionary.pricing.comparisonTable.customAPI
        },
        {
          free: dictionary.pricing.comparisonTable.communitySupport,
          pro: dictionary.pricing.comparisonTable.prioritySupport
        },
        {
          free: dictionary.pricing.comparisonTable.noExport,
          pro: dictionary.pricing.comparisonTable.export
        },
        {
          free: dictionary.pricing.comparisonTable.backup,
          pro: dictionary.pricing.comparisonTable.backup
        },
        {
          free: dictionary.pricing.comparisonTable.limitedSAT,
          pro: dictionary.pricing.comparisonTable.unlimitedSAT
        },
        {
          free: dictionary.pricing.comparisonTable.fastestExperience,
          pro: dictionary.pricing.comparisonTable.fastestExperience
        }
      ]
    }
  ];

  return (
    <div className='mx-auto mb-10 w-full max-w-2xl px-15 sm:mb-20 sm:px-6 md:px-8'>
      <div className='overflow-x-auto rounded-lg border border-gray-600/20'>
        <div className='text-white'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex flex-col border-b border-gray-600/20 sm:border-r sm:border-b-0'>
              <TableHeader dictionary={dictionary} showBackground={false} planType='free' />
              <div>
                {featureGroups.map((group, index) => (
                  <FeatureGroup key={index} data={group} highlightPro={false} />
                ))}
              </div>
              <div>
                <TableCTA dictionary={dictionary} showBackground={false} planType='free' />
              </div>
            </div>
            <div className='flex flex-col rounded-lg bg-gray-600/20'>
              <TableHeader dictionary={dictionary} showBackground={false} planType='pro' />
              <div>
                {featureGroups.map((group, index) => (
                  <FeatureGroup key={index} data={group} highlightPro={true} />
                ))}
              </div>
              <div>
                <TableCTA dictionary={dictionary} showBackground={false} planType='pro' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import type { AvailabilityStatus } from './table-cell';
import { TableCell } from './table-cell';

export interface PlanFeature {
  free: AvailabilityStatus | string;
  pro: AvailabilityStatus | string;
}

export const FeatureRow = ({
  data,
  highlightPro = false
}: {
  data: PlanFeature;
  highlightPro?: boolean;
}) => {
  const { free, pro } = data;

  return (
    <div className='grid grid-cols-1 border-b border-neutral-700 px-2 last:border-b-0'>
      <TableCell value={highlightPro ? pro : free} />
    </div>
  );
};

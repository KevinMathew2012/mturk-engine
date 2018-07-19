import { ResourceList } from '@shopify/polaris';
import { Iterable } from 'immutable';
import * as React from 'react';
import { HitId } from '../../types';
import BlockedHitCard from './BlockedHitCard';
import { DATABASE_FILTER_RESULTS_PER_PAGE } from 'constants/misc';
import HitBlockListFilterControl from './HitBlockListFilterControl';

interface Props {
  readonly page: number;
  readonly hitIds: Iterable<HitId, HitId>;
}

class HitBlockListFilter extends React.Component<Props, never> {
  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.page !== this.props.page ||
      !nextProps.hitIds.equals(this.props.hitIds)
    );
  }

  public render() {
    const { hitIds, page } = this.props;
    const start = DATABASE_FILTER_RESULTS_PER_PAGE * page;
    const end = start + DATABASE_FILTER_RESULTS_PER_PAGE;
    const itemsToShow = hitIds.slice(start, end).toArray();
    return (
      <ResourceList
        showHeader
        filterControl={<HitBlockListFilterControl />}
        resourceName={{ singular: 'Blocked HIT', plural: 'Blocked HITs' }}
        items={itemsToShow}
        renderItem={(id: string) => <BlockedHitCard blockedHitId={id} />}
      />
    );
  }
}

export default HitBlockListFilter;
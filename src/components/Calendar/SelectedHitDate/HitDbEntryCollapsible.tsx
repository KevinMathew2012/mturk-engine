import * as React from 'react';
import { Collapsible, Card, Stack, TextStyle, Caption } from '@shopify/polaris';
import { HitDatabaseEntry } from '../../../types';

export interface Props {
  readonly open: boolean;
  readonly hit: HitDatabaseEntry;
}

class HitDbEntryCollapsible extends React.PureComponent<Props, never> {
  public render() {
    const { open, hit: { id, feedback, requester } } = this.props;
    return (
      <Collapsible open={open}>
        <Card.Section>
          <Stack vertical spacing="loose" distribution="equalSpacing">
            <Caption>
              Hit ID:  <TextStyle variation="subdued">{id}</TextStyle>
            </Caption>
            <Caption>
              Requester: {' '}
              <TextStyle variation="subdued">{requester.name}</TextStyle>
            </Caption>
            <Caption>
              Feedback: {' '}
              <TextStyle variation="subdued">
                {feedback || 'No feedback given.'}
              </TextStyle>
            </Caption>
          </Stack>
        </Card.Section>
      </Collapsible>
    );
  }
}

export default HitDbEntryCollapsible;
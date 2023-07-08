import * as React from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { ArrowIosBackIcon, ArrowIosForwardIcon } from '../Icons/Icons';

type ChartAggregateHeaderProps = {
  aggregateText: string;
  value: number;
  valueText: string;
  intervalText: string;
  showNavButtons?: boolean;
  onBackButtonPress?: ((event: GestureResponderEvent) => void) | undefined;
  onForwardButtonPress?: ((event: GestureResponderEvent) => void) | undefined;
  backButtonDisabled?: boolean;
  forwardButtonDisabled?: boolean;
};

/**
 * A header for charts showing aggregate values with optional navigation icons.
 * Inspired by iOS health app charts.
 */
const ChartAggregateHeader = (props: ChartAggregateHeaderProps) => {
  const {
    aggregateText = '',
    value = 0,
    valueText = '',
    intervalText = '',
    showNavButtons = true,
    onBackButtonPress = undefined,
    onForwardButtonPress = undefined,
    backButtonDisabled = false,
    forwardButtonDisabled = false,
  } = props;

  return (
    <Layout style={styles.horizontalContainer}>
      <Layout style={styles.aggregateContainer}>
        <Text category="s2" appearance="hint">{aggregateText.toUpperCase()}</Text>
        <Text>
          <Text category="h4">{value.toLocaleString()} </Text>
          <Text category="s1" appearance="hint">{valueText}</Text>
        </Text>
        <Text category="s1" appearance="hint">{intervalText}</Text>
      </Layout>
      <Layout style={styles.buttonContainer}>
        {showNavButtons &&
          <>
            <Button
              style={styles.button}
              size="medium"
              status="basic"
              appearance="ghost"
              accessoryLeft={ArrowIosBackIcon}
              onPress={onBackButtonPress}
              disabled={backButtonDisabled}
            />
            <Button
              style={styles.button}
              status="basic"
              appearance="ghost"
              accessoryRight={ArrowIosForwardIcon}
              onPress={onForwardButtonPress}
              disabled={forwardButtonDisabled}
            />
          </>
        }
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  aggregateContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  button: {},
});

export default ChartAggregateHeader;

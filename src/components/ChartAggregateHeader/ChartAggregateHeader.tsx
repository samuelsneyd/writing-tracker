import * as React from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Button, Divider, Layout, Text, useTheme } from '@ui-kitten/components';
import { useAppSelector } from '../../store/hooks';
import { ArrowIosBackIcon, ArrowIosForwardIcon } from '../Icons/Icons';

type ChartAggregateHeaderProps = {
  aggregateText: string;
  value: number | string;
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
    value,
    aggregateText = '',
    valueText = '',
    intervalText = '',
    showNavButtons = true,
    onBackButtonPress = undefined,
    onForwardButtonPress = undefined,
    backButtonDisabled = false,
    forwardButtonDisabled = false,
  } = props;
  const theme = useTheme();
  const reduxTheme = useAppSelector(state => state.theme);

  // Slightly more contrast against dark backgrounds than the text hint color
  const semiHintColor = reduxTheme.colorMode === 'light'
    ? theme['color-basic-600'] // Same as default text-hint-color
    : theme['color-basic-500'];

  return (
    <>
      <Layout style={styles.horizontalContainer}>
        <Layout style={styles.aggregateContainer}>
          <Text category="s2" style={{ color: semiHintColor }}>{aggregateText.toUpperCase()}</Text>
          <Text>
            <Text category="h4">{typeof value === 'number' ? value.toLocaleString() : value} </Text>
            <Text category="s1" style={{ color: semiHintColor }} appearance="hint">{valueText}</Text>
          </Text>
          <Text category="s1" style={{ color: semiHintColor }}>{intervalText}</Text>
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
      <Divider style={styles.divider} />
    </>
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
  divider: {
    height: 0,
    marginTop: 4,
    marginBottom: 12,
  },
});

export default ChartAggregateHeader;

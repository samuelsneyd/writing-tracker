import { ColorValue, StyleProp, View, ViewStyle } from 'react-native';

export type BarDataItemType = {
  value?: number;
  onPress?: any;
  frontColor?: ColorValue;
  sideColor?: ColorValue;
  topColor?: ColorValue;
  showGradient?: Boolean;
  gradientColor?: any;
  label?: string;
  barWidth?: number;
  sideWidth?: number;
  labelTextStyle?: any;
  topLabelComponent?: Function;
  topLabelContainerStyle?: any;
  disablePress?: any;
  labelComponent?: View | Function;
  spacing?: number;
  barBackgroundPattern?: Function;
  patternId?: string;
  barStyle?: object;

  // Any
  [key: string]: any;
};

export type BarChartProps = {
  showTitle?: boolean;
  barChartContainerStyle?: StyleProp<ViewStyle>;
};

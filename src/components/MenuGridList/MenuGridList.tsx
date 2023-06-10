import React from 'react';
import { Dimensions, ListRenderItemInfo, StyleSheet } from 'react-native';
import {
  Card,
  IconElement,
  IconProps,
  List,
  ListElement,
  ListItemElement,
  ListProps,
  Text,
  useTheme,
} from '@ui-kitten/components';

export type MenuItem = {
  title: string;
  icon: (props: IconProps) => IconElement;
};

export type MenuGridListProps = Omit<ListProps, 'renderItem'> & {
  data: MenuItem[];
  onItemPress: (index: number) => void;
};

export const MenuGridList = (props: MenuGridListProps): ListElement => {
  const { contentContainerStyle, onItemPress, ...listProps } = props;
  const theme = useTheme();

  const renderItem = (info: ListRenderItemInfo<MenuItem>): ListItemElement => (
    <Card
      style={styles.item}
      onPress={() => props.onItemPress(info.index)}
    >
      {info.item.icon({ ...styles.itemIcon, fill: theme['color-primary-500'] })}
      <Text
        style={styles.itemTitle}
        category="s2"
      >
        {info.item.title}
      </Text>
    </Card>
  );

  return (
    <List
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    aspectRatio: 1.0,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
  },
  itemIcon: {
    alignSelf: 'center',
    width: 64,
    height: 64,
  },
  itemTitle: {
    alignSelf: 'center',
    marginTop: 8,
  },
});

import { mergeCssSets } from '@uifabric/merge-styles';
import React from 'react';
import classnames from 'classnames';
import View from './View';

const classes = mergeCssSets([{
  outer: {
    alignSelf: 'flex-start',
    padding: 4
  },
  row: {
    flexDirection: 'row'
  },
  color0: {
    backgroundColor: '#14171A'
  },
  color1: {
    backgroundColor: '#AAB8C2'
  },
  color2: {
    backgroundColor: '#E6ECF0'
  },
  color3: {
    backgroundColor: '#FFAD1F'
  },
  color4: {
    backgroundColor: '#F45D22'
  },
  color5: {
    backgroundColor: '#E0245E'
  },
  fixed: {
    width: 6,
    height: 6
  }
}]);

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => {
  const className = classnames(
    classes[`color${color}`],
    fixed && classes.fixed,
    layout === 'row' && classes.row,
    outer && classes.outer
  );

  return <View className={className} {...other} />;
};

export default Box;

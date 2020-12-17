import { mergeCssSets } from '@uifabric/merge-styles';
import { memoizeFunction } from '@uifabric/utilities';
import React from 'react';

const getClasses = memoizeFunction((className) => mergeCssSets([{
  root: [
    {
      alignItems: 'stretch',
      borderWidth: 0,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexDirection: 'column',
      flexShrink: 0,
      margin: 0,
      padding: 0,
      position: 'relative',
      // fix flexbox bugs
      minHeight: 0,
      minWidth: 0
    },
    className // merge-styles will retrieve raw styles and merge with the rest
  ]
}]));

function View(props) {
  const { className, ...other } = props;
  const classes = getClasses(className);

  return <div {...other} className={classes.root} />;
}

export default View;

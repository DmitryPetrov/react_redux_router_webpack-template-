import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { formatXml } from './../functions/formatXml';

export const style = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function SoapMessageList(props) {
  const classes = style();

  if (props.list === null) {
    return <div></div>;
  }

  return (
    <div>
      <Typography className={classes.heading}>SOAP messages: {props.message}</Typography>
      {props.list.map((item, index) => (
        <Box component="pre" overflow="auto">
          <pre key={index}>{formatXml(item)}</pre>
        </Box>
      ))}
    </div>
  );
}

export default (SoapMessageList);


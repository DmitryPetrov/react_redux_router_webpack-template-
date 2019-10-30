import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  FormControl: {
    marginTop: theme.spacing(1),
    width: "50%",
  },
  select: {
    height: theme.spacing(5),
  }
}));


const DeviceList = (props) => {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
 
  return (
    <FormControl variant="outlined" className={classes.FormControl}>
      <InputLabel ref={inputLabel}>
        Device number
      </InputLabel>
      <Select
        className={classes.select}
        margin="dense"
        value={props.defaultValue}
        onChange={(event) => props.handler(event.target.value)}
        labelWidth={labelWidth}
      >
        {props.items.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default DeviceList;

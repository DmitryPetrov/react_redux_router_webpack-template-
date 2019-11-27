import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
}));


const CertificateList = (props) => {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
 
  return (
    <FormControl variant="outlined" className={classes.textField}>
      <InputLabel ref={inputLabel}>
        Certificate
      </InputLabel>
      <Select
        margin="dense"
        value={props.defaultValue}
        onChange={(event) => props.handle(event.target.value)}
        labelWidth={labelWidth}
      >
        {props.items.map((item, index) => <MenuItem value={index} key={index}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default CertificateList;

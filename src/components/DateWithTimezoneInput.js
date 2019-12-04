import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  div: {
    width: "100%",
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginLeft: "3%",
    minWidth: "30%",
  },
  textField: {
    width: "67%",
  }
}));

function getDate(date) {
  let start = 0;
  let end = date.indexOf("+");
  return date.substring(start, end);
}

function getTimezone(date) {
  let start = date.indexOf("+");
  let end = date.length;
  return date.substring(start, end);
}

function DateWithTimezoneInput(props) {
  const classes = useStyles();
  
  const [state, setState] = React.useState(
    {
      date: getDate(props.date),
      timezone: getTimezone(props.date)
    });

  const timezoneHandle = event => {
    setState({...state, "timezone": event.target.value});
    props.handle(state.date + event.target.value);
  }

  const dateHandle = event => {
    let newDate = event.target.value;
    if(newDate.length === 16) {
      newDate += ":00";
    }
    setState({...state, "date": newDate});
    props.handle(newDate + state.timezone);
  };

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div className={classes.div}>
      <TextField
        label={props.label}
        variant="outlined"
        type="datetime-local"
        defaultValue={state.date}
        className={classes.textField}
        margin="dense"
        InputLabelProps={{shrink: true}}
        inputProps={{step: 1}} // 1 sec
        onChange={dateHandle}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          timezone
        </InputLabel>
        <Select
          margin="dense"
          value={state.timezone}
          onChange={timezoneHandle}
          labelWidth={labelWidth}
        >
          <MenuItem value="-11:00">-11:00</MenuItem>
          <MenuItem value="-10:00">-10:00</MenuItem>
          <MenuItem value="-09:00">-09:00</MenuItem>
          <MenuItem value="-08:00">-08:00</MenuItem>
          <MenuItem value="-07:00">-07:00</MenuItem>
          <MenuItem value="-06:00">-06:00</MenuItem>
          <MenuItem value="-05:00">-05:00</MenuItem>
          <MenuItem value="-04:00">-04:00</MenuItem>
          <MenuItem value="-03:00">-03:00</MenuItem>
          <MenuItem value="-02:00">-02:00</MenuItem>
          <MenuItem value="-01:00">-01:00</MenuItem>
          <MenuItem value="+00:00">+00:00</MenuItem>
          <MenuItem value="+01:00">+01:00</MenuItem>
          <MenuItem value="+02:00">+02:00</MenuItem>
          <MenuItem value="+03:00">+03:00</MenuItem>
          <MenuItem value="+04:00">+04:00</MenuItem>
          <MenuItem value="+05:00">+05:00</MenuItem>
          <MenuItem value="+06:00">+06:00</MenuItem>
          <MenuItem value="+07:00">+07:00</MenuItem>
          <MenuItem value="+08:00">+08:00</MenuItem>
          <MenuItem value="+09:00">+09:00</MenuItem>
          <MenuItem value="+10:00">+10:00</MenuItem>
          <MenuItem value="+11:00">+11:00</MenuItem>
          <MenuItem value="+12:00">+12:00</MenuItem>
        </Select>
      </FormControl>
    </div>
    )
}

export default DateWithTimezoneInput;


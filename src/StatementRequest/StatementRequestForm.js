import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';

import DateWithTimezoneInput from './DateWithTimezoneInput';
import { DATA } from './initialState';
import { GRID_ITEM_STYLE } from './../style';

const DOC_DATE = DATA.docDate;
const DOC_ID = DATA.docId;
const DOC_NUMBER = DATA.docNumber;
const FROM_DATE = DATA.fromDate;
const TO_DATE = DATA.toDate;
const ORG_ID = DATA.orgId;
const ORG_INN = DATA.orgInn;
const ORG_NAME = DATA.orgName;

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
}));

function StatementRequestForm(props) {
  const classes = useStyles();
  const gridCell = GRID_ITEM_STYLE();

  const textField = (text, handler, value) => <TextField
                    label={text}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    onChange={handler}
                    defaultValue={value}
                  />;

  return (
    <div className={gridCell.component}>
      <Box 
        border={1} 
        borderRadius={4}
        borderColor={grey[500]}
        className={gridCell.componentBorder}
      >
        <form method="post" id="StatementRequestForm" submit="StatementRequestForm" className={gridCell.content}>
          <TextField
            label="docDate"
            variant="outlined"
            type="datetime-local"
            defaultValue={DOC_DATE}
            className={classes.textField}
            margin="dense"
            inputProps={{step: 1}} // 1 sec
            onChange={props.docDateHandler}
          />
          {textField("doc Id", props.docIdHandler, DOC_ID)}
          {textField("doc Number", props.docNumberHandler, DOC_NUMBER)}
          <DateWithTimezoneInput labelText={"fromDate"} dispatchFunc={props.fromDateHandler} date={FROM_DATE}/>
          {textField("org Id", props.orgIdHandler, ORG_ID)}
          {textField("org Inn", props.orgInnHandler, ORG_INN)}
          {textField("org Name", props.orgNameHandler, ORG_NAME)}
          <DateWithTimezoneInput labelText={"toDate"} dispatchFunc={props.toDateHandler} date={TO_DATE}/>
        </form>
      </Box>
    </div>
    )
}

export default StatementRequestForm;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';

import DateWithTimezoneInput from './../components/DateWithTimezoneInput';
import DocumentId from './../components/DocumentId';
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

  const textField = (text, handle, value) => <TextField
                    label={text}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    onChange={handle}
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
            onChange={props.docDateHandle}
          />
          <DocumentId defaultValue={DOC_ID} handle={props.docIdHandle} />
          {textField("doc Number", props.docNumberHandle, DOC_NUMBER)}
          <DateWithTimezoneInput label={"fromDate"} handle={props.fromDateHandle} date={FROM_DATE}/>
          {textField("org Id", props.orgIdHandle, ORG_ID)}
          {textField("org Inn", props.orgInnHandle, ORG_INN)}
          {textField("org Name", props.orgNameHandle, ORG_NAME)}
          <DateWithTimezoneInput label={"toDate"} handle={props.toDateHandle} date={TO_DATE}/>
        </form>
      </Box>
    </div>
    )
}

export default StatementRequestForm;


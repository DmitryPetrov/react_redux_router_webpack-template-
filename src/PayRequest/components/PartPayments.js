import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import store from './../../store';
import { addPayRequestPart } from './../actionCreatorList';
import PayRequestPart from './PayRequestPart';
import { itemList } from './../../functions/itemList';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
    color: theme.palette.primary.main,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "100%",
  }
}));

const PartPayments = (props) => {
  const style = useStyles();

  return (
    <div className={style.wrap}>
      {itemList(PayRequestPart, props.partPayments)}
      <Button 
        variant="outlined" 
        onClick={event => store.dispatch(addPayRequestPart())}
        className={style.button}
      >
        Add Pay Request Part
      </Button>
    </div>
  )
}


export default PartPayments;

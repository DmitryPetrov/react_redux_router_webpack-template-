import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import clsx from 'clsx';

import OrganisationForm from './OrganisationForm';
import AccountListForSelect from './AccountListForSelect';
import ConfirmDelete from './ConfirmDelete';

const useStyles = makeStyles(theme => ({
  component: {
    width: "24%",
    marginTop: theme.spacing(3),
  },
  inputField: {
    width: "92%",
  },
  buttonsBlock: {
    marginTop: theme.spacing(1),
  },
  selectButton: {
    color: blue[700],
  },
  deleteButton: {
    color: red[700],
  },
  content: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  mark: {
    background: 'linear-gradient(45deg, rgba(255,205,210,1) 50%, rgba(255,205,179,1) 99%)',
  }
}));

function OrganisationCard(props) {
  const classes = useStyles();

  const [selected, setSelected] = React.useState(false);
  // React.useEffect(() => {
  //   (props.selected.org.orgId === props.item.orgId) ? setSelected(true) : setSelected(false)
  // }, [props.selected.org]);

  const [update, setUpdate] = React.useState(false);
  const openUpdateLayer = () => setUpdate(true);
  const closeUpdateLayer = () => setUpdate(false);

  const [select, setSelect] = React.useState(false);
  const openSelectLayer = () => {props.selectOrg(props.index); setSelect(true)};
  const closeSelectLayer = () => setSelect(false);

  const [deleteBool, setDelete] = React.useState(false);
  const openDeleteLayer = () => setDelete(true);
  const closeDeleteLayer = () => setDelete(false);

  const inputField = (text, value) => <TextField
                    label={text}
                    className={classes.inputField}
                    margin="dense"
                    variant="standard"
                    defaultValue={value}
                    InputProps={{ readOnly: true }}
                  />;

  return (
    <Grid item className={classes.component}>
      <Box border={1} borderRadius={4} borderColor={grey[500]} className={clsx(classes.content, { [classes.mark]: selected === true, })}>
        {inputField("orgName", props.item.orgName)}
        {inputField("orgId", props.item.orgId)}
        {inputField("orgInn", props.item.orgInn)}
        <ButtonGroup className={classes.buttonsBlock}>
          <Button onClick={openSelectLayer} className={classes.selectButton}>Select</Button>
          <Button onClick={openUpdateLayer}>Update</Button>
          <Button onClick={openDeleteLayer}  className={classes.deleteButton}>Delete</Button>
        </ButtonGroup>
      </Box>
      <OrganisationForm
        title={"UPDATE ORGANISATIONS"}
        item={props.item}
        index={props.index}
        close={closeUpdateLayer}
        open={update}
        save={props.saveUpdatedOrg}
      />
      <AccountListForSelect
        item={props.item}
        close={closeSelectLayer}
        open={select}
        selectOrg={props.selectOrg}
        selectAcc={props.selectAcc}
        selected={props.selected}
      />
      <ConfirmDelete
        index={props.index}
        close={closeDeleteLayer}
        open={deleteBool}
        remove={props.removeOrg}
      />
    </Grid>
    )
}

      

export default OrganisationCard;


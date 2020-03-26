import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import shortid from 'shortid';

import OrganisationCard from './OrganisationCard';
import OrganisationForm from './OrganisationForm';
import { EMPTY_ORG } from './initialState'

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: theme.spacing(3),
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
  gridItem: {
    width: theme.spacing(47),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
  },
  addAccount: {
    marginTop: theme.spacing(3),
    height: theme.spacing(5),
    color: theme.palette.primary.main,
  },
  refreshButton: {
    marginTop: theme.spacing(3),
    width:  theme.spacing(18),
  }
}));

function OrganisationsView(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  const [addOrg, setAddOrg] = React.useState(false);
  const openAddOrgLayer = () => setAddOrg(true);
  const closeAddOrgLayer = () => setAddOrg(false);

  const orgList = props.orgs.map((item, index) => 
    <OrganisationCard
      item={item}
      index={index}
      key={shortid.generate()}
      selected={props.selected}
      selectOrg={props.selectOrg}
      selectAcc={props.selectAcc}
      saveUpdatedOrg={props.saveUpdatedOrg}
      removeOrg={props.removeOrg}
    />)

  return (
    <div className={globalStyle.paper}>
      <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.title}>
          Organisations
        </Typography>
        <Button
          variant="outlined"
          onClick={props.getOrgs}
          className={classes.refreshButton}
        >
          Refresh
        </Button>
        <Grid container justify="space-evenly" alignItems="flex-start">
          {orgList}
          <Grid item>
            <Button variant="outlined" onClick={openAddOrgLayer} className={classes.addAccount} >
              Add Organisation
            </Button>
          </Grid>
        </Grid>
      </Container>
      <OrganisationForm 
        title={"ADD ORGANISATIONS"}
        item={EMPTY_ORG}
        close={closeAddOrgLayer}
        open={addOrg}
        save={props.saveNewOrg}
      />
    </div>
    )
}

export default OrganisationsView;


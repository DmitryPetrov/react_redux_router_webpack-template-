import { makeStyles } from '@material-ui/core/styles';

export const CONTAINER_MAX_WIDTH="xl";

export const GLOBAL_STYLE = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginLeft: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',

  }
}));

export const GRID_ITEM_STYLE = makeStyles(theme => ({
  component: {
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  componentBorder: {
    width: "100%",
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "96%",
    margin: theme.spacing(1),
  }
}));

//working app
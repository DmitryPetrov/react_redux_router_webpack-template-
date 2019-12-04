import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

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
  },
  backgroundLight: {
    backgroundColor: blueGrey[50],
  },
  backgroundMid: {
    backgroundColor: blueGrey[100],
  },
  backgroundDark: {
    backgroundColor: blueGrey[200],
  },
  gridCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "100%",
  },
  gridCellContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "94%",
  },
  primaryButtonColor: {

  },
  secondaryButtonColor: {
    
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

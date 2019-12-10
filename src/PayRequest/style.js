import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const STYLE = makeStyles(theme => ({
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
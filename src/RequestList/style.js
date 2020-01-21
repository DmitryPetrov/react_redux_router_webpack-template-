import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

export const REQUEST_STYLE = makeStyles(theme => ({
  expansionPanel: {
    marginTop: theme.spacing(1),
    backgroundColor: grey[200],
    width: theme.spacing(160),
  },
  innerExpansionPanel: {
    marginTop: theme.spacing(1),
    backgroundColor: grey[50],
    width: theme.spacing(150),
  },
  secondInnerExpansionPanel: {
    marginTop: theme.spacing(1),
    backgroundColor: grey[0],
    width: theme.spacing(140),
  },
  expansionPanelError: {
    marginTop: theme.spacing(1),
    backgroundColor: red[200],
    width: theme.spacing(160),
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  line: {
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightRegular,
  },
  content: {
    marginTop: theme.spacing(1),
  }
}));
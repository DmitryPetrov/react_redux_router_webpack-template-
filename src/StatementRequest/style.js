import { makeStyles } from '@material-ui/core/styles';

export const gridCellStyle = makeStyles(theme => ({
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
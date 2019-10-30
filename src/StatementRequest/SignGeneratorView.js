import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import DeviceList from './DeviceList';
import CertificateList from './CertificateList';
import { gridCellStyle } from './style';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "47%",
  },
  buttonGenSign: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  singResult: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  pinField: {
    width: "48%",
    marginLeft: "2%",
  },
  device: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  certificate: {
  	display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "100%",
  },
  buttonAddSignature: {
    width: "80%",
    marginTop: theme.spacing(1),
  },
}));

const SignView = (props) => {
  const classes = useStyles();
  const gridCell = gridCellStyle();

  const singResult = () => {
    if (props.sign.content !== undefined) {
      return <Typography component="h1" variant="body1" className={classes.singResult}>Document is signed</Typography>;
    }

    if (props.signGenerating === true) {
      return <CircularProgress disableShrink className={classes.singResult}/>;
    }

    return null;
  }

  return (
    <div className={gridCell.component}>
      <Box 
        border={1} 
        borderRadius={4}
        borderColor={grey[500]}
        className={gridCell.componentBorder}
      >
        <div className={gridCell.content}>
          <Button
            variant="outlined"
            className={classes.buttonAddSignature}
            onClick={event => props.getDevices()}
          >
            Add signature
          </Button>
          {(props.devices !== null) ? 
            <div className={classes.device}>
              <DeviceList 
	              items={props.devices} 
	              handler={props.changeDevice} 
	              defaultValue={props.defaultDevice}
              />
              <TextField
                label={"Token pin"}
                margin="dense"
                variant="outlined"
                className={classes.pinField}
                onChange={event => props.setPin(event.target.value)}
                defaultValue={props.defaultPin}
              />
            </div> : null}
          {(props.certificates !== null) ? 
          	<div className={classes.certificate}>
	          	<CertificateList 
		          	items={props.certificates} 
		          	handler={props.setCertNum} 
		          	defaultValue={props.defaultCertNum}
	          	/>
	            <Button 
	              variant="outlined" 
	              className={classes.buttonGenSign} 
	              onClick={() => props.createSign()}
	            >
	              Generate signature
	            </Button>
            </div> : null}
          {singResult()}
        </div>
      </Box>
    </div>
  )
}

export default SignView;

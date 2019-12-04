import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';

import DeviceList from './DeviceList';
import CertificateList from './CertificateList';
import { GRID_ITEM_STYLE } from './../style';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "47%",
  },
  buttonGenSign: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  pinField: {
    width: "48%",
    marginLeft: "2%",
  },
  deviceSection: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  certificateSection: {
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
  const gridCell = GRID_ITEM_STYLE();

  const deviceSection = () => {
    if (props.devices === null) {
      return null;
    }

    return (
      <div className={classes.deviceSection}>
        <DeviceList items={props.devices} handle={props.changeDevice} defaultValue={props.defaultDevice}/>
        <TextField
          label={"Token pin"}
          margin="dense"
          variant="outlined"
          className={classes.pinField}
          onChange={event => props.setPin(event.target.value)}
          defaultValue={props.defaultPin}
        />
      </div>)
  }

  const certificateSection = () => {
    if (props.certificates === null) {
      return null
    }

    return (
      <div className={classes.certificateSection}>
        <CertificateList items={props.certificates} handle={props.setCertNum} defaultValue={props.defaultCertNum}/>
        <Button variant="outlined" className={classes.buttonGenSign} onClick={() => props.createSign()}>
          Generate signature
        </Button>
      </div>)
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
          <Button variant="outlined" className={classes.buttonAddSignature} onClick={event => props.getDevices()}>
            Add signature
          </Button>
          {deviceSection()}
          {certificateSection()}
          <SingMarker sign={props.sign} signGenerating={props.signGenerating} />
        </div>
      </Box>
    </div>
  )
}

export default SignView;

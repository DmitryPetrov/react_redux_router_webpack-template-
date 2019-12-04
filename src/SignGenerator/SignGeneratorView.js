import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import DeviceList from './DeviceList';
import CertificateList from './CertificateList';
import SingMarker from './SingMarker';
import { GLOBAL_STYLE } from './../style';

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
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

const SignView = (props) => {
  const style = useStyles();
  const globalStyle = GLOBAL_STYLE();

  const deviceSection = () => {
    if (props.devices === null) {
      return null;
    }

    return (
      <div className={style.deviceSection}>
        <DeviceList items={props.devices} handle={props.changeDevice} defaultValue={props.defaultDevice}/>
        <TextField
          label={"Token pin"}
          margin="dense"
          variant="outlined"
          className={style.pinField}
          onChange={event => props.setPin(event.target.value)}
          defaultValue={props.defaultPin}
        />
      </div>
    )
  }

  const certificateSection = () => {
    if (props.certificates === null) {
      return null
    }

    return (
      <div className={style.certificateSection}>
        <CertificateList items={props.certificates} handle={props.setCertNum} defaultValue={props.defaultCertNum}/>
        <Button variant="outlined" className={style.buttonGenSign} onClick={() => props.createSign()}>
          Generate signature
        </Button>
      </div>
    )
  }

  return (
    <Paper component="div" className={clsx(globalStyle.backgroundLight, globalStyle.gridCell)}>
      <div className={clsx(globalStyle.gridCellContent, style.spacing)}>
        <Button variant="outlined" className={style.buttonAddSignature} onClick={event => props.getDevices()}>
          Add signature
        </Button>
        {deviceSection()}
        {certificateSection()}
        <SingMarker sign={props.sign} signGenerating={props.signGenerating} />
      </div>
    </Paper>
  )
}

export default SignView;

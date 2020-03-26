import React from 'react';

import SignGeneratorView from './SignGeneratorView';
import { loadPlugin } from './rutoken';

const DEFAULT_PIN = "12345678";
const DEFAULT_DEVICE = 0; 
const DEFAULT_CERT_NUM = 0; 
const SIGN_DATA = 
  {
    signType: "SINGLE",
    signAuthorityId: "2a67e143-5bad-4beb-95cc-dbf7f197b714",
    certificateGuid: "befaadb6-178f-4806-90d2-b9552c795610",
    userName: "test9",
    signerFullName: "Образцов Михаил Юрьевич",
    safeTouchAutoSign: "false",
  };
const SIGN_COLLECTION = 
  {
    signCollection: 
    {
      bankMessage: "",
    },
  };

const SignGenerator = (props) => {
  React.useEffect(() => loadPlugin(setPlugin), [])

  const [dataForSign, setDataForSign] = React.useState({});
  React.useEffect(() => {    
    if (JSON.stringify(props.data) !== JSON.stringify(dataForSign)) {
      setDataForSign(props.data)
      setSign({...SIGN_DATA});
      props.handle({signCollection: null});//если меняются данные для подписи, то невалидную подпись не отправляем на сервер
    }
  }, [props.data, dataForSign]);

  const [pin, setPin] = React.useState(DEFAULT_PIN);
  const [sign, setSign] = React.useState(SIGN_DATA);
  const [plugin, setPlugin] = React.useState(null);

  const [devices, setDevices] = React.useState(null);
  const [device, setDevice] = React.useState(DEFAULT_DEVICE);

  const [signGenerating, setSignGenerating] = React.useState(false);

  const [certificates, setCertificates] = React.useState(null);
  const [certNum, setCertNum] = React.useState(DEFAULT_CERT_NUM);
  
  const handleError = reason => {
    if (typeof(reason) === "string") {
      alert(reason);
      return;
    }
    var errorCodes = plugin.errorCodes;
    var isErrCode = !isNaN(parseInt(reason.message));
    if(!isErrCode) {
      alert(reason.message);
      return;
    }
    switch (parseInt(reason.message)) {
      case errorCodes.PIN_INCORRECT: alert("PIN INCORRECT"); break;
      case errorCodes.DEVICE_NOT_FOUND: alert("DEVICE NOT FOUND"); break;
      case errorCodes.CERTIFICATE_NOT_FOUND: alert("CERTIFICATE NOT FOUND"); break;
      default: alert("Неизвестная ошибка");
    }
  }

  const getDevices = () => {
    if (plugin === null) {
      alert("Plugin was not found");
      return;
    }

    plugin.enumerateDevices()
        .then(devices => {
          if (devices.length > 0) {
            setDevices(devices);
            Promise.resolve();
          } else {
            Promise.reject();
          }
          }, reason => handleError(reason))
        .then(() => plugin.enumerateCertificates(DEFAULT_DEVICE, plugin.CERT_CATEGORY_UNSPEC), reason => handleError(reason))
        .then(certs => setCertificates(certs), reason => handleError(reason))
  }

  const changeDevice = newDevice => {
    setDevice(newDevice)
    getCertificates()
  }

  const getCertificates = () => {
    plugin.enumerateCertificates(device, plugin.CERT_CATEGORY_UNSPEC)
        .then(certs => setCertificates(certs), reason => handleError(reason))
  }

  const createSign = () => {
    setSignGenerating(true);

    const certificate = certificates[certNum];
    const docToSign = props.createDigest(dataForSign);
    const signFormat = plugin.DATA_FORMAT_PLAIN;
    const options = {
      detached: true,
      addSignTime: true, 
    }

    setSign(Object.assign(sign, 
      {
        dtCreate: new Date().toISOString(),
      }));

    plugin.getDeviceInfo(device, plugin.TOKEN_INFO_IS_LOGGED_IN)
        .then(isLoggedIn => {
            if (isLoggedIn) {
              return Promise.resolve();
            }
            return plugin.login(device, pin);
          }, reason => handleError(reason))
        .then(() => plugin.sign(device, certificate, docToSign, signFormat, options), reason => handleError(reason))
        .then(signature => {
            setSign(Object.assign(sign, {content: signature})); 
            return Promise.resolve(signature);
          }, reason => handleError(reason))
        .then(signature => plugin.digest(device, 1, docToSign + "\n" + signature, {}), reason => handleError(reason))
        .then(signHash => sendSign(signHash), reason => handleError(reason))
        .then(() => {
            plugin.logout(device);
            setSignGenerating(false);
          }, reason => handleError(reason))
  }

  const sendSign = (signHash) => {
    let signData = 
    {
      signHash: signHash,
      orgId: props.data.orgId,
      orgName: props.data.orgName,
      ...props.digestSchemeInfo,
    }

    let newSign = Object.assign(sign, signData);
    setSign(Object.assign(sign, newSign));

    let signCollection = SIGN_COLLECTION;
    signCollection.signCollection.digestName = signData.digestScheme;
    signCollection.signCollection.signs = [newSign];
    props.handle(signCollection);
  }

  return (
    <SignGeneratorView
      signGenerating={signGenerating}
      sign={sign}
      createSign={createSign}
      getDevices={getDevices}
      devices={devices}
      changeDevice={changeDevice}
      defaultDevice={DEFAULT_DEVICE}
      setPin={setPin}
      defaultPin={DEFAULT_PIN}
      certificates={certificates}
      setCertNum={setCertNum}
      defaultCertNum={DEFAULT_CERT_NUM}
    />
  )
}

export default SignGenerator;

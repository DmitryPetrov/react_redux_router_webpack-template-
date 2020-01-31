import React from 'react';
import { v1 as generateUUID } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  componentWidth: {
    width: "100%",
  },
  docIdStyle: {
    width: "80%",
    marginRight: "3%",
  },
  generateBttonStyle: {
    width: "17%",
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
  }
}));

function DocumentId(props) {
  const classes = useStyles();

  const [docId, setDocId] = React.useState(props.defaultValue);

  const changeDocId = (wrapper) => {
    setDocId(wrapper.target.value);
    props.handle(wrapper);
  }

  const generateDocId = () => {
    const docId = generateUUID();
    const wrapper = {target: {value: docId}};
    changeDocId(wrapper);
  }

  return (
    <div className={classes.componentWidth}>
      <TextField
        label="doc Id"
        className={classes.docIdStyle}
        margin="dense"
        variant="outlined"
        onChange={changeDocId}
        value={docId}
      />
      <Button 
        variant="outlined" 
        className={classes.generateBttonStyle} 
        onClick={() => generateDocId()}
      >
        Gen
      </Button>
    </div>
  )
}

export default DocumentId;


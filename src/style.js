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

export const RequestChainListStyle = {
}

export const RequestChainStyle = {
  marginTop: "5px",
  backgroundColor: "#d0daf5",
  padding: "10px",
  border: "1px solid black",
  marginRight: "5px",
  marginLeft: "5px",
  position: "relative",
  overflow: "hidden",
}

export const RequestStyle = {
	border: "1px solid black",
  backgroundColor: "#bbcaf0",
  float: "left", /*Задаем обтекание*/
  fontSize: "12px",
  width: "390px", /*Фиксируем ширину блока*/
  marginRight: "5px",
  marginTop: "5px",
  marginBottom: "5px",  
}

export const ErrorStyle = {
  clear: "both",
  border: "1px solid black",
  backgroundColor: "#CD5C5C",
  float: "left", /*Задаем обтекание*/
  fontSize: "12px",
  width: "1600px", /*Фиксируем ширину блока*/
  marginRight: "5px",
  marginTop: "5px",
  marginBottom: "5px",
}

export const JsonStyle = {
  width:"390px",
  overflow:"auto",
}

export const XmlStyle = {
  width:"1600px",
  overflow:"auto",
  backgroundColor: "#cfdbe6",
}

//working app

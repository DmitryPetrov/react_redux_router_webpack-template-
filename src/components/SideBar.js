import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: theme.spacing(30),
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.spacing(30),
  }
}));

const PAGE_LIST = [
  {
    link: "/",
    name: "Authorization",
    icon: <LockOutlinedIcon />
  },
  {
    link: "/request/new/statementRequest",
    name: "Statement request",
    icon: <PanoramaFishEye />
  },
  {
    link: "/request/new/payRequest",
    name: "Pay request",
    icon: <PanoramaFishEye />
  },
  {
    link: "/request/list",
    name: "Request list",
    icon: <PanoramaFishEye />
  },
  {
    link: "/soapMessage/list",
    name: "Soap message list",
    icon: <PanoramaFishEye />
  },
]

function SideBar() {
    const classes = useStyles();
    const [address, setAddress] = useState(PAGE_LIST[0].name);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{paper: classes.drawerPaper}}
          anchor="left"
        >
          <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <ArrowForwardIos />
                </ListItemIcon>
                <ListItemText>{address}</ListItemText>
              </MenuItem>
          </MenuList>
          <Divider />
          <MenuList>
            {PAGE_LIST.map((item, index) => (
              <MenuItem 
                button 
                component={Link} 
                to={item.link} 
                onClick={() => setAddress(item.name)} 
                key={item.link}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Drawer>
      </div>
    );
}

export default SideBar;

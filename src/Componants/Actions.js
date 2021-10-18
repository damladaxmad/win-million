import { List, Divider, Button,ListItem,Avatar, ListItemText, ListItemIcon } from "@material-ui/core";
import {BorderLeft, Cancel, Delete, PinDropSharp,} from '@material-ui/icons';
import { FaCheckCircle, FaCut, FaStop, FaForward} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import React, {useState} from "react";
const Actions = (props) =>{
    const dispatch = useDispatch();
    const [force, setForce] = useState("")

    const nextFunction = () =>{
        dispatch({ type: 'next'});
        dispatch({ type: 'stoppable', payload: false});
        dispatch({ type: 'checkable', payload: false});
        setForce("hi")
  
    }

    const stopFunction = () =>{
        dispatch({ type: 'stop', payload: true});
    }

    const checkFunction = () =>{
        props.onCheck()
        dispatch({ type: 'stoppable', payload: true});
    }

    return <div style = {{flex: "0.2", backgroundColor: "whiteSmoke",
    borderLeft: "0px solid black"}}>
        <h3 style = {{marginTop: "10px", color: "black"}}> Actions </h3>
        <Divider/>
        <List  style = {{marginTop: "70px", cursor: "pointer"}}>
            <ListItem disable = {true}onClick = {stopFunction} divider = "true" style = {{backgroundColor: "#058ED9", marginTop: "6px",
        borderRadius: "6px", color: "white"}}>
                <ListItemIcon>  <FaStop style = {{fontSize: "24px", color: "orange"}}/></ListItemIcon>
           <ListItemText> Stop</ListItemText>
            </ListItem>
            <ListItem style = {{backgroundColor: "#058ED9", marginTop: "6px",
        borderRadius: "6px", color: "white"}}>
                <ListItemIcon>  <FaCut style = {{fontSize: "24px", color: "orange"}}/></ListItemIcon>
           <ListItemText> Trim</ListItemText>
            </ListItem>
            <ListItem onClick = {nextFunction} style = {{backgroundColor: "#058ED9", marginTop: "6px",
        borderRadius: "6px", color: "white"}}>
                <ListItemIcon>  <FaForward    style = {{fontSize: "24px", color: "orange"}}/></ListItemIcon>
           <ListItemText> Next</ListItemText>
            </ListItem>
            <ListItem onClick = {checkFunction} style = {{backgroundColor: "#058ED9", marginTop: "6px",
        borderRadius: "6px", color: "white"}}>
                <ListItemIcon>  <FaCheckCircle style = {{fontSize: "24px", color: "orange"}}/></ListItemIcon>
           <ListItemText> Check</ListItemText>
            </ListItem>
            <Avatar elevation = {3}style ={{cursor: "default",backgroundColor: "#058ED9", padding: "8px", margin: "30px auto"}}>4:55</Avatar>

        </List>
        </div>
}

export default Actions;
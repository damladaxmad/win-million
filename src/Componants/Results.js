import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";


const Results = (props) =>{
    const dispatch = useDispatch()
    const playAgain = () =>{
        console.log("in play again")
         
        dispatch({type: "stop", payload: false})
        
        props.onReset()
    }
    
    return <div style = {{width: "50%", display: "flex",
    justifyContent: "center", alignItems: "center",
    margin: "100px auto", height: "50%"}}>
        <div style = {{backgroundColor: "green", padding: "20px",
    width: "80%", height: "20%", borderRadius: "12px",
    justifyContent: "center", alignItems: "center", fontSize: "18px",
    color: "white", fontWeight: "bold"}}>
        <p style = {{fontSize: "32px", margin: "0px",
    fontWeight: "bold"}}> You Have Won: </p>
        <p> $100,000 dollars </p>
        <Button variant = "contained" onClick = {playAgain} style = {{
            backgroundColor: "orange", borderRadius: "8px",
            fontWeight: "bold", 
        }}> Play Again</Button>
         </div>
    </div>
}

export default Results;
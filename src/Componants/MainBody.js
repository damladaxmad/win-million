import React, {useState} from "react"
import Awards from "./Awards"
import Quiz from "./Quiz"
import Actions from "./Actions"
import { useSelector, useDispatch } from "react-redux"
import Results from "./Results"

const MainBody = (props) =>{
   
    const dispatch = useDispatch()
    const questions = useSelector((state) => state.questions);
    const [state, setState] = useState({
        qNumber: "null",
        choice: "no choice"
    })
  
    const [valid, setValid] = useState(false)
    const checkHandler = () =>{
        dispatch({type: "check", payload: true})
        if (questions.correctChoice === state.choice){
            setValid(true)
        }
        else setValid(false)
    }

    const choiceHandler = ({qNumber, choice}) =>{
        setState({
            qNumber: qNumber,
            choice: choice
        })
    }


    return <div style = {{display: "flex", width: "70%", margin: "0px auto",
    backgroundColor: "whitesmoke"}}>
 <Awards/>
        <Quiz valid = {valid} onChoice = {choiceHandler}/>
        <Actions  onCheck = {checkHandler}/>
    </div>
       
   
}

export default MainBody;
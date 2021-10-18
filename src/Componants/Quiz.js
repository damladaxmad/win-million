import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  makeStyles,
  Radio,
} from "@material-ui/core";
import React, { useState } from "react";

const Quiz = (props) => {
  // const classes = useStyles();
  const questions = useSelector((state) => state.questions);

  const choices = questions.choices;
  const dispatch = useDispatch();
  const [selectedChoice2, setSelectedChoice] = useState("");

  const checked = useSelector((state) => state.checked);


  const select = (choice) => {
    const selectedChoice = choice.leading;
    
    dispatch({
      type: "select",
      payload: {
        selectedChoice: selectedChoice,
        questionId: questions.questionNumber,
      },
    });
    dispatch({ type: "check", payload: false });
    // This line is doing nothing, but without it nothing works. It is weird.
    // it is rendering the component again, so it can be updated to the last snapshot
    // ....of the state. Redux is not updating all the time...
    setSelectedChoice(questions.selectedChoice);

  };
  // setValid(props.valid)
  console.log(checked);

  return (
    <div style={{ flex: "0.6" }}>
      <div style={{ backgroundColor: "orange" }}>
        <h3 style={{ marginTop: "0px", color: "white", padding: "15px 0px" }}>
          Question: {questions.questionNumber}
        </h3>
      </div>
      <div>
        <div style={{ fontSize: "20px", padding: "10px 60px" }}>
          {questions.questionText}
        </div>

        <div style={{ display: "block", marginTop: "50px" }}>
          {choices.map((choice) => (
            <ListItem
              onClick={() => {
                select(choice);
                props.onChoice({
                  qNumber: questions.questionNumber,
                  choice: choice.leading,
                });
              }}
              style={{
                background:
                  questions.selectedChoice === choice.leading
                    ? !checked
                      ? "grey"
                      : props.valid
                      ? "green"
                      : "red"
                    : "orange",
                borderRadius: "12px",
                padding: "0px 5px",
                padding: "15px",
                width: "70%",
                margin: "10px auto",
                cursor: "pointer",
              }}
              alignItems="center"
              // className={questions.selectedChoice === choice.leading ?  classes.choiceCssActive : classes.choiceCss}
            >
              <ListItemIcon
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  color:
                    questions.selectedChoice === choice.leading
                      ? checked
                        ? "white"
                        : null
                      : "black",
                }}
              >
                {choice.leading})
              </ListItemIcon>
              <ListItemText
                style={{
                  marginLeft: "40px",
                  color:
                    questions.selectedChoice === choice.leading
                      ? checked
                        ? "white"
                        : null
                      : "black",
                }}
              >
                {choice.choiceText}
              </ListItemText>
            </ListItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

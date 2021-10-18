import { createStore } from "redux";
const list = [
  "$1",
  "$10",
  "$100",
  "$200",
  "$400",
  "$1,000",
  "$10,000",
  "$100,000",
  "$500,000",
  "$1,000,000",
];
class Questions {
  constructor(
    questionId,
    questionNumber,
    questionText,
    choices,
    selectedChoice,
    correctChoice,
    qAward
  ) {
    this.questionId = questionId;
    this.questionNumber = questionNumber;
    this.questionText = questionText;
    this.choices = choices;
    this.selectedChoice = selectedChoice;
    this.correctChoice = correctChoice;
    this.qAward = qAward;
  }
}

class Choices {
  constructor(leading, choiceText) {
    this.leading = leading;
    this.choiceText = choiceText;
  }
}

let questions = [
  new Questions(
    "q1",
    "1",
    "What is your name?",
    [
      new Choices("a", "Amiin Maxamad"),
      new Choices("b", "Damlad Axmad"),
      new Choices("c", "Rashka Isse"),
      new Choices("d", "Caaqil Dameer"),
    ],
    "No choice",
    "b",
    "$1"
  ),
  new Questions(
    "q2",
    "2",
    "When were you born",
    [
      new Choices("a", "3000"),
      new Choices("b", "4000"),
      new Choices("c", "5000"),
      new Choices("d", "6000"),
    ],
    "No choice",
    "b",
    list[1]
  ),
  new Questions(
    "q3",
    "3",
    "How are you?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b",
    list[2]
  ),
  new Questions(
    "q4",
    "4",
    "What is your phone number?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b",
    list[3]
  ),
  new Questions(
    "q5",
    "5",
    "Where do you live?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b",
    list[4]
  ),
  new Questions(
    "q6",
    "6",
    "What is your name?",
    [
      new Choices("a", "Amiin Maxamad"),
      new Choices("b", "Damlad Axmad"),
      new Choices("c", "Rashka Isse"),
      new Choices("d", "Caaqil Dameer"),
    ],
    "No choice",
    "b",
    list[5]
  ),
  new Questions(
    "q7",
    "7",
    "How are you?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b",
    list[6]
  ),
  new Questions(
    "q8",
    "8",
    "What is your phone number?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b",
    list[7]
  ),
  new Questions(
    "q9",
    "9",
    "Where do you live?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b",
    list[8]
  ),
  new Questions(
    "q10",
    "10",
    "What is your name?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b",
    list[9]
  ),
];

const initialState = {
  awardsList: list.reverse(),
  questions: questions[0],
  currentQuestion: 0,
  activeAward: "$1",
  checked: false,
  stopped: false,
  stoppable: false,
  checkable: false,
  nextable: false,
 
}

const reducer = (
  state = initialState,
  action
) => {
  if (action.type === "next") {
    if (state.currentQuestion < 10) {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        questions: questions[state.currentQuestion],
        activeAward: questions[state.currentQuestion].qAward,
      };
    }
  }
  if (action.type === "select") {
    let newQuestions = state.questions;

    if (state.questions.questionNumber === action.payload.questionId) {
      newQuestions.selectedChoice = action.payload.selectedChoice;
      return {
        ...state,
        questions: newQuestions,
        checkable: true
      };
    }
  }
  if (action.type === "check") {
    if (state.checkable === true){
      return {
        ...state,
        checked: (state.checked = action.payload),
      };
    }
    
  }
  if (action.type === "stoppable") {
    return {
      ...state,
      stoppable: (state.stoppable = action.payload),
    };
  }
  if (action.type === "checkable") {
    return {
      ...state,
      checkable: (state.checkable = action.payload),
    };
  }
  
  if (action.type === "stop"){
    if (state.stoppable === true){
      return {
        ...state,
        stopped: (state.stopped = action.payload),
      };
    }
    
  }

  if (action.type === "restart"){
    return initialState;
  }
  return state;
};

const store = createStore(reducer);

export default store;

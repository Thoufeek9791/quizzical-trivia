import { useState, useEffect } from "react";
import Button from "./Button";

export default function Quiz(props) {
  return (
    <div className="quiz">
      <div className="question">{props.question.question}</div>
      <div className="options">
        <button
          className="option"
          onClick={(e) => props.selected(e, props.question.incorrect_answers)}
          value={props.question.correct_answer}
        >
          {props.question.incorrect_answers[0]}
        </button>
        <button
          className="option"
          onClick={(e) => props.selected(e, props.question.incorrect_answers)}
          value={props.question.correct_answer}
        >
          {props.question.incorrect_answers[1]}
        </button>
        <button
          className="option"
          onClick={(e) => props.selected(e, props.question.incorrect_answers)}
          value={props.question.correct_answer}
        >
          {props.question.incorrect_answers[2]}
        </button>
        <button
          className="option"
          onClick={(e) => props.selected(e, props.question.incorrect_answers)}
          value={props.question.correct_answer}
        >
          {props.question.incorrect_answers[3]}
        </button>
      </div>
      <hr />
    </div>
  );
}

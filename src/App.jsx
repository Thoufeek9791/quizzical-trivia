import { useState, useEffect } from "react";
import { HomePage } from "./components/homepage";
import Quiz from "./components/quiz";
import axios from "axios";
import { nanoid } from "nanoid";
import LoadingSpinner from "./components/loadingspinner";
import "./App.css";

function App() {
  // **states
  const [isStart, setIsStart] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);


  //**Form Elements State
  const [categories, setCategories] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  //** */ Form submit Event
  function handleSubmit(event) {
    event.preventDefault();
    setIsStart(true);
    setIsLoading(true);
  }

  //** */ handle the form change
  function handleChange(event) {
    const { name, value } = event.target;

    setCategories((prevCat) => {
      return { ...prevCat, [name]: value };
    });
  }

  //*Option select event handler */
  function handleSelected(e, options) {
    // console.log("Options: ", options);
    // console.log("Selected: ", selected);
    // console.log("questions", questions);
    e.target.classList.toggle("option-active");

    if (
      options.some((ans) => selected.some((sel) => sel.value === ans)) &&
      selected.length != 0
    ) {
      console.log("inside includes");
      const index = selected.indexOf(e.target);
      setSelected((prevSelected) => {
        const updatedState = [...prevSelected];
        updatedState.splice(index, 1);
        return updatedState;
      });
    } else {
      console.log('outside includes');
      setSelected((prevSelected) => {
        return [...prevSelected, e.target];
      });
    }
  }

  //** Result Handler */
  function handleResult(e) {
    setIsChecked(true);
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct_answer === selected[i].innerText) {
        selected[i].classList.add("correct-answer");
        setScore((prevScore) => prevScore + 1);
      } else {
        selected[i].classList.add("wrong-answer");
      }
    }
  }

  //** Play Again*/
  function handleReset(e) {
    setIsStart(false);
    setIsChecked(false);
    setSelected([]);
    setScore(0);
  }

  // **Merging correct options with the wrong options
  function concatOptions(inCrt, crt) {
    const rand = Math.floor(Math.random() * 4);
    inCrt.splice(rand, 0, crt);
  }

  useEffect(() => {
    if (isStart && isLoading) {
      async function fetchData() {
        try {
          const response = await axios.get(
            `https://opentdb.com/api.php?amount=5&category=${categories.category}&difficulty=${categories.difficulty}&type=${categories.type}`
          );
          for (let i = 0; i < response.data.results.length; i++) {
            concatOptions(
              response.data.results[i].incorrect_answers,
              response.data.results[i].correct_answer
            );
          }
          setQuestions(response.data.results);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      }
      fetchData();
    }

    // **Creating question element
    const questionElement = questions.map((q) => (
      <Quiz key={nanoid()} question={q} selected={handleSelected} />
    ));
    setQuiz(questionElement);
  }, [isStart, isLoading]);

  // **Rendering
  return (
    <div className="App">
      {isLoading && <LoadingSpinner />}
      {!isStart && !isLoading ? (
        <HomePage
          categories={categories}
          change={handleChange}
          submit={handleSubmit}
        />
      ) : (
        !isLoading && (
          <div className="quiz-container corner">
            {quiz}
            {!isChecked ? (
              <button className="answer-btn" onClick={handleResult}>
                Check Answers
              </button>
            ) : (
              <div className="checked-container">
                <span className="score">
                  You Scored {score}/5 correct answers
                </span>
                <button className="answer-btn" onClick={handleReset}>
                  Play Again
                </button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default App;

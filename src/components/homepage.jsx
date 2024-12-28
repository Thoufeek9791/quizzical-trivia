export function HomePage(props) {
  return (
    <div className="container">
      <h1 className="quizz-title">Quzzical</h1>
      <p className="description">
        To Learn you have to listen To improve you have to try.
      </p>
      <form className="form-container" onSubmit={props.submit}>
        <div className="form-control">
        <label htmlFor="category">Category:</label>
        <select name="category" id="category" className="type" value={props.categories.category} onChange={props.change}>
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        </div>

       <div className="form-control">
       <label htmlFor="difficulty">Difficulty:</label>
        <select name="difficulty" id="difficulty" className="type" value={props.categories.difficulty} onChange={props.change}>
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
       </div>

        <div className="form-control">
        <label htmlFor="type">Select Type:</label>
        <select name="type" id="type" className="type" value={props.categories.type} onChange={props.change}>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        </div>
        <button className="cssbuttons-io-button"  type="submit">
        Get started
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
      </form>
     
    </div>
  );
}

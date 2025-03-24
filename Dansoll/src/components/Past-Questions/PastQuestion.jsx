import React from "react";
import "./PastQuestion.css";

// Links for past questions
const pastQuestionsLinks = {
  "2023/24": {
    JSS1: "https://bit.ly/jss1questions23-24",
    JSS2: "https://bit.ly/jss2questions23-24",
    JSS3: "https://bit.ly/jss3questions23-24",
    SS1: "https://bit.ly/ss1questions23-24",
    SS2: "https://bit.ly/ss2questions23-24",
  },
  "2024/25": {
    JSS1: {
      "First Half Term": "http://bit.ly/Jss1ftmidtermquestions",
      "First Term": "https://bit.ly/dhsJSS1firstquestions24-25",
      "Second Half Term": "https://bit.ly/jss1stmidterm",
    },
    JSS2: {
      "First Half Term": "http://bit.ly/Jss2ftmidtermquestions",
      "First Term": "https://bit.ly/dhsJSS2firstquestions24-25",
      "Second Half Term": "https://bit.ly/jss2stmidterm",
    },
    JSS3: {
      "First Half Term": "http://bit.ly/Jss3ftmidtermquestions",
      "First Term": "https://bit.ly/dhsJSS3firstquestions24-25",
      "Second Half Term": "https://bit.ly/jss3stmidterm",
    },
    SS1: {
      "First Half Term": "http://bit.ly/Ss1ftmidtermquestions",
      "First Term": "https://bit.ly/dhsSS1firstquestions24-25",
      "Second Half Term": "https://bit.ly/ss1stmidterm",
    },
    SS2: {
      "First Half Term": "http://bit.ly/Ss2ftmidtermquestions",
      "First Term": "https://bit.ly/dhsSS2firstquestions24-25",
      "Second Half Term": "https://bit.ly/ss2stmidterm",
    },
  },
};

const PastQuestions = () => {
  return (
    <div className="past-questions-container">
      <h1>Past Questions</h1>

      {/* 2023/24 Section */}
      <div className="session">
        <h2>2023/24 Session</h2>
        <div className="class-buttons">
          {Object.entries(pastQuestionsLinks["2023/24"]).map(
            ([className, link]) => (
              <button
                className="past-btn"
                key={className}
                onClick={() => window.open(link, "_blank")}
              >
                {className}
              </button>
            )
          )}
        </div>
      </div>

      {/* 2024/25 Section */}
      <div className="session">
        <h2>2024/25 Session</h2>
        <div className="class-sections">
          {Object.entries(pastQuestionsLinks["2024/25"]).map(
            ([className, terms]) => (
              <div key={className} className="class-section">
                <h3>{className}</h3>
                <div className="term-buttons">
                  {Object.entries(terms).map(([term, link]) => (
                    <button
                      className="term-btn"
                      key={term}
                      onClick={() => window.open(link, "_blank")}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PastQuestions;

import React from "react";
import "./index.scss";

const questions = [
  {
    title: "Мой любимый спорт",
    variants: ["Футбол ⚽", "КиберСпорт 🖥", "Баскетбол 🏀", "Тенисt 🏓"],
    correct: 2,
  },
  {
    title: "С каким баскетболистом я себя ассоциирую ?",
    variants: [
      "LeBron James",
      "Michael Jordan",
      "Klay Thompson",
      "Steph Curry",
    ],
    correct: 3,
  },
  {
    title: "Какое из IT-направлений мне нравится ?",
    variants: ["Frontend", "Backend", "Unity", "Mobile"],
    correct: 0,
  },
  {
    title: "Какую музыку я предпочитаю слушать?",
    variants: ["Hip-hop", "Rap", "Выше перечисленное", "Classic"],
    correct: 2,
  },
  {
    title: "В какой стране бы хотел побывать ?",
    variants: ["Америка", "Польша", "Китай", "Испания"],
    correct: 0,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="Result Icon"
      />
      <h2>
        Вы отгадали {correct} ответов из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a> -m 
    </div>
  );
}

function Game({ step, ques, onClickVariant }) {
  const percentCount = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentCount}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1 className="title">{ques.title}</h1>
      <ul>
        {ques.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function WelcomeScreem({ OnStartBtnClick }) {
  return (
    <div className="showWelcome">
      <h1 style={{ textAlign: "center" }}>Добро пожаловать !</h1>
      <p style={{ textAlign: "center" }}>
        Этот тест-опрос был создан для того что бы проверить на сколько вы меня
        хорошо знанете.
        <br></br> Если вы готовы то нажмите на кнопку 🔽
      </p>
      <button className="btn-start" onClick={OnStartBtnClick}>
        Начать тест
      </button>
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [showWelcome, setshowWelcome] = React.useState(true);
  const ques = questions[step];

  const OnStartBtnClick = () => {
    setshowWelcome(false);
  };

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === ques.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomeScreem OnStartBtnClick={OnStartBtnClick} />
      ) : step !== questions.length ? (
        <Game
          step={step}
          ques={questions[step]}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;

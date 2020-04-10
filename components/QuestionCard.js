import Link from "next/link";

export default function Socials() {
  return (
    <div className="question__wrapper">
      <div className="question">
        <div className="question__code">
          <img className="code-img" src="/images/quiz-code.png" alt="code" />
        </div>
        <div className="question__answers">
          <div className="question__answer">
            <span>"Ford Mustang"</span>
          </div>
          <div className="question__answer">
            <span>undefined</span>
          </div>
          <div className="question__answer">
            <span>ничего не выведет, возникнет ошибка</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .question__wrapper {
          padding: 10% 15% 5%;
          background: #f7f8fa;
        }
        .question {
          display: flex;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .question__code {
          overflow: hidden;
          flex: 3 1 65%;
          max-width: 100%;
          background: #263238;
        }
        .code-img {
          height: 100%;
          object-fit: contain;
        }
        .question__answers {
          display: flex;
          flex-direction: column;
          flex: 1 3 35%;
        }
        .question__answer {
          display: flex;
          align-items: center;
          flex-grow: 1;
          padding: 0.5em 2em;
          background: #fff;
          cursor: pointer;
        }
        .question__answer:not(:last-child) {
          border-bottom: 1px solid #e8edee;
        }
      `}</style>
    </div>
  );
}

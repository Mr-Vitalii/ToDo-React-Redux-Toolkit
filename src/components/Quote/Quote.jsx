import React from "react";
import "./Quote.scss";

const Quote = React.memo(
  ({ quotes, changeQuote }) => {

  const quotesList = [
    "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
    "If you want something you never had, you have to do something you've never done.",
    "It's how you deal with failure that determines how you achieve success.",
    "When everything seems to be going against you, remember that the airplane takes off against the wind not with the wind.",
    "It's very important not to give up.",
    "Success is not final; failure is not fatal: it is the courage to continue that counts.",
    "The way to get started is to quit talking and begin doing",
  ];

  const generateQuote = () => {
    const randomQuote =
      quotesList[Math.floor(Math.random() * quotesList.length)];
    changeQuote(randomQuote);
  };
  

  return (
    <>
      <p className="quote">{quotes}</p>
      <button className="quote__button" onClick={generateQuote}>
        Get inspired
      </button>
    </>
  );
  },
(prevProps, nextProps) => {
    return prevProps.quotes === nextProps.quotes;
  }
);

export default Quote;
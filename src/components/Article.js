import React from "react";
import "../styles/textboxcss.css";

const Article = () => {
  return (
    <div className="article">
      <div className="midpoint">
        <QuoteBox
          text="Everybody should learn to program a computer, because it teaches you how to think."
          author="Steve Jobs"
          bgColor="rgb(245, 219, 190)"
        />
        <QuoteBox
          text="Programming is the art of telling another human being what one wants the computer to do."
          author="Donald Ervin Knuth"
          bgColor="rgb(204, 228, 251)"
        />
      </div>
    </div>
        
        
  );
};

const QuoteBox = ({ text, author, bgColor }) => {
  return (
    <div className="quote-box" style={{ backgroundColor: bgColor }}>
      <p className="quote-mark">”</p>
      <h3 className="quote-text">{text}</h3>
      <h4 className="quote-author">― {author}</h4>
    </div>
    
  );
};

export default Article;

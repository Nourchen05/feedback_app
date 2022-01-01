import React, { createElement } from "react";

function Hello() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];

  //conditionale JSX
  const loading = false;
  const showComments = true;
  if (loading) return <h1>It is loading ...</h1>;

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {/*Ternary conditional operator*/}
      {showComments ? (
        <div className="comments">
          <p>There are {comments.length} comments</p>
          {comments.map((el, index) => (
            <li key={index}>{el.text}</li>
          ))}
        </div>
      ) : null}

      {/* second method*/}
      {/**
       * {showComments && (
        <div className="comments">
          <p>There are {comments.length} comments</p>
          {comments.map((el, index) => (
            <li key={index}>{el.text}</li>
          ))}
        </div>
      ) }
       * 
       */}
    </div>
  );
}

export default Hello;

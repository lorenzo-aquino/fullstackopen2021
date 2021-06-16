import React, { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Anecdote = ({ header, text, voteCount }) => (
  <div>
    <Header text={header} />
    <p>{text}</p>
    <p>has {voteCount} votes</p>
  </div>
);

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const getNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const voteAnecdote = () => {
    const votes = [...points];
    votes[selected] += 1;
    setPoints(votes);
  };
  const maxVotes = Math.max(...points);
  const topAnecdote = points.indexOf(maxVotes);

  return (
    <div>
      <Anecdote
        header="Anecdote of the day"
        text={anecdotes[selected]}
        voteCount={points[selected]}
      />
      <Button handleClick={voteAnecdote} text="Vote" />
      <Button handleClick={getNextAnecdote} text="Next Anecdote" />
      <Anecdote
        header="Anecdote with most votes"
        text={anecdotes[topAnecdote]}
        voteCount={maxVotes}
      />
    </div>
  );
}

export default App;
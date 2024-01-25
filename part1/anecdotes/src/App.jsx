import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  
  const [selected, setSelected] = useState(0);
  console.log("rendering with anecdote index:",selected)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  console.log("rendering with votes:",votes)
  
  const handleAnecdoteClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVoteClick = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const index = votes.indexOf(maxVotes);
    return anecdotes[index];
  };

  const maxVotes = Math.max(...votes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>"{anecdotes[selected]}"</div>
      <br/>
      <div>this anecdote has {votes[selected]} votes</div>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleAnecdoteClick}>Get Anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div>"{getMostVotedAnecdote()}"</div>
      <br />
      {maxVotes > 0 && <div>most popular anecdote has {maxVotes} votes</div>}
    </div>
  );
};

export default App;
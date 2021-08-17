import React, { useState } from 'react'

const Display = ({ title, anecdote, vote }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{anecdote}</div>
      <div>has {vote} votes.</div>
    </div> 
  )
}

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const nextAnecdote = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
    console.log(`New quote is: ${randNum} - ${anecdotes[randNum]}`)
  }

  const voteAnecdote = () => {
    const newVotes = [ ...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log(`Quote: ${selected} - ${anecdotes[selected]}
    Vote count before: ${votes[selected]}
    Vote count now: ${newVotes[selected]}`)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Display title="Anecdote of the day" anecdote={anecdotes[selected]} vote={votes[selected]} />
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <Display title="Anecdote with most votes" anecdote={anecdotes[mostVoted]} vote={votes[mostVoted]} />
    </div>
  )
}

export default App
//Excercise 1.3

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1.name} {part1.exercises}</p>
//       <p>{part2.name} {part2.exercises}</p>
//       <p>{part3.name} {part3.exercises}</p> 
//     </div>
//   )
// }
// export default App

//Excercise 1.4

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// export default App
//***************************************************************** */
//Excercise 1.5 Chapter 1

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <h1>{course.name}</h1>
//       <Content parts={course.parts}/>
//     </div>
//   )
// }
// const Content = ({ parts }) => {
//   return (
//     <div>
//       {parts.map(part =>
//         <Part key={part.name} name={part.name} exercises={part.exercises} />
//       )}
//     </div>
//   )
// }

// const Part = ({ name, exercises }) => {
//   return (
//     <p>
//       {name} - Exercises: {exercises}
//     </p>
//   )
// }
// export default App

//**************************************************************************** */
//chapter 1 part c

// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// export default App

// adding component helper function

// const Hello = (props) => {

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// export default Hello

//adding another helper component to calculate age of person being greeted
// const Hello = (props) => {

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
// export default Hello

//_________________________________________________________________

//Destructuring section 
// props = {
//   name: 'Arto Hellas',
//   age: 35,
// } 

// // do this destructing that 
// // we can streamline our component by assigning the values of the properties directly into two variables name and age which we can then use in our code:
// const Hello = (props) => {

//   const name = props.name
//   const age = props.age


//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>

//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// export default Hello

//************************************************************************* */

//Chapter 1 Part D Excercise 1.6
// import React, { useState } from 'react';

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleGoodClick = () => {
//     setGood(good + 1);
//   };

//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1);
//   };

//   const handleBadClick = () => {
//     setBad(bad + 1);
//   };

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <button id="buttonone" onClick={handleGoodClick}>good</button>
//       <button id="buttontwo" onClick={handleNeutralClick}>neutral</button>
//       <button id="buttonthree" onClick={handleBadClick}>bad</button>
//       <h2>Statistics</h2>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//     </div>
//   );
// };

// export default App;

//************************************************************************* */

//Chapter 1 Part D Excercise 1.7

// summary of the changes:

// Added all state to keep track of the total number of feedbacks.
// Updated click handlers for good, neutral, and bad buttons to increment the all count.
// Used useEffect to recalculate average and positive whenever the feedbacks change.This hook watches for changes in good, neutral, and bad.
// Displayed positive as a percentage by appending % in the JSX.

// import React, { useState } from 'react';

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [all, setAll] = useState(0);
//   const [average, setAverage] = useState(0);
//   const [positive, setPositive] = useState(0);

//   const handleGoodClick = () => {
//     setGood(good + 1);
//     setAll(all + 1);
//   };

//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1);
//     setAll(all + 1);
//   };

//   const handleBadClick = () => {
//     setBad(bad + 1);
//     setAll(all +1)
//   };


//   // Calculate average and positive percentage whenever the feedback changes
//   React.useEffect(() => {
//     const totalFeedback = good + neutral + bad;
//     const avg = totalFeedback === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / totalFeedback;
//     setAverage(avg.toFixed(2));

//     const positivePercent = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
//     setPositive(positivePercent.toFixed(2));
//   }, [good, neutral, bad]);

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <button id="buttonone" onClick={handleGoodClick}>good</button>
//       <button id="buttontwo" onClick={handleNeutralClick}>neutral</button>
//       <button id="buttonthree" onClick={handleBadClick}>bad</button>
//       <h2>Statistics</h2>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>All: {all}</p>
//       <p>Average: {average}</p>
//       <p>Positive: {positive}%</p>
//     </div>
//   );
// };

// export default App;

//************************************************************************ */
//Excercise 1.8

//Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

//Remember that components should not be defined inside other components:

// import React, { useState } from 'react';

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const Statistics = () => {
//     const all = good + neutral + bad;
//     const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
//     const positive = all === 0 ? 0 : (good / all) * 100;

//     return (
//       <div>
//         <h2>Statistics</h2>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <p>All: {all}</p>
//         <p>Average: {average.toFixed(2)}</p>
//         <p>Positive: {positive.toFixed(2)}%</p>
//       </div>
//     );
//   };

//   const handleGoodClick = () => {
//     setGood(good + 1);
//   };

//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1);
//   };

//   const handleBadClick = () => {
//     setBad(bad + 1);
//   };

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <button id="buttonone" onClick={handleGoodClick}>good</button>
//       <button id="buttontwo" onClick={handleNeutralClick}>neutral</button>
//       <button id="buttonthree" onClick={handleBadClick}>bad</button>
//       <Statistics />
//     </div>
//   );
// };

// export default App;



//************************************************************************ */
//Excercise 1.10
// import React, { useState } from 'react';

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const Statistics = ({ good, neutral, bad }) => {
//     const all = good + neutral + bad;
//     const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
//     const positive = all === 0 ? 0 : (good / all) * 100;

//     if (all === 0) {
//       return (
//         <div>
//           <h2>Statistics</h2>
//           <p>No feedback given</p>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <h2>Statistics</h2>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <p>All: {all}</p>
//         <p>Average: {average.toFixed(2)}</p>
//         <p>Positive: {positive.toFixed(2)}%</p>
//       </div>
//     );
//   };

//   const handleGoodClick = () => {
//     setGood(good + 1);
//   };

//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1);
//   };

//   const handleBadClick = () => {
//     setBad(bad + 1);
//   };

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <button id="buttonone" onClick={handleGoodClick}>good</button>
//       <button id="buttontwo" onClick={handleNeutralClick}>neutral</button>
//       <button id="buttonthree" onClick={handleBadClick}>bad</button>
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   );
// };

// export default App;
//************************************************************************ */
//Excercise 1.11
// import React from 'react';

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const StatisticLine = ({ text, value }) => (
//   <tr>
//     <td>{text}</td>
//     <td>{value}</td>
//   </tr>
// );

// const Statistics = ({ good, neutral, bad }) => {
//   const all = good + neutral + bad;
//   const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
//   const positive = all === 0 ? 0 : (good / all) * 100;

//   if (all === 0) {
//     return <p>No feedback given</p>;
//   }

//   return (
//     <table>
//       <tbody>
//         <StatisticLine text="Good" value={good} />
//         <StatisticLine text="Neutral" value={neutral} />
//         <StatisticLine text="Bad" value={bad} />
//         <StatisticLine text="All" value={all} />
//         <StatisticLine text="Average" value={average.toFixed(2)} />
//         <StatisticLine text="Positive" value={`${positive.toFixed(2)}%`} />
//       </tbody>
//     </table>
//   );
// };

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = React.useState(0);
//   const [neutral, setNeutral] = React.useState(0);
//   const [bad, setBad] = React.useState(0);

//   const handleGoodClick = () => {
//     setGood(good + 1);
//   };

//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1);
//   };

//   const handleBadClick = () => {
//     setBad(bad + 1);
//   };

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={handleGoodClick} text="good" />
//       <Button handleClick={handleNeutralClick} text="neutral" />
//       <Button handleClick={handleBadClick} text="bad" />
//       <div>
//         <h2>Statistics</h2>
//         <Statistics good={good} neutral={neutral} bad={bad} />
//       </div>
//     </div>
//   );
// };

// export default App;



//************************************************************************ */
//Excercise 1.12
//step 1: Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering. 


import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  // create a function for event handler


    //use method math.floor to select ancedote from array
    //use method math.random to select random ancedote
    //ancedotes is an array of quotes so use .length property 


    //use key setSelected to update ancedote
    
  }

  return (
    <div>
      {/* input randomIndex function */}

      {/* display selected ancedote  */}

    </div>
  )
}

export default App


//************************************************************************ */
//Excercise 1.13

//************************************************************************ */
//Excercise 4.1

// const express = require('express')
// const app = express()
// const cors = require('cors')
// const mongoose = require('mongoose')

// const blogSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// })

// const Blog = mongoose.model('Blog', blogSchema)

// const mongoUrl = 'mongodb://localhost/bloglist'
// mongoose.connect(mongoUrl)

// app.use(cors())
// app.use(express.json())

// app.get('/api/blogs', (request, response) => {
//   Blog
//     .find({})
//     .then(blogs => {
//       response.json(blogs)
//     })
// })

// app.post('/api/blogs', (request, response) => {
//   const blog = new Blog(request.body)

//   blog
//     .save()
//     .then(result => {
//       response.status(201).json(result)
//     })
// })

// const PORT = 3003
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

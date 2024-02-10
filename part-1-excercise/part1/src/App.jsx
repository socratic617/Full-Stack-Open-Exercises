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

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App
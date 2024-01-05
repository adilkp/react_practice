import React from 'react'
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {id: "heading"}, "Adil Khan !");

console.log(heading)

// React element
// const jsxHeading = (
//   <h1 className='head' tabIndex='5'>
//     Welcome to React 🚀
//   </h1>
// );

const Title = () => (
  <h1 className='head' tabIndex='5'>
    Welcome to React using JSX
  </h1>
)

// console.log(jsxHeading)

// React functional component
//Component composition

const HeadingComponent = () => (
  <div id='container'>
    <Title />
    <h1 className='heading'>Welcome to React Functional component🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)

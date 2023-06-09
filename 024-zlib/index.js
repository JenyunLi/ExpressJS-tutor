function test() {
  
}
Skip to main content
Redux Logo
Redux Toolkit
Getting Started
Tutorials
Usage Guide
API
RTK Query
GitHub

Introduction
Getting Started
Tutorials
Tutorials Overview
Quick Start
TypeScript Quick Start
RTK Query Quick Start
Using Redux Toolkit
Usage Guide
Usage With TypeScript
Writing Reducers with Immer
API Reference
RTK Query
RTK Query Overview
Comparison with Other Tools
Examples
Usage With TypeScript
Using RTK Query
API Reference
TutorialsQuick Start
Redux Toolkit Quick Start
WHAT YOU'LL LEARN
How to set up and use Redux Toolkit with React-Redux
PREREQUISITES
Familiarity with ES6 syntax and features
Knowledge of React terminology: JSX, State, Function Components, Props, and Hooks
Understanding of Redux terms and concepts
Introduction
Welcome to the Redux Toolkit Quick Start tutorial! This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly.

How to Read This Tutorial
This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, see the tutorials linked in the "Tutorials Overview" page.

For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on a typical Create-React-App folder structure where all the application code is in a src, but the patterns can be adapted to whatever project or folder setup you're using.

The Redux+JS template for Create-React-App comes with this same project setup already configured.

Usage Summary
Install Redux Toolkit and React-Redux
Add the Redux Toolkit and React-Redux packages to your project:

npm install @reduxjs/toolkit react-redux

Create a Redux Store
Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

TypeScript
JavaScript
app/store.js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

Provide the Redux Store to React
Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

TypeScript
JavaScript
index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

Create a Redux State Slice
Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

TypeScript
JavaScript
features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer


Add Slice Reducers to the Store
Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

TypeScript
JavaScript
app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

Use Redux State and Actions in React Components
Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.

TypeScript
JavaScript
features/counter/Counter.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

Now, any time you click the "Increment" and "Decrement" buttons:

The corresponding Redux action will be dispatched to the store
The counter slice reducer will see the actions and update its state
The <Counter> component will see the new state value from the store and re-render itself with the new data
What You've Learned
That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:

SUMMARY
Create a Redux store with configureStore
configureStore accepts a reducer function as a named argument
configureStore automatically sets up the store with good default settings
Provide the Redux store to the React application components
Put a React-Redux <Provider> component around your <App />
Pass the Redux store as <Provider store={store}>
Create a Redux "slice" reducer with createSlice
Call createSlice with a string name, an initial state, and named reducer functions
Reducer functions may "mutate" the state using Immer
Export the generated slice reducer and action creators
Use the React-Redux useSelector/useDispatch hooks in React components
Read data from the store with the useSelector hook
Get the dispatch function with the useDispatch hook, and dispatch actions as needed
Full Counter App Example
The counter example app shown here is also the

Here's the complete counter application as a running CodeSandbox:


What's Next?
We recommend going through the "Redux Essentials" and "Redux Fundamentals" tutorials in the Redux core docs, which will give you a complete understanding of how Redux works, what Redux Toolkit does, and how to use it correctly.

Last updated on Jun 24, 2022
Previous
Tutorials Overview
Next
TypeScript Quick Start
Introduction
How to Read This Tutorial
Usage Summary
Install Redux Toolkit and React-Redux
Create a Redux Store
Provide the Redux Store to React
Create a Redux State Slice
Add Slice Reducers to the Store
Use Redux State and Actions in React Components
What You've Learned
Full Counter App Example
What's Next?
Docs
Getting Started
Tutorials
Usage Guide
API Reference
RTK Query
Community
Stack Overflow
Discord
More
GitHub
Deploys by Netlify
Redux Logo
Copyright © 2015–2023 Dan Abramov and the Redux documentation authors.
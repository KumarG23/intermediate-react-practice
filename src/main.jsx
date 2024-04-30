import React, { createContext, useReducer, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'


function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])


export const TeamContext = createContext();

const initialState = {
  team: [
    // {
    //   id: 0,
    //   name: '',
    //   stats: []
    // }
  ], // empty array for adding team members

};


const TeamReducer = (state, action) => {
  switch(action.type) {
    case 'addMember': // add team members
    if (state.team.length < 4){
    console.log('adding member:', action.payload);
      // action.payload.id = 
      return {
        ...state,
        team: [...state.team, action.payload]
      };
    } else {
      alert('Max number of players have been reached');
      console.log('action type:', action.type);
      return state; // default state

    }
    default:
      return state;
  }
};
// provider component to apply state and dispatch to children
const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TeamReducer, initialState)
console.log(state);
  return (
    <TeamContext.Provider value={{ state, dispatch }}>
    {children}
    </ TeamContext.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <TeamProvider>
  <RouterProvider router={router} />
  </TeamProvider>
)

// export const useTeam = () => useContext(TeamContext);



// two screens home and edit team
// edit team screen- user can name and add up to 4 team members

// Home screen- summary of team/ show all team members and their info/stats.

// manage the state using useContext and useReducer

// the user should be able to edit stats of each member
// three stats = 10 
// three stats are between 1-5
// three stats are health, attack, speed.

// could randomly generate stats always equaling 10
// could randomly generate player names.

// could upload image for team member avatar.

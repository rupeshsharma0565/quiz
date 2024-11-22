import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import LoginPage from './components/Login'
import Register from './components/Register'
import AddQuiz from './pages/AddQuiz'
import ViewQuiz from './pages/ViewQuiz'
import Play from './pages/Play'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADHmm64EcSDB444vSJjD6AxchMc4GAkjI",
  authDomain: "wscubetech-first-project.firebaseapp.com",
  databaseURL: "https://wscubetech-first-project-default-rtdb.firebaseio.com",
  projectId: "wscubetech-first-project",
  storageBucket: "wscubetech-first-project.firebasestorage.app",
  messagingSenderId: "675779956690",
  appId: "1:675779956690:web:4ccd8babb816de5b08420b",
  measurementId: "G-VVKRYD5LD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:
        [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/add-quiz",
            element: <AddQuiz />
          },
          {
            path: "/view-quiz",
            element: <ViewQuiz />
          },
          {
            path: "/play-quiz",
            element: <Play />

          }


        ]
    },

    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

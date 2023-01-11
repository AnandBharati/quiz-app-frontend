import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import './app.scss'
import Home from "./pages/homepage/Home";
import Layout from "./components/Layout";
import Quiz from "./pages/quiz/Quiz";

import { useSelector } from "react-redux";
import Logout from "./pages/auth/Logout";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import AdminError from "./pages/admin-dashboard/AdminError";
import AddQuestionSet from "./pages/admin-dashboard/AddQuestionSet";
import ManageQuestions from "./pages/admin-dashboard/ManageQuestions";
import QuizWelcome from "./pages/quiz/QuizWelcome";
import QuizScore from "./pages/quiz/QuizScore";
import { useState } from "react";

function App() {

  const data = useSelector((state) => state.authReducer)
  const qBankData = useSelector((state) => state.qBankReducer)
  const qData = useSelector((state) => state.questionReducer)
  // const [isLoading] = useState(data.isLoading || qBankData.isLoading || qData.isLoading);
  console.log(data.isLoading, qBankData.isLoading, qData.isLoading)
  // console.log('isloading', isLoading)

  const isDataLoaded = useSelector((state) => state.qBankReducer.isDataLoaded)
  // console.log('data in app', data)
  const userloggedin = data.isloggedIn;
  const usrnm = data.username;


  const loader = <div className="loader">
    <span className="spinner"></span>
    <span className="caption">Loading...</span>
  </div>

  return (

    <div className="App">
      {(data.isLoading || qBankData.isLoading || qData.isLoading) && loader}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="login" element={userloggedin ? <Home /> : <Login />} />
            <Route path="register" element={userloggedin ? <Home /> : <Register />} />
            <Route path="logout" element={userloggedin ? <Home /> : <Logout />} />
            <Route path="*" element={<h1> Error </h1>} />
          </Route>
          <Route path='quiz/' element={<Layout />}>
            <Route index element={<QuizWelcome />} />
            <Route path="start" element={isDataLoaded ? <Quiz /> : <QuizWelcome />} />
            <Route path="score" element={isDataLoaded ? <QuizScore /> : <QuizWelcome />} />
            <Route path="end" element={<h1> quiz end page </h1>} />
            <Route path="*" element={<h1>Quiz Error </h1>} />
          </Route>
          <Route path="admin/" element={<Layout />} >
            <Route index element={(usrnm === 'admin' && userloggedin) ? <AdminDashboard /> : <Login />} />
            <Route path="admindashboard" element={(usrnm === 'admin' && userloggedin) ? <AdminDashboard /> : <AdminError />} />
            <Route path="addquestionset" element={(usrnm === 'admin' && userloggedin) ? <AddQuestionSet /> : <AdminError />} />
            <Route path="managequestions" element={(usrnm === 'admin' && userloggedin) ? <ManageQuestions /> : <AdminError />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

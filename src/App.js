import React from 'react';
import './App.css';
import styled from "styled-components"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Spinner from "react-spinkit";



function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
        <img
            src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
            alt=""
          />
        <Spinner 
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
        />
        </AppLoadingContent>
      </AppLoading>
    )
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <>
        <Header/>
        <AppBody>
          <Sidebar />
            <Routes>
              <Route exact path="/" element={<Chat/>} />
            </Routes>
        </AppBody>
        </>
        )}
    </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding-bottom: 100px;

> img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
}
`;


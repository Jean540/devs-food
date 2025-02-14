"use client";
import { Header } from "@/components/Header";

import { useRouter } from "next/navigation";

// import { useHistory } from "react-router-dom";
// import { Container, Titulo } from './styled';

const HomePage = () => {
  const router = useRouter();
  // const history = useHistory();
  const handleButtonClick = () => {
    router.push("./tela2");
    //  history.push('/tela2/testador');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleButtonClick}>Ir para Tela 2</button>
    </div>
  );
};

export default HomePage;

/*
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <h1>Oi, {name}</h1>

            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <Route path="/tela2/:nome">
                    <Tela2Screen />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

*/

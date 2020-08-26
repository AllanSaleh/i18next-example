import React from 'react';
import './App.css';
import Acomponent from './components/Acomponent';
import Bcomponent from './components/Bcomponent'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/B">
          <Bcomponent />
        </Route>
        <Route path="/">
          <Acomponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

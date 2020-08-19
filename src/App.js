import React from 'react';
import './App.css';
import Acomponent from './components/Acomponent';
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <button onClick={() => handleClick('en')}>English</button>
      <button onClick={() => handleClick('de')}>German</button>
      <Acomponent t={t} />
    </>
  );
}

export default App;

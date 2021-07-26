import React from "react";
import "./App.css";
import Acomponent from "./components/Acomponent";
import Bcomponent from "./components/Bcomponent";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <Bcomponent />
      <Acomponent />
    </>
  );
}

export default App;

import React from 'react';
import { useTranslation } from 'react-i18next'



const Bcomponent = () => {

    const { t, i18n } = useTranslation();
    function handleClick(lang) {
        i18n.changeLanguage(lang)
    }


    return (
        <>
            <button onClick={() => handleClick('en')}>English</button>
            <button onClick={() => handleClick('de')}>German</button>
        </>);
}

export default Bcomponent;
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import AlertBs from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [bgColor, setbgColor] = useState('white');
  const [caret, setcaret] = useState('black');
  const [alert, setAlert] = useState(null);

  const showAlert = function (type, head, message) {

    setAlert({
      type: type,
      head: head,
      msg: message

    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  function changeBg() {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setbgColor('black')
      setcaret('purple')
      showAlert("success", "Success", "Dark mode enabled");

    }

    else {
      setmode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setbgColor('white')
      setcaret('black')
      showAlert("dark", "Success", "Dark mode enabled");
    }
  }
  return (
    <>
      <Navbar title="Anant's App" mode={mode} changeBg={changeBg} />
      <AlertBs alert={alert} />
      <TextArea title="Text Transform" bgColor={bgColor} changeBg={changeBg} caret={caret} />

    </>

  );
}

export default App;

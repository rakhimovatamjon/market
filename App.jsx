import { useState } from "react";
import MainLayout from "./Layouts/Main/MainLayout";
import uz from './Store/Languages/uz'
import en from './Store/Languages/en'
import ru from './Store/Languages/ru'

let url = process.env.REACT_APP_BACK_URL;

export default function App() {
  let [mode, setMode] = useState(true) 
  let [lang, setLang] = useState('uz') 
  console.log(mode);
  return (
    <div className="App">
      <MainLayout langItems={{lang, setLang, uz, en, ru}} mode={mode} setMode={setMode} />
    </div>
  );
}


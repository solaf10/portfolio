import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SingleProject from "./pages/SingleProject";
import { createContext, useEffect, useRef, useState } from "react";
import Footer from "./components/Footer/Footer";

export const ThemeContext = createContext(null);

function App() {
  const [isDark, setIsDark] = useState(() => {
    return JSON.parse(localStorage.getItem("dark"));
  });
  useEffect(() => {
    localStorage.setItem("dark", isDark);
  }, [isDark]);
  const footer = useRef(null);
  return (
    <ThemeContext.Provider value={isDark}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setIsDark={setIsDark} footer={footer} />}
          />
          <Route
            path="/:id"
            element={<SingleProject setIsDark={setIsDark} />}
          />
        </Routes>
        <Footer ref={footer} />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

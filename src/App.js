import "@/App.css";
import "@/style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home.jsx";
import Header from "@/components/Header/Header.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

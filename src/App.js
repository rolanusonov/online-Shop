import './App.css';
import Home from "./companents/Home/Home";
import Header from "./companents/Header/Header";
import {Route, Routes } from "react-router-dom";
import NotFound from "./companents/404/NotFound";
import Detail from "./companents/detail/Detail";

function App() {
    return (

        <div>
            <Header/>
            <Routes >
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </div>
    );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./About";
import News from "./News";

function AllPage() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/News' element={<News />}></Route>
            </Routes>
        </>
    )
}
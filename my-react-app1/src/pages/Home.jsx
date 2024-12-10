import { Route } from "react-router-dom"

function Home() {
    return (<>
        <Route path='/' element={<Home />}></Route>
        <div>我是首頁</div>

    </>
    )
}
export default Home
import { Link } from "react-router-dom"


function Home() {
    return (
        <>
            <div>我是首頁</div>
            <Link to='/about'>關於我</Link>
        </>
    )
}
export default Home
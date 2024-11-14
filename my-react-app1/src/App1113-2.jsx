import { useState } from "react"

function App() {
    // const 常數 =>不能變動的值
    // React執行中若要改變 const值，必須使用useState方法

    //定義useState
    // const [變數名稱, 更改變數的方法] = useState(初始值)

    const [num, setNum] = useState(0);

    function btnClick() {
        setNum(num + 5);
    }
    return (
        <>
            <h1>React狀態-useState方法</h1>
            <h2>目前的值：{num}</h2>
            <button onClick={() => { /* 使用箭頭函示 */
                setNum(num + 1); /*  */
            }}>+1</button>


            <button onClick={btnClick}>+5</button>
        </>
    )
}
export default App
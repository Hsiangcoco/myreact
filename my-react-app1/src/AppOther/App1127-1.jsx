import { useEffect, useState } from "react"

function App() {
    const [count, setCount] = useState(0)

    let p1 = document.getElementById('p1')
    // useEffect (function(方法), [](陣列))
    //每一次渲染之後執行
    useEffect(() => {
        let btn2 = document.getElementById('btn2') //監聽事件為js語法 因為後面才渲染 所以要使用監聽事件時 才能使用useEffect
        btn2.addEventListener('click', () => { //
            p1.style.color = 'red'
        })
    });
    //只執行一次
    //useEffect(() => { }, []);
    //當陣列中的依賴條件改變時，就會執行
    //useEffect(() => { }, [count]);

    return (
        <>
            <h1>uesEffect</h1>
            <hr />
            <p id="p1">我是段落</p>
            <button onClick={() => {
                p1.style.color = 'blue'
            }
            }>藍色</button>
            {/* 監聽事件 */}
            <button id="btn2">變紅色</button>
            <button onClick={() => {
                p1.style.color = 'green'
            }
            }>變綠色</button>

        </>
    )
}

export default App
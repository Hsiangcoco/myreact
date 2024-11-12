// 子組建

function MyCom(props) {
    return <>
        <div>我是子組件</div> {/* 每次都只能渲染一個元素 */}
        <div>{props.a}</div> {/* 叫出屬性時 要用 { preps.(屬性名稱) } */}
        <div>{props.b}</div>
    </>
}

//子組件使用「解構賦值寫法」寫法
// 解構賦值的名稱必須一樣，順序可以不同
function MyCom2({ a, b = "我是預設值b", c }) { /* 也可以直接給予值 */
    c(); /* 針對方法的執行 就是直接針對值的內容 使用 */
    return <>
        <div>我是子組件</div> {/* 每次都只能渲染一個元素 */}
        <div>{a}</div> {/* 叫出屬性時 要用 { preps.(屬性名稱) } */}
        <div>{b}</div>
    </>
}

// 父組件
function App() {
    return (
        <>
            {/* 回調函式 = callback function */}
            <MyCom2 a='我是屬性a' c={() => {
                console.log("我是方法c") /* 這個先被執行 */

            }} />
            {/* 
        props= properites  =屬性

        作用 = 從父組件傳遞資料到子組建 （由上往下）
        撰寫React時，組件之間需要溝通時（也就是傳遞資料）
        props 就可做到這件事情

        */}

        </>
    )
}

export default App

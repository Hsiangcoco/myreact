function App() {
    //建立函式方法1
    function sayHi() {
        alert('我按到了(傳統設定的一般函式方式）')
    }
    //建立函式方法2
    const sayHi2 = () => {
        alert('我按到了(傳統設定的箭頭函式）')
    }

    return (
        <div>
            {/* 事件處理1：在HTML標籤上綁定事件 */}
            <button onClick={function () { alert('我按到了(匿名函式)') }}>我是按鈕1</button>{/* 匿名函式 */}
            <button onClick={() => { alert('我按到了(箭頭函式)') }}>我是按鈕2</button>{/* 箭頭函式 */}

            {/* 事件處理2:呼叫函式 */}
            <button onClick={sayHi}>我是按鈕</button>{/* 傳統函式 不可以在韓式後面加上（） 否則會直接呼叫 */}
            <button onClick={sayHi2}>我是按鈕</button>{/* 傳統函式 不可以在韓式後面加上（） 否則會直接呼叫 */}

        </div>
    )
}

export default App

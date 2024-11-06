import "./App.css"

function MyCom() {
  return (
    <>  {/* div與 <><>的差別 如果使用div在未來抓資料的時候 使用div會造成抓內容的錯誤導致跑版*/}
      <h1>React</h1> {/* //return後方只能放一個元素 若是有多重元素的話需要用 <><> 包住其他內容 */}
      <p>這是Ｐ元素</p>
    </>
  )
}
//切記不要再使用元件中再新增元件 因為會導致重複讀取讓效能降低
function App() {
  //建立變數
  const strName = "請輸入文字"
  return (

    <div>
      {/* JSX中使用javascript變數，前後加大括弧{變數名稱} */}
      <h1 className="myH1" style={{ /* 可以透過style={{}} 來使用css語法 命名規則與css大不相同 如果有-需要刪除 兩個英文拼字組起來需要字首大寫 ：'參數' */
        color: 'red',
        background: 'yellow',
        width: '300px' 
      }} >{strName.toUpperCase()},午安</h1> {/* 如果要變成大寫 可以直接在變數名稱後面加.toUpperCase 小寫就是LowCase */}
      <label htmlFor="userName">請輸入姓名</label>{/* label 清單文字 */}
      <input type="text" id="userName" placeholder={strName} />{/* input 輸入文字方塊  也可以將變數放置任何標籤中要記得加入大括弧{變數名稱}  */}
      <MyCom /> {/* 在呼叫時 可以用<MyCom></MyCom>  或是省略變成>>> <MyCom/>*/}
    </div>
  )
}

export default App

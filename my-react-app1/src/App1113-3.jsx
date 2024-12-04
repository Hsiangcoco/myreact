import { useState } from "react"

function App() {

  const [name, setName] = useState('王小明');

  function changeName(e) {
    setName(e.target.value)
  }
  return (
    <>
      <h1>設計輸入一個名字的欄位，並且即時顯示出來</h1>
      <hr />
      <h3>目前文字方塊的內容：{name}</h3>
      請輸入姓名：<input type="text" value={name} onChange={(e) => {
        setName(e.target.value);
      }} />
      <br />
      請輸入姓名2:<input type="text" value={name} onChange={changeName} />

      {/* <button>清空文字方塊內容</button> */}
    </>
  )
}
export default App
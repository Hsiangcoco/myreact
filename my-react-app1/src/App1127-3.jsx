import { useState } from "react"

function App() {
  const city2 = ['台北市', '新北市', '高雄市', '台中市', '台南市', '桃園市']
  const code1 = ['HTML', 'CSS', "JavaScript"]
  const [inputUserName, setInputUserName] = useState('我是文字方塊');
  const [selCity, setSelCity] = useState('請選擇');
  const [city2s, setCity2s] = useState('')
  //閱讀確認
  const [check, setCheck] = useState(false)
  //數選多個核取方塊
  const [chkLIst, setChkList] = useState([])
  const [chkLIst2, setChkList2] = useState([])
  //建立函式處理被勾選的項目
  const handleChkList = (e) => {
    if (e.target.checked) {
      setChkList([...chkLIst, e.target.value])
    } else {
      setChkList(
        chkLIst.filter((list) => {
          return list !== e.target.value;
        })
      )
    }
  }
  const handleChkList2 = (e) => {
    if (e.target.checked) {
      setChkList2([...chkLIst2, e.target.value])
    } else {
      setChkList2(
        chkLIst2.filter((list) => {
          return list !== e.target.value;
        })
      )
    }
  }


  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input標籤 */}
      <label htmlFor="username">使用者名稱:</label>
      <input type="text" id="username" value={inputUserName} onChange={(e) => {
        setInputUserName(e.target.value)
      }} />{inputUserName}
      {/* 逐行寫法 */}
      <br />
      <label htmlFor="city">縣市名：</label>
      <select name="" id="city" value={selCity}
        onChange={(e) =>
          setSelCity(e.target.value)
        }>
        <option value="">請選擇</option>
        <option value="台北市">台北市</option>
        <option value="新北市">新北市</option>
        <option value="高雄市">高雄市</option>
        <option value="台中市">台中市</option>
        <option value="台南市">台南市</option>
        <option value="桃園市">桃園市</option>
      </select>{selCity}
      <br />

      {/* 陣列寫法 */}
      <label htmlFor="city">縣市名：</label>
      <select name="" id="city" value={city2s} onChange={(e) => {
        setCity2s(e.target.value)
      }} >
        <option value='' disabled>請選擇</option>
        {city2.map((city2) => {
          return <option value={city2} key={city2}>{city2}</option>
        })
        }
      </select>{city2s}
      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">已閱讀</label>
      <input type="checkbox" name="isCheck" id="isCheck" value={check}
        onClick={(e) => {
          //處理勾選值得變化
          setCheck(e.target.checked);

        }} />{check.toString()}

      {/* 複選:多個核取方塊 */}
      <br />

      <input type="checkbox" name="chkList1" id="chkList1" value='HTML' onClick={handleChkList} />
      <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" name="chkList2" id="chkList2" value='CSS' onClick={handleChkList} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" name="chkList3" id="chkList3" value='JavaScript' onClick={handleChkList} />
      <label htmlFor="chkList3">JavaScript</label>
      <br />
      {chkLIst}
      <hr />

      {
        code1.map((list) => {
          return (<div key={list}>
            <input type="checkbox" name="chkList1" id={list} value={list} onClick={handleChkList2} />
            <label htmlFor={list}>{list}</label>

          </div>
          )
        })
      }{chkLIst2}




    </>
  )
}
export default App
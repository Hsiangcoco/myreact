//傳遞組件
// 把組件放在另外一個組件內容中
// 這種寫法在React中叫組合（composition）
// 此方法不影響組件功能的基礎上，另外再給組件加入額外的功能


// 建立新的組件
function TwoCom() {
  return <h1>我是TwoCom組件</h1>
}


/* 子組件 */
function MyCom({ children }) { /* children 預設屬性 */
  return <>
    我是MyCom組件
    {children}
  </>
}

/* 父組件 */
function App() {
  return (
    <>
      {/* 也可以這樣寫 <MyCom children={<TwoCom/>}/> 可透過這樣的方式將children 改成其他名稱 但子組件的屬性名都要改為相同內容
       */}
      <MyCom>
        <TwoCom />
      </MyCom>


    </>
  )
}

export default App

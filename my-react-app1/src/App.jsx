

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
  return (
    <div>
      <MyCom /> {/* 在呼叫時 可以用<MyCom></MyCom>  或是省略變成>>> <MyCom/>*/}
    </div>
  )
}

export default App

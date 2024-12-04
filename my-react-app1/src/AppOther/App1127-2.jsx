import { useEffect } from "react"

function App() {
  //使用useEffect並用監聽函式

  useEffect(() => {
    const p1 = document.getElementById('p1')
    p1.addEventListener('mouseover', () => {
      p1.style.color = "red"
      p1.style.fontWeight = 'bold'
    })
    p1.addEventListener('mouseout', () => {
      p1.style.color = ""
      p1.style.fontWeight = ''
    })
    const p2 = document.getElementById('p2')
    p2.addEventListener('mouseover', () => {
      p2.textContent = '我變了'
    })
    p2.addEventListener('mouseout', () => {
      p2.textContent = '變內容'
    })
    let isClick = false
    h1.addEventListener('click', (e) => {
      if (isClick === false) {
        e.target.textContent = 'click事件被觸發了'
        e.target.style.color = 'red'
        isClick= true;
      }else{
        e.target.textContent = '滑鼠事件'
        e.target.style.color = ''
      }
    })

  })

  return (
    <>
      <h1 id="h1">滑鼠事件</h1>
      <hr />
      <p id="p1" >變色</p>
      <p id="p2" >變內容</p>
    </>

  )
}

export default App
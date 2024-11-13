
import "./App.css";
import ShowContent from './ShowContent.jsx'
import ShowClass from "./ShowClass.jsx";

/* function ShowContent() {
  const contentData = [
    {
      id: 1,
      title: "教學影音",
      desc: "透過影音，來了解軟體核心概念以及入門，並跟著飯裡練習以了解其中之應用方式"
    },
    {
      id: 2,
      title: "良性互動",
      desc: "學習過程中，若您提到任何問題或是你有任何想法歡迎提出，我們會盡量的協助問題的解決"
    },
    {
      id: 3,
      title: "趨勢分享",
      desc: "分享目前時下所流行之趨勢，讓各位可以隨時掌握新趨勢的發展"
    }
  ]

  return (
    <>
      {
        contentData.map((item) => {
          return (

              <div className="Video" key={item.id}>
                <h2 className="title" >{item.title}</h2>
                <p>{item.desc}</p>
              </div>

          )
        })
      }
    </>
  )
} */
/* function ShowClass() {

  const contentData2 = [
    {
      id: 1,
      img: "./images/unity.jpg",
      Class: "Unity 5",
      title: "最新的Unity公開課程,讓你一步步做出自己心中理想的遊戲",
      teacher: "講師:xxx",
      time: "4",
      price: "1600",
      sold: "1200"
    },
    {
      id: 2,
      img: "./images/gamesalad.jpg",
      Class: "GameSalad 2D遊戲製作",
      title: "視覺話操作,2D遊戲快捷開發,不會寫程式的你一樣可以寫遊戲",
      teacher: "講師:xxx",
      time: "8",
      price: "3200",
      sold: "1600",
    },
    {
      id: 3,
      img: "./images/gwd.jpg",
      Class: "Google Web Design",
      title: "用於建立HTML5廣告動畫,透過時間軸,將個嗡物件和事件以動畫方式呈現",
      teacher: "講師:xxx",
      time: "8",
      price: "3200",
      sold: "1600"
    }
  ]
  return (
    <>
      {
        contentData2.map((item2) => {
          return (

              <div className="box2" key={item2.id}>
                <div>
                  <img className="foTo" src={item2.img} alt="" />
                  <div>
                    <h2 >{item2.Class}</h2>
                    <p className="p-blue">{item2.title}</p>
                    <p>{item2.teacher}</p>
                    <p>影音課程時數:{item2.time}小時</p>
                    <div className="money">
                      <p className="p1">原價NT${item2.price}</p>
                      <p className="p2">NT${item2.sold}</p>
                    </div>
                  </div>
                  <button>付款上課去</button>
                </div>
              </div>

          )
        })
      }
    </>
  )
} */


function App() {
  return (
    <>
      {/* 頁首曲 */}
      <header>
        <div>
          <img id="Banner" src="./images/banner.jpg" alt="banner" title="banner" />
        </div>
      </header>
      {/* 特色區 */}
      <main>
        <div id="feature">
          <ShowContent/>
        </div>
        {/* 主標 */}
        <div>
          <p id="study" >讓學習成為一種習慣</p>
        </div>

        {/* 推薦課程 */}
        <h1>推薦課程</h1>

        <div id="card">
          <ShowClass />
        </div>
      </main>
      {/* 頁尾 */}
      <footer>
        &copy;吳志祥
      </footer>
    </>
  )
}

export default App

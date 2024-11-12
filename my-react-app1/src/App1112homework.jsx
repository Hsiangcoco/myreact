
import "./App.css";

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
          <div className="Video">
            <h2 className="title" >教學影音</h2>
            <p>透過影音，來了解軟體核心概念以及入門，並跟著飯裡練習以了解其中之應用方式</p>
          </div>
          <div className="fee">
            <h2 className="title" >良性互動</h2>
            <p>學習過程中，若您提到任何問題或是你有任何想法歡迎提出，我們會盡量的協助問題的解決</p>
          </div>
          <div className="share">
            <h2 className="title" >趨勢分享</h2>
            <p>分享目前時下所流行之趨勢，讓各位可以隨時掌握新趨勢的發展</p>
          </div>
        </div>

        {/* 主標 */}
        <div>
          <p id="study" >讓學習成為一種習慣</p>
        </div>

        {/* 推薦課程 */}
        <h1>推薦課程</h1>

        <div id="card">
          <div className="box2">
            <div>
              <img className="foTo" src="./images/unity.jpg" alt="" />
              <div>
                <h2 >Unity 5</h2>
                <p className="p-blue">最新的Unity公開課程,讓你一步步做出自己心中理想的遊戲</p>
                <p>講師:xxx</p>
                <p>影音課程時數:4小時</p>
                <div className="money">
                  <p className="p1">原價NT$1600</p>
                  <p className="p2">NT$1200</p>
                </div>
              </div>
              <button>付款上課去</button>
            </div>
          </div>

          <div className="box2">
            <div>
              <img className="foTo" src="./images/gamesalad.jpg" alt="" />
              <div>
                <h2>GameSalad 2D遊戲製作</h2>
                <p className="p-blue">視覺話操作,2D遊戲快捷開發,不會寫程式的你一樣可以寫遊戲</p>
                <p>講師:xxx</p>
                <p>影音課程時數:8小時</p>
                <div className="money">
                  <p className="p1">原價NT$3200</p>
                  <p className="p2">NT$1600</p>
                </div>
                <button>付款上課去</button>
              </div>
            </div>
          </div>

          <div className="box2">
            <div>
              <img className="foTo" src="./images/gwd.jpg" alt="" />
              <div>
                <h2>Google Web Design</h2>
                <p className="p-blue">用於建立HTML5廣告動畫,透過時間軸,將個嗡物件和事件以動畫方式呈現</p>
                <p>講師:xxx</p>
                <p>影音課程時數:8小時</p>
                <div className="money">
                  <p className="p1">原價NT$3200</p>
                  <p className="p2">NT$1600</p>
                </div>
              </div>
              <button>付款上課去</button>
            </div>
          </div>
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

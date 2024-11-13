function ShowClass() {

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
}
export default ShowClass
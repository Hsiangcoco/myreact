
function App() {
    /* 建立物件變數 */
    const person = {
        name: "王小明",
        age: 10
    }
    {/* 解構寫法 */ }

    const { name, age } = person;

    return (
        <>
            {/* 一般寫法 */}
            <div>姓名：{person.name}</div>
            <div>年齡：{person.age}歲</div>
            <hr />
            <div>{`姓名:${person.name}`}</div> {/* ``反引號的寫法 */}
            <div>{`年齡:${person.age}歲`}</div>
            <hr />
            {/* 物件解構後的寫法 */}
            <div>解構後的姓名：{name}</div>
            <div>解構後的年齡：{age}歲</div>


        </>
    )
}

export default App

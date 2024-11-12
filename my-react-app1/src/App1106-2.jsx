function Com() {
    return <><h1>React</h1></>
}

function App() {

    //建立陣列(可以是任何形式的資料=元件)
    //同一陣列中,key屬性的值不可重複
    const listItem = [
        <Com key="0" />,
        <Com key="1" />,
        <Com key="2" />,
    ]
    const listBook = [
        { bookName: 'Html', id: 'book1' },
        { bookName: 'Css', id: 'book2' },
        { bookName: 'Java', id: 'book3' },
    ]
    /* 使用filter握濾出陣列中，除了css的書本 */
    const filterBook = listBook.filter((book) => {
        if (book.bookName != 'Css') {
            return true
        }
    })

    //三元運算子的判斷式(是用單層判斷)
    //判斷式？條件成立：條件不成立
    const filterBook1 = listBook.filter((book) => {
        return book.bookName !== 'Css' ? true : false

    })

    return (
        <>
            {/* 使用陣列方法1 */}
            {listItem}
            <hr />
            {/* 使用陣列方法2 => map() >>>此方法可以把一個陣列轉換成另外一個陣列 */}
            {
                listBook.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
            <hr />

            {/* 顯示filter()過濾後的陣列資料 */}
            {
                filterBook.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
            <hr />
            {
                filterBook1.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
        </>
    )
}

export default App

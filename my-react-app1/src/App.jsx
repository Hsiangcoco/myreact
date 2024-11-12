
function App() {
  /* 建立物件中有多筆變數 */
  const person = {
    s1: {
      name: "同學1",
      age: 10
    },/* 需要用,隔開 */
    s2: {
      name: "同學2",
      age: 11
    },
    s3: {
      name: "同學3",
      age: 12
    }
  }
  /* 多筆資料物件的解構方法一*/
  // const { s1, s2, s3 } = person;
  /* 多筆資料的物件解構方法二：解構+展開  使用 ... （其餘運算子）*/
  //解構s1,展開s2,s3
  const { s1, ...other } = person
  // s1有成功被解構 其他的s2 , s3 會被放入other中，需要使用的時候就必須要用other.s2.name <<<比平常多一個other

  function showName(){
    return 
  }






  return (
    <>
    {/* 方法一傳統的輸出方式 */}
      {/*  <div>第一位同學姓名:{s1.name}</div>
      <div>第一位同學年紀:{s1.age}</div>
      <hr />
      <div>第二位同學姓名:{s2.name}</div>
      <div>第二位同學年紀:{s2.age}</div>
      <hr />
      <div>第三位同學姓名:{s3.name}</div>
      <div>第三位同學年紀:{s3.age}</div> */}

      <div>{`同學一姓名：${s1.name}`}</div>
      <div>{`同學二姓名：${other.s2.name}`}</div>
      <div>{`同學三姓名：${other.s3.name}`}</div>



    </>
  )
}

export default App

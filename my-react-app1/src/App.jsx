import $ from 'jquery'

function App() {

  return (
    <div>
      <h2>jquery</h2>
      <button onClick={function () {
        console.log($('h2').text())
      }}>click</button>
    </div>
  )
}
export default App
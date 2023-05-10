const App = () => {

  //let count = 0
  const add = () => {
  //  count++
  //  console.log(count)

  };

  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <button onClick={add}>add</button>
      <h1>{count}</h1>
    </div>
    </>
  )
}

export default App

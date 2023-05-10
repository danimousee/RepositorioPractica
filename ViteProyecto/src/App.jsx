import CountCointainer from '..\src\componentes\CountContainer.jsx'

const App = () => {

  const add = () => {
      setCount(count+1)
      console.log(count)
  };

  const [count, setCount] = useState(0)

   reset = () => {
    setCount(0)
    console.log(count)
  }

  substract = () => {
    setCount(count-1)
    console.log(count)
  }

  return (
    <CountCointainer/>
  )
}

export default App

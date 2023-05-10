import { useState } from "react"
import CountButton from '..\src\componentes\CountButton.jsx'

const CountContainer = () => {
    const [count, setCount] = useState(0)
    const add = () => {setCount(count + 1)}
    const substract = () => {setCount(count - 1)}
    const reset = () => {setCount(0)}

    return (
        <div>
            <CountButton name={"add"} method={add}/>
            <CountButton name={"substract"} method={substract}/>
            <CountButton name={"reset"} method={reset}/>
            <h1>{count}</h1>
        </div>
    )
}

export default CountContainer
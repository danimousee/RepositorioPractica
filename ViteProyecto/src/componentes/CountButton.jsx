const CountButton = ({name, method}) => {
    return (
        <button onClick={method}>{name}</button>
    )
}

export default CountButton
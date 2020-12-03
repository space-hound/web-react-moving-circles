const Slider = (props) => {

    const handleInput = (event) => {
        if(props.onInput) {
            props.onInput(event);
        }
    }

    return (
        <div className={props.classes}>
            { props.label || <label>{props.label}:</label> }
            <input type="range" min={props.min} max={props.max} value={props.value} onInput={handleInput} />
        </div>
    )
}

export default Slider;
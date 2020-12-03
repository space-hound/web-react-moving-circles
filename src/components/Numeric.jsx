const Numeric = (props) => {

    const handleChange = (event) => {
        if(props.onChange) {
            props.onChange(event);
        }
    }

    return (
        <div className={props.classes}>
            { props.label || <label>{props.label}:</label> }
            <input value={props.value} onChange={handleChange} />
        </div>
    );
}

export default Numeric;
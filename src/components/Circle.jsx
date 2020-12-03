const Circle = (props) => {
    const style = {
        top: props.xP,
        left: props.yP,
        width: props.ogSize,
        height: props.ogSize,
        backgroundColor: `#${props.color}`,
        transform: `translate(-${props.size}px, -${props.size}px)`
    };
    return (
        <div className="circle" style={style} />
    );
}
export default Circle;
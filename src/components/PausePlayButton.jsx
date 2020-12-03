const PausePlayButton = (props) => {

    const handlePlayClick = (event) => {
        if(props.onPlayPress) {
            props.onPlayPress(event);
        }
    }

    const handlePauseClick = (event) => {
        if(props.onPausePress) {
            props.onPausePress(event);
        }
    }

    return (
        <div className={props.classes}>
            { props.isPlaying || <button onClick={handlePauseClick}>Pause</button> }
            { !props.isPlaying || <button onClick={handlePlayClick}>Play</button> }
        </div>
    )
}

export default PausePlayButton;
import PausePlayButton from './PausePlayButton';
import Numeric from './Numeric';
import Slider from './Slider';

const Controls = (props) => {

    const handleRenderPress = (event) => {
        event.preventDefault();
        props.onRenderPress(event);
    }

    return (
        <form id="controls" onSubmit={handleRenderPress}>
            <Numeric label="Circles" value={props.circlesCount} />
            <button id="recolor">Render</button>
            <button id="recolor">Clear</button>
            <PausePlayButton isPlaying={props.isPlaying} />
            <button id="recolor">Recolor</button>
            <button id="redirect">Redirect</button>
            <Slider />
            <Slider />
        </form>
    )
}

export default Controls;
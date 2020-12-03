import React, { Component } from 'react';

import { FRAMES } from './../utils/options';
import ACTIONS from './../utils/actions';

import Circle from './Circle';
import Controls from './Controls';

export default class Board extends Component {

    state = {
        isControlShown: false,
        isRendered: false,
        isPlaying: false,
        speedModifier: 0,
        sizeModifier: 0,
        circlesCount: 75,
        circles: [],
        xBound: 0,
        yBound: 0
    }

    constructor (props) {
        super(props);

        this.interval = null;

        this.$board = React.createRef();

        this.handleAction = this.handleAction.bind(this);
        this.handleModSize = this.handleModSize.bind(this);
        this.handleModSpeed = this.handleModSpeed.bind(this);
        this.handleCircleCountChange = this.handleCircleCountChange.bind(this)
    }

    render () {
        return (
            <div id="container">
                <Controls
                    {...this.state}
                    onAction={this.handleAction}
                    onCircleSizeChange={this.handleModSize}
                    onCircleSpeedChange={this.handleModSpeed}
                    onCirclesCountChange={this.handleCircleCountChange}
                />
                <div id="board" ref={this.$board}>
                    {
                        this.state.circles.map((circle, index) => (
                            <Circle {...circle} key={index} />
                        ))
                    }
                </div>
            </div>
        );
    }

    componentDidMount () {
        this.setBounds();
    }

    setBounds() {
        const computedStyles = window.getComputedStyle(this.$board.current);
        this.setState({
            xBound: parseInt(computedStyles.height),
            yBound: parseInt(computedStyles.width)
        });
    }

    handleAction (event) {

    }


    handlePlay (event) {

    }

    handlePause (event) {

    }

    handleClear (event) {

    }

    handleRender (event) {
        this.setState({
            circles: ACTIONS.createCircles(this.state)
        });
        this.interval = setInterval(() => {
            ACTIONS.moveCircles(this.state);
            this.setState({...this.state});
        }, FRAMES)
    }

    handleModDir (event) {

    }

    handleModSize (event) {

    }
    
    handleModSpeed (event) {

    }

    handleModColor (event) {

    }

    handleCircleCountChange (event) {
        
    }
}

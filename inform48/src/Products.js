import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoPlayer = withAutoplay(AwesomeSlider);

class AwesomeComponent extends React.Component {
    render = () => {
        return (
            <div>Привет!</div>
        );
    }
}

export default AwesomeComponent;
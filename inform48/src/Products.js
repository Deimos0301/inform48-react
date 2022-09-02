import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoPlayer = withAutoplay(AwesomeSlider);

class AwesomeComponent extends React.Component {
    render = () => {
        return (
            <>
                {this.state.data ?
                    <AutoPlayer play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={1000}>
                        {this.state.data.map((item) => {
                            return (
                                <div className="template-container">
                                    <div className="template-img-container">
                                        <div className="template-img">
                                            <img src={item.img}></img>
                                        </div>
                                    </div>
                                    <div className="descr-container">
                                        <div className='descr-box'>
                                            <p className="descr-text">{item.caption}</p>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </AutoPlayer>
                    : <></>
                }
            </>
        );
    }
}

export default AwesomeComponent;
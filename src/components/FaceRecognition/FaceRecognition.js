import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
    
    render() {
        var box= this.props.box;
        return (
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img id='inputImage' alt='' src={this.props.imageUrl} width='500px' height='500px' />
                    <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} ></div>
                </div>
            </div>
        );
    }
}


export default FaceRecognition;
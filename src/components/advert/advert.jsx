import React, { Component} from 'react';

import './advert.scss';

import AdvertData from '../../data/advert-data/advert-data';

class Advert extends Component {
    constructor(props) {
        super(props);
        this.updateImageCount = this.updateImageCount.bind(this)
        this.state = {
            imageCount: 0
        }
    }
    updateImageCount() {
        console.log(this.state.imageCount)
        if (this.state.imageCount >= AdvertData.length - 1) {
            this.setState({
                imageCount: 0
            });
        } else this.setState({
            imageCount: this.state.imageCount + 1
        });
    }

    componentDidMount() {
        this.intervalId = setInterval(this.updateImageCount, 5000);
      }

    render() {
        return (
            <div className="advert">
                <img src={ AdvertData[this.state.imageCount].image } alt="" className="advert-image"/>
                <a href="link" className="advert-title"><p>{ AdvertData[this.state.imageCount].buttonLabel }</p></a>
            </div>
        );
    }
}

export default Advert;
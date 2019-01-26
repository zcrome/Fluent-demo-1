import React, { Component } from 'react';
import '../../App.css';

import ImageItem from './ImageItem.js';


class ImageList extends Component{

    render() {

        const images = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

        const imagesItems = images.map((number) =>
            <ImageItem></ImageItem>
        );

        const listsStyle = {"marginTop":"10px"};

        return (
            <div style={listsStyle} className="scrolling-wrapper">{imagesItems}</div>
        )
    }

}

export default ImageList;
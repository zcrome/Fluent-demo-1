import React, { Component } from 'react';
import '../../App.css';

import VideoItem from './VideoItem.js';


class VideoList extends Component{

    render() {

        const images = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

        const imagesItems = images.map((number) =>
            <VideoItem></VideoItem>
        );

        const listsStyle = {"marginTop":"10px"};

        return (
            <div style={listsStyle} className="scrolling-wrapper">{imagesItems}</div>
        )
    }

}

export default VideoList;
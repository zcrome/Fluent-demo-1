import React, { Component } from 'react';
import '../../App.css';

import ImageList from './ImageList.js';
import VideoList from './VideoList.js';
import ShapeList from './ShapeList.js';


class MyFilesLists extends Component{

    render() {

        return (
            <div>
                <ImageList></ImageList>
                <VideoList></VideoList>
                <ShapeList></ShapeList>
            </div>
        )
    }

}

export default MyFilesLists;
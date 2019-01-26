import React, { Component } from 'react';
import '../../App.css';

import ImageList from './ImageList.js';
import VideoList from './VideoList.js';
import ShapeList from './ShapeList.js';


class MyFilesLists extends Component{

    render() {


        

        return (
            <div className="workspace-body">
                <hr/>
                <ImageList ></ImageList>
                <hr/>
                <VideoList></VideoList>
                <hr/>
                <ShapeList></ShapeList>
            </div>
        )
    }

}

export default MyFilesLists;
import React, { Component } from 'react';
import '../../App.css';

import WorkspaceItem from './WorkspaceItem.js';


class ImageList extends Component{

    render() {

        const images = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

        const imagesItems = images.map((number) =>
            <WorkspaceItem>HOLA?</WorkspaceItem>
        );


        return (
            <div className="scrolling-wrapper">{imagesItems}</div>
        )
    }

}

export default ImageList;
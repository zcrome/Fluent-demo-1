import React, { Component } from 'react';
import '../../App.css';

import RectangleInputItem from './RectangleInputItem.js';
import TriangleInputItem from './TriangleInputItem.js';
import TextInputItem from './TextInputItem.js';


class ShapeList extends Component{

    render() {

        const listsStyle = {"marginTop":"10px"};


        return (
            <div style={listsStyle} className="scrolling-wrapper">
            <TextInputItem></TextInputItem>
            <RectangleInputItem></RectangleInputItem>
            <TriangleInputItem></TriangleInputItem>
            </div>
        )
    }

}

export default ShapeList;
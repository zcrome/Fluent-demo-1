import React, { Component } from 'react';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Button from "react-uwp/Button";
import TextBox from "react-uwp/TextBox";
import * as PropTypes from 'prop-types';
import PasswordBox from "react-uwp/PasswordBox";
import AutoSuggestBox from "react-uwp/AutoSuggestBox";
import {Switch} from 'react-router-dom'; 
import {Route, Link} from 'react-router-dom';
import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";
import Icon from "react-uwp/Icon";


import TreeView, { TreeItem } from "react-uwp/TreeView";

import CheckBox from "react-uwp/CheckBox";
import Toggle from "react-uwp/Toggle";
import Slider from "react-uwp/Slider";
import DropDownMenu from "react-uwp/DropDownMenu";






// import Content from "./components/Content";

import { FadeInOut, SlideInOut, ScaleInOut, CustomAnimate } from "react-uwp/Animate";


const baseStyle: React.CSSProperties = {
  margin: "10px 10px 10px 0"
};




class IdleViewComponent extends Component {

  static contextTypes = { theme: PropTypes.object };

  handleClick() {
    
  }


  render() {

    const baseStyle: React.CSSProperties = {
      margin: 10
    };

    const defaultBtnStyle: React.CSSProperties = {
      margin: 4
    };

    const { theme } = this.context;
    const itemStyle = theme.prefixStyle({
      color: theme.baseHigh,
      fontSize: 14,
      fontWeight: "lighter",
      textAlign: "center",
      width: "40%",
      height: "40%",
      margin: 10,
      outline: "none",
      border: `1px solid ${theme.listAccentLow}`,
      overflow: "auto",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: "auto"
    });
    return (
      <div
        style={theme.prefixStyle({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: "160px 0",
          background: theme.desktopBackground
        })}
      >
        <span style={{ ...itemStyle, background: theme.acrylicTexture40.background }}>
          <p
            style={theme.prefixStyle({
              "fontSize": "18em",
              "position": "relative",
              "top": "50%",
              "left": "50%",
              "transform": "translate(-50%, -50%)"
            })}>14:40</p>
          <p
            style={theme.prefixStyle({
              "fontSize": "3em",
              "float": "left",
              "marginTop": "19%",
              "left": "36%",
              "display": "block",
              "position": "relative"
            })}>23 de septiembre del 2018</p>
        <Link to="/logine" replace>
          <Button onClick={this.handleClick} style={{
            fontSize: 32, ...defaultBtnStyle, "marginTop": "26%",
            "left": "32%",
            "display": "block",
            "position": "relative",
            "width": "40%",
            "height": "12%", "fontSize": "4em"
          }}>
            Iniciar Sesion
        </Button>
        </Link>
        </span>
      </div>
    );
  }
}


export default IdleViewComponent;

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


class LoginPasswordComponent extends Component {

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
      width: "800px",
      height: "500px",
      margin: 10,
      outline: "none",
      border: `1px solid ${theme.listAccentLow}`,
      overflow: "hidden",
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
              "display": "block",
              "position": "relative",
              "fontSize": "2rem",
              "fontWeight": "600",
              "top": "32%",
              "left": "10%",
              "width": "100%",
              "margin": "0px",
              "textAlign": "left"
            })}>Contraseña</p>



          <TextBox
            style={theme.prefixStyle({
              "display": "block",
              "position": "relative",
              "top": "35%",
              "left": "10%",
              "width": "80%",
              "height": "50px"
            })}
            placeholder="Ingrese contraseña"
          />

        <Link to="/projects">
          <Button onClick={this.handleClick} style={
            {
              fontSize: 32,
              ...defaultBtnStyle,
              "marginTop": "37%",
              "left": "64%",
              "display": "block",
              "position": "relative",
              "width": "200px",
              "height": "60px",
              "fontSize": "30px"
            }}>
            Ingresar
        </Button>
      </Link>
        </span>
      </div>
    );
  }
}


export default LoginPasswordComponent;

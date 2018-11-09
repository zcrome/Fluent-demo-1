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


class ProjectOpened extends Component {

  static contextTypes = { theme: PropTypes.object };

  handleClick() {
    console.log("HALO!");
  }

  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
  state: ProjectOpened = {
    showHeaderIcon: false,
    showItemIcon: false,
    iconDirection: "left",
    itemHeight: 32
  };

  render() {

    const {
      showHeaderIcon,
      showItemIcon,
      iconDirection,
      itemHeight
    } = this.state;


    const navigationTopNodes = [

      <TreeView
        style={{ height: 640 }}
        iconDirection={iconDirection}
        itemHeight={itemHeight}
        headerIcon={showHeaderIcon && <Icon style={{ fontSize: itemHeight / 3 }}>FolderLegacy</Icon>}
        itemIcon={showItemIcon && <Icon style={{ fontSize: itemHeight / 3 }}>OpenFileLegacy</Icon>}
        listSource={[{
          title: "Buscar",
          children: [{
            title: "Imagenes",
          }]
        },{
          title: "Mis Materiales",
          children: []
        },{
          title: "Color Fondo",
          children: []
        }]}
        showFocus
      />

    ];

    const navigationBottomNode = [
      <SplitViewCommand label="Cerrar Sesión" icon={"\uE7E8"} />
    ];


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
        <span style={{
          ...itemStyle,
          background: theme.acrylicTexture40.background,
          "marginBottom": "0px",
          "width": "854px",
          "height": "480px",
        }}>


          <NavigationView
            style={{
              ...baseStyle,
              "height": "480px",
              "margin": "0px",
              "overflow": "hidden"
            }}
            className="open-p-nav-view"
            pageTitle={<p style={{ fontSize: "16px" }}>José Sanchez</p>}
            displayMode="compact"
            autoResize={false}
            defaultExpanded
            background={theme.listLow}
            initWidth={48}
            navigationTopNodes={navigationTopNodes}
            navigationBottomNodes={navigationBottomNode}
            focusNavigationNodeIndex={3}
            isControlled
          >
            <div className="open-p-nav-view-content">
            
            </div>


          </NavigationView>




        </span>
      </div>
    );
  }
}







export default ProjectOpened;

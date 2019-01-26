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

import MyFilesLists from './Components/Workspace/MyFilesLists.js';
import WorkspaceHeader from './Components/Workspace/WorkspaceHeader.js';


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
      <SplitViewCommand label="Buscar en Internet" icon={"\uE716"} style={{ fontSize: '14px' }} />,
      <SplitViewCommand label="Mis Archivos" icon="PrintLegacy" style={{ fontSize: '14px' }} />
    ];

    const navigationBottomNode = [
      <SplitViewCommand label="Configuración" icon={"\uE713"} style={{ fontSize: '14px' }} />,
      <SplitViewCommand label="Cambiar de Proyecto" icon={"\uE161"} style={{ fontSize: '14px' }} />,
      <SplitViewCommand label="Salir" icon={"\uE161"} style={{ fontSize: '14px' }} />
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
      
      <div className="proyect-open-container"
      style={{
        background: theme.acrylicTexture40.background
      }}
      >
          
        <NavigationView className="navView"
          style={baseStyle}
          pageTitle="San Francisco"
          paneStyle={{ fontSize: '20px' }}
          displayMode="overlay"
          autoResize={false}
          background={theme.listLow}
          initWidth={48}
          navigationTopNodes={navigationTopNodes}
          navigationBottomNodes={navigationBottomNode}
          focusNavigationNodeIndex={3}
        >

        <div className="workspace">
          <WorkspaceHeader></WorkspaceHeader>
          <MyFilesLists></MyFilesLists>
        </div>
        

        </NavigationView>

        
      </div>
    );
  }
}







export default ProjectOpened;

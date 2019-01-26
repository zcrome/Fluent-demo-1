import React, { Component } from 'react';
import '../../App.css';
import Button from 'react-uwp/Button';
import TextBox from "react-uwp/TextBox";


class WorkspaceHeader extends Component {

    render() {


        const labelStyle = {
            display: "inline-block",
            height: "100%",
            width: "60%",
            position: "relative",
            padding: "21px",
            fontSize: "20px"
        }

        const divContainer = {
            display: "inline-block",
            height: "100%",
            width: "40%",
            position: "absolute"
        }

        const defaultBtnStyle: React.CSSProperties = {
            margin: 4
        };

        const baseStyle: React.CSSProperties = {
            margin: "10px 0",
            width: "50%",
            display: "inline-block",
            position: "relative",
        };

        return (
            <div className="workspace-header">
                <label style={labelStyle}>Mis Archivos</label>
                <div style={divContainer}>
                    <TextBox
                        style={baseStyle}
                        placeholder="nombre,categorías"
                    />
                    <Button style={defaultBtnStyle} icon="Search">Buscar</Button>
                </div>
            </div>
        )
    }

}


export default WorkspaceHeader
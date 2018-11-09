import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import {BrowserRouter} from 'react-router-dom'; 
import IdleViewComponent from './IdleView.js';
import LoginEmailComponent from './LoginEmail.js';
import LoginPasswordComponent from './LoginPassword.js';
import ProjectsView from './ProjectView.js';
import ProjectOpened from './ProjectOpen.js';
import {Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
                    <UWPThemeProvider
                    theme={getTheme({
                    themeName: "dark", // set custom theme
                    accent: "#0078D7", // set accent color
                    useFluentDesign: true, // sure you want use new fluent design.
                    desktopBackgroundImage: 'https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg'
                    })}
                    >
                        <Switch>
                            <Route path="/home" component={IdleViewComponent} />
                            <Route path="/logine" component={LoginEmailComponent} />
                            <Route path="/loginp" component={LoginPasswordComponent} />
                            <Route path="/projects" component={ProjectsView} />
                            <Route path="/project" component={ProjectOpened} />
                        </Switch>
                    </UWPThemeProvider>
                    </BrowserRouter> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

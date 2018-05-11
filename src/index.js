import React from 'react';
import {render} from 'react-dom'
import Main from './components/main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './style/index.css'


render(
    <MuiThemeProvider>
        <Main/>
    </MuiThemeProvider>,
   
    document.getElementById('root')
)
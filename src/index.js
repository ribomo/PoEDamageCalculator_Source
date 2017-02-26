import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppWithTheme = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(
  <AppWithTheme />,
  document.getElementById('root')
);

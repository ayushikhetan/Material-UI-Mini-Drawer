import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="App">
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

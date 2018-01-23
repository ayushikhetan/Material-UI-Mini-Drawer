import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';

const styles={
  openModalStyle: {
    padding: '1em',
    transtion: '0.3s all ease-out',
    WebkitTransition: '0.3s all ease-out',
    transform: 'translate3d(258px, 0px, 0px)',
    marginTop: '64px',
    textAlign: 'left'
  },
  closeModalStyle: {
    padding: '1em',
    transtion: '0.3s all ease-out',
    WebkitTransition: '0.3s all ease-out',
    transform: 'translate3d(50px, 0px, 0px)',
    marginTop: '64px',
    textAlign: 'left'
  },
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="App">
          <Header
            title={'Drawer Menu'}
            openState={this.state.open}
            toggleNavigation={this.toggleNavigation}
          />
          <p
            style={
              this.state.open ? styles.openModalStyle : styles.closeModalStyle
            }
          >
            Drawer Menu
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

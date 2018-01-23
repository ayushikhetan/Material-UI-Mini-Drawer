import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ListMenuItems from './Menu';

const styles = {
  appBarHeaderClose: {
    position: 'fixed',
    top: 0,
    transtion: '0.3s all ease-out',
    WebkitTransition: '0.3s all ease-out',
    transform: 'translate3d(0px, 0px, 0px)'
  },
  appBarHeaderOpen: {
    position: 'fixed',
    top: 0,
    transtion: '0.3s all ease-out',
    WebkitTransition: '0.3s all ease-out',
    transform: 'translate3d(254px, 0px, 0px)'

  },
  openList: {
    position: 'fixed',
    zIndex: 999,
    WebkitTransition: '0.3s all ease-out',
    transtion: '0.3s all ease-out',
    width: '255px',
  },
  closeList: {
    position: 'fixed',
    width: '58px',
    zIndex: 999,
    WebkitTransition: '0.3s all ease-out',
    transtion: '0.3s all ease-out',
    boxShadow: '0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
  }
};

class Header extends React.Component {
  render() {
    return (
      <div>
          <AppBar
            title= {this.props.title}
            titleStyle={{textAlign: 'left', fontSize: '20px'}}
            iconElementLeft={this.props.openState && <div></div>}
            onLeftIconButtonClick={this.props.toggleNavigation}
            style={
              this.props.openState ? styles.appBarHeaderOpen : styles.appBarHeaderClose
            }
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: "right", vertical: "top"}}
                anchorOrigin={{horizontal: "right", vertical: "top"}}
              >
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            }
          />
        <Drawer
          onRequestChange={this.props.toggleNavigation}
          containerStyle={this.props.openState ? styles.openList : styles.closeList}
        >
          <ListMenuItems
            toggleNavigation = {this.props.toggleNavigation}
          />
        </Drawer>
      </div>
    )
  }
}

export default Header;

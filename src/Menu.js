import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Home from 'material-ui/svg-icons/action/home';
import Inbox from 'material-ui/svg-icons/content/inbox';
import Starred from 'material-ui/svg-icons/toggle/star';
import Send from 'material-ui/svg-icons/content/send';
import Drafts from 'material-ui/svg-icons/content/drafts';
import SignOut from 'material-ui/svg-icons/action/settings-power';
import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import AllMail from 'material-ui/svg-icons/content/mail';
import Trash from 'material-ui/svg-icons/action/delete';
import Spam from 'material-ui/svg-icons/content/report';

const ListMenuItems = (props) => (
  <List>
    <ListItem
      primaryText=""
      rightIcon={<Left />}
      onClick={props.toggleNavigation}
      style={{paddingBottom: '1.5em', borderBottom: '1px solid #dddddd'}}
    />
    <ListItem
      primaryText="Home"
      leftIcon={<Home />}
      style={{paddingBottom: '1em', textAlign: 'left'}}
    />
    <ListItem
      primaryText="Inbox"
      leftIcon={<Inbox />}
      style={{paddingBottom: '1em', textAlign: 'left'}}
    />
    <ListItem
      primaryText="Starred"
      leftIcon={<Starred />}
      style={{paddingBottom: '1em', textAlign: 'left'}}
    />
    <ListItem
      primaryText="Send Mail"
      leftIcon={<Send />}
      style={{paddingBottom: '1em', textAlign: 'left'}}
    />
    <ListItem
      primaryText="Drafts"
      leftIcon={<Drafts />}
      style={{
        paddingBottom: '1em',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        textAlign: 'left'
      }}
    />

    <ListItem
      primaryText="All Mail"
      leftIcon={<AllMail />}
      style={{paddingBottom: '1em', paddingTop: '1em', textAlign: 'left'}}
    />

    <ListItem
      primaryText="Trash"
      leftIcon={<Trash />}
      style={{paddingBottom: '1em', textAlign: 'left'}}
    />

    <ListItem
      primaryText="Spam"
      leftIcon={<Spam />}
      style={{paddingBottom: '1em', textAlign: 'left'}}
    />

    <ListItem
      primaryText="Sign Out"
      leftIcon={<SignOut />}
      style={{paddingBottom: '1em', textAlign: 'left'}}
    />

  </List>
);

export default ListMenuItems;

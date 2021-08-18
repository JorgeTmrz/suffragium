import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import { MeetingRoom, Settings } from '@material-ui/icons';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MeetingRoom />
      </ListItemIcon>
      <ListItemText primary="Salas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings/>
      </ListItemIcon>
      <ListItemText primary="Ajustes" />
    </ListItem>
  </div>
);
import * as React from 'react';

import {
    Box,
    Drawer,
    CssBaseline,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
    Button,
} from '@mui/material';

import {
    WorkspacePremium as WorkspacePremiumIcon,
    Dashboard as DashboardIcon,
    MenuBook as MenuBookIcon,
    PeopleOutline as PeopleOutlineIcon,
    BorderColor as BorderColorIcon,
    Description as DescriptionIcon,
    NoteAlt as NoteAltIcon,
    Sensors as SensorsIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material/';

const DRAWER_WIDTH = 300;

export default function Sidebar() {
    return (
        <Box
            display="flex"
        >
            <CssBaseline />

            <Drawer
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                    },
                    '.Mui-selected': {
                        color: 'blue',
                        backgroundColor: 'lightBlue',
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <WorkspacePremiumIcon
                                sx={{
                                    padding: 1,
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                    borderRadius: 2,
                                    fontSize: 54,
                                    backgroundColor: 'orange',
                                    color: 'black',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="School Space"
                            sx={{
                                '& .MuiListItemText-primary': {
                                    fontSize: 28,
                                    fontWeight: 'bold',
                                    color: '#2CA4D8',
                                    margin: 2,
                                },
                            }}
                        />
                    </ListItem>

                    <Divider />

                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Courses" />
                    </ListItemButton>

                    <ListItemButton selected={true}>
                        <ListItemIcon>
                            <PeopleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Students" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <BorderColorIcon />
                        </ListItemIcon>
                        <ListItemText primary="Exams" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Results" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <NoteAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notice Board" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <SensorsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Live Classes" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItemButton>

                </List>

                <Box
                    position='absolute'
                    bottom={0}
                    left={0}
                >
                    <Avatar
                        src="/static/images/avatar/remy.jpg"
                        alt="Remy Sharp"
                        sx={{
                            width: 60,
                            height: 60,
                            margin: '8px',
                        }}
                    />
                    <Box
                        textAlign='left'
                        paddingLeft={2}
                        paddingBottom={2}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontSize: 16,
                                fontWeight: "semi-bold",
                            }}
                        >
                            Remy Sharp
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: 14,
                                fontWeight: "regular",
                                color: "#7F878A"
                            }}
                        >
                            remy.sharp@gmail.com
                        </Typography>

                        <Button
                            variant='outlined'
                            sx={{
                                marginTop: 2,
                                width: '100%',
                            }}
                        >
                            VIEW PROFILE
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </Box >
    );
}

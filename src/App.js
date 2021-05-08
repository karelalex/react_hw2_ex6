import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button, Container, Hidden, Menu, MenuItem, Toolbar} from "@material-ui/core";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClick = (value) => {
        handleClose()
        handleChange(null, value)
    }

    return (
        <div className={classes.root}>
            <Hidden smDown>
            <AppBar position="static">
               <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                    <Tab
                        value="one"
                        label="Картинка с Автобусом"
                        {...a11yProps('one')}
                    />
                    <Tab value="two" label="Картинка с троллейбусом" {...a11yProps('two')} />
                    <Tab value="three" label="Картинка с трамваем" {...a11yProps('three')} />
                </Tabs>

            </AppBar>
            </Hidden>
            <Hidden mdUp>
                <AppBar position="static">
                    <Toolbar>
                        <div>
                            <Button color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Открыть меню
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => handleMenuClick('one')}>Картинка с автобусом</MenuItem>
                                <MenuItem onClick={() => handleMenuClick('two')}>Картинка с троллейбусом</MenuItem>
                                <MenuItem onClick={() => handleMenuClick('three')}>Картинка с трамваем</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </Hidden>

            <TabPanel value={value} index="one">
                <Container maxWidth="sm">
                    <a target="_blank" href="http://radikal.ru/fp/90f93f19cdc7457d9509280ceb727652" rel="noreferrer">
                        <img src="https://i057.radikal.ru/1509/af/624b4c9df135t.jpg" alt="автобус"/>
                    </a>
                </Container>
            </TabPanel>
            <TabPanel value={value} index="two">
                <Container maxWidth="sm">
                    <a target="_blank" href="http://radikal.ru/fp/7758e8ec374a45e3a054d7dc675d0efe" rel="noreferrer">
                        <img src="https://s020.radikal.ru/i723/1410/82/59b6efab907ct.jpg" alt="троллейбус"/>
                    </a>
                </Container>
            </TabPanel>
            <TabPanel value={value} index="three">
                <Container maxWidth="sm">
                    <a target="_blank" href="http://radikal.ru/fp/6bft00n5isa1u" rel="noreferrer">
                        <img src="https://s018.radikal.ru/i505/1709/40/a6e967aa8a4dt.jpg" alt="трамвай"/>
                    </a>
                </Container>
            </TabPanel>
        </div>
    );
}

export default App;

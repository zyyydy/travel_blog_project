import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Avatar} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import memories from '../../images/memories.png';
import useStyles from './styles';
import { LOGOUT } from '../../constants/actionTypes.js';

const Navbar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({type: LOGOUT});
        navigate('/auth');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color='inherit'>
        <div className={classes.brandContainer}>
            <img className={classes.image} src={memories} alt='memories' height="60" />
            <Typography component={Link} className={classes.heading} variant='h2' align="enter">
                Travel Memories
            </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.picture}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>

                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">Signin</Button>
            )}
        </Toolbar>
        </AppBar>
    );
}

export default Navbar;


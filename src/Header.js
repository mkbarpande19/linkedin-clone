import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LinkedinIcon from './images/linkedin.png';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase';

const Header = () => {
    
    const dispatch = useDispatch();

    const user = useSelector(selectUser)

    const logoutFunction = () =>{
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className='header_left'>
                <img src={LinkedinIcon} alt=''/>
                <div className='header_search'>
                    <SearchIcon/>
                    <input placeholder="Search" type='text'/>
                </div>
            </div>
            <div className='header_right'>
                <HeaderOptions Icon = {HomeIcon} title='Home' />
                <HeaderOptions Icon = {SupervisorAccountIcon} title='My Network' />
                <HeaderOptions Icon = {BusinessCenterIcon} title = 'Jobs' />
                <HeaderOptions Icon = {ChatIcon} title = 'Messaging' />
                <HeaderOptions Icon = {NotificationsIcon} title='Notifications' />
                <HeaderOptions onClick={logoutFunction} avatar= {true} title={user?.displayName ? user?.displayName : 'user'} />
            </div>
        </div>
    )
}

export default Header

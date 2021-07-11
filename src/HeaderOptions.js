import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import "./HeaderOptions.css"

const HeaderOptions = ({ avatar, Icon, title, onClick}) => {

    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon"/>}
            {avatar &&<Avatar style ={{width:25, height:25}} className="headerOption_icon" >{user?.email[0]}</Avatar>}

            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOptions

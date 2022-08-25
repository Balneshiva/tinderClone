import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header(){
    return (
<div className='header'>
<IconButton><PersonIcon fontSize="large" className="header__icon"/></IconButton>
<img   className='header__logo' src = 'https://cdn-icons.flaticon.com/png/512/2584/premium/2584680.png?token=exp=1660848355~hmac=764ef9ba35941bbd0837930b35ac6263' alt=''/>
<IconButton><ForumIcon fontSize="large" className="header__icon"/></IconButton>

</div>
    )
}
export default Header;
import React, {Component} from 'react'
import './style.scss'
import Logo from './../../assets/graphics/logo.png'

const Header = (props) =>{
    return(
        <header data-test='headerComponent'>
            <div className='wrap'>
                <div className='logo'>
                    <img data-test='logoImg' src={Logo} alt=""/>
                </div>

            </div>
        </header>
    )
}
export default Header;

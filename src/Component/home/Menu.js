import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import logo from '../../assets/logo.svg';
import down from '../../assets/media/down.svg'
import avatar from '../../assets/media/avatar.png'
import piggy from '../../assets/media/piggy.png'

import logout from '../../assets/media/logout.png'

const Menu = () => {
    const [show, setShow] = useState(false)

    const openMenu = (event) => {
        setShow(!show)
        event.currentTarget.classList.toggle('-rotate-90');
    }

    return (
        <menu className='max-w-7xl m-auto h-[80px] py-5 px-8 relative'>
            <div className='flex justify-between  items-center  h-full'>
                <div className='h-[50px]'>
                    <img src={logo} className='h-full'/>
                </div>
                <div className='flex items-center justify-around w-[250px]'>
                    <img src={piggy} className='h-[28px]' />
                    <span className='text-[#EF8354] bold'>mjalloul</span>
                    <img src={avatar} className='h-[50px]' />
                    <div>
                        <button className='delay-100' onClick={openMenu}>
                            <img src={down} />
                        </button>
                        {
                            show && (
                               <ul className='absolute top-[80px] right-[50px]'>
                                    <li className='flex px-6 py-3 rounded' style={{boxShadow : '0px 0px 4px #474B4B'}}>
                                        <img src={logout} className='h-full mr-5' />
                                        <a>logout</a>
                                    </li>
                                </ul> 
                            )
                        }
                    </div>
                </div>
            </div>
        </menu>
    )
}

export default Menu;
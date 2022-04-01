import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/tmovie.png'
import "./header.scss"

function Header() {
    const headerNavs = [
        {
            path: '/',
            display: 'Home'
        },
        {
            path: '/movies',
            display: 'Movies'
        },
        {
            path: '/tv',
            display: 'Tv Series'
        }
    ]
    const {pathname} = useLocation();

    const active = headerNavs.findIndex(el => el.path === pathname)


  return (
    <>
        <div className="header">
            <div className="header-wrapper">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                    <Link to="/">TMovies</Link>
                </div>
                <ul className="header__nav">
                    {headerNavs.map((nav, i) => (
                        <li className={`header__nav--item ${active === i ? 'active' : ''}`} key={i}>
                            <Link to={nav.path}>{nav.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header

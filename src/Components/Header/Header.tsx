import React, { useEffect, useRef } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.scss'


interface HeadNav {
    name: string,
    path: string
}


const headData:HeadNav[] = [
    {   
        name: 'Home',
        path: '/'
    },
    { 
        name: 'tv show',
        path: '/tvshow'
    },
    { 
        name: 'game',
        path: '/'
    }
];

const Header:React.FC = ():JSX.Element => {
    const {pathname}:{pathname:string} = useLocation()
    const active = headData.findIndex((item:HeadNav, index:number):boolean => item.path === pathname)
    const headerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const shrinkHeader = () => {
            if(document.body.scrollTop  || document.documentElement.scrollTop ) {
                headerRef.current?.classList.add('shrink')
            } else {
                headerRef.current?.classList.remove('shrink')
            }
        }

        window.addEventListener<'scroll'>('scroll', shrinkHeader)
        return () => {
            window.removeEventListener<'scroll'>('scroll', shrinkHeader)
        }
    }, [])
    
  return (
    <div className="header" ref={headerRef}>
            <div className="header-logo">
                <Link to="/">
                    <h1>Movies</h1>
                </Link>
            </div>

            <ul className="header-nav">
                {
                    headData ? headData.map((item:HeadNav, index: number) => (
                        <Link to={item.path} key={index}>
                            <li className ={`header-nav_item ${active === index ? 'active': ''}`}>
                                {item.name}
                            </li>
                        </Link>
                    )): ''
                }
            </ul>
    </div>
  )
}

export default Header
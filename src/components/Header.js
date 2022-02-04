import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import routes from './../routes'
import scrollToTop from './../utils/scrollToTop'

export default function Header() {
    const [isScrolled, setScrolled] = useState(false)
    const [isMenuOpened, setMenuOpened] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => setScrolled(document.documentElement.scrollTop > 0))
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setMenuOpened(false)
            }
        })
    }, [])

    useEffect(() => {
        const handleOutsideMenuClick = (e) => {
            if (isMenuOpened && !ref.current.contains(e.target)) {
                setMenuOpened(false)
            }
        }

        document.addEventListener('click', handleOutsideMenuClick)

        return () => {
            document.removeEventListener('click', handleOutsideMenuClick)
        }
    }, [isMenuOpened])

    return (
        <>
            <div
                id="overlay"
                className={
                    'fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-20 ' +
                    (isMenuOpened ? 'visible' : 'invisible')
                }
            ></div>
            <header
                className={
                    'fixed top-0 left-0 w-full flex flex-wrap items-center justify-between gap-2 z-20 transition-colors duration-500 ' +
                    (isScrolled ? 'bg-gray-900 shadow shadow-violet-700/40' : 'bg-transparent')
                }
            >
                <a
                    href="/"
                    className={'w-64 flex items-center gap-2 z-20 ' + (isMenuOpened ? ' bg-gray-900 delay-500' : '')}
                >
                    <img src="/icon-256x256.webp" className="w-9 h-9" alt="logo" />
                    <h6 className="text-2xl">
                        <span className="text-red-500 font-medium">T</span>agihan
                        <span className="text-red-500 font-medium">K</span>u
                    </h6>
                </a>
                <ul id="navigation-menu" className={isMenuOpened ? 'show' : ''} ref={ref}>
                    {routes.map((route) => (
                        <li key={route.path}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={() => {
                                    setMenuOpened(false)
                                    scrollToTop()
                                }}
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    <button
                        id="open-menu"
                        className={isMenuOpened ? ' open' : ''}
                        onClick={() => setMenuOpened(!isMenuOpened)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    )
}

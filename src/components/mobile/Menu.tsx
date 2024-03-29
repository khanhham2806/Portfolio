import desktopLogo from '@/assets/img/logo/desktop-logo.png'
import { useEffect, useState } from 'react';


const MobileMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState<string>('')


    useEffect(() => {
        if (window.location.hash.includes("#")) {
            setActiveTab(window.location.hash.replace('#', ''))
            const section = document.querySelector(window.location.hash);
            section?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])

    const handleClickTab = (tab: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setActiveTab(tab);
        const section = document.querySelector(`#${tab}`);
        section?.scrollIntoView({ behavior: "smooth", block: "start" })
        setTimeout(() => {
            window.location.hash = tab
        }, 1000);
        setOpenMenu(false)
    }
    return (
        <>
            <div className="arlo_tm_mobile_header_wrap">
                <div className="main_wrap" >
                    <div className="logo">
                        <a href="index.html"><img src={desktopLogo} alt="mobile_logo" /></a>
                    </div>
                    <div className="arlo_tm_trigger" onClick={() => setOpenMenu(!openMenu)}>
                        <div className={openMenu ? "hamburger hamburger--collapse-r is-active" : "hamburger hamburger--collapse-r "}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_mobile_menu_wrap" style={{ overflow: 'hidden', display: openMenu ? "block" : "none", transition: '2s' }}>
                    <div className="mob_menu">
                        <ul className="anchor_nav">
                            <li>
                                <a
                                    href="#home"
                                    className={activeTab === "home" ? 'active' : ""}
                                    onClick={(e) => handleClickTab('home', e)} >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    // href="#about"
                                    className={activeTab === "about" ? 'active' : ""}
                                    onClick={(e) => handleClickTab('about', e)} >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    // href="#skills"
                                    className={activeTab === "skills" ? 'active' : ""}
                                    onClick={(e) => handleClickTab('skills', e)} >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    // href="#projects"
                                    className={activeTab === "projects" ? 'active' : ""}
                                    onClick={(e) => handleClickTab('projects', e)} >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    // href="#contact"
                                    className={activeTab === "contact" ? 'active' : ""}
                                    onClick={(e) => handleClickTab('contact', e)} >
                                    Contact
                                </a>
                            </li>
                            {/* <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
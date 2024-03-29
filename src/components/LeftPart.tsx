import desktopLogo from '@/assets/img/logo/desktop-logo.png'
import { useEffect, useState } from 'react'
interface IProps {
    hideLeftPart: boolean
    SetHideLeftPart: (value: boolean) => void
}
const LeftPart = (props: IProps) => {
    const { hideLeftPart, SetHideLeftPart } = props
    const [activeTab, setActiveTab] = useState<string>('')


    useEffect(() => {
        if (window.location.hash.includes('#')) {
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
    }
    return (
        <div className={hideLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li>
                            <a
                                // href="#home"
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
                                // href="#skills"
                                className={activeTab === "experiences" ? 'active' : ""}
                                onClick={(e) => handleClickTab('experiences', e)} >
                                Experiences
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

                    </ul>
                </div>
                <div className="leftpart_bottom">
                    <div className="social_wrap">
                        <ul>
                            <li><a href="#"><i className="xcon-facebook"></i></a></li>
                            <li><a href="#"><i className="xcon-instagram"></i></a></li>
                            <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                            <li><a href="#"><i className="xcon-youtube-play"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
                } onClick={() => { SetHideLeftPart(!hideLeftPart) }}><i className={hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left "} ></i></div>
            </div>
        </div>
    );
}

export default LeftPart;
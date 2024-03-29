import { TypeAnimation } from 'react-type-animation';
import image from '@/assets/img/hero/img.jpg'
const HomeCV = () => {

    const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const section = document.querySelector("#about");
        section?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    return (
        <>
            <div className="arlo_tm_section" id="home">
                <div className="arlo_tm_hero_header_wrap">
                    <div className="arlo_tm_universal_box_wrap">
                        <div className="bg_wrap">
                            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                            <div className="overlay_color hero"></div>
                        </div>
                        <div className="content hero">
                            <div className="inner_content">
                                <div className="image_wrap">
                                    <img src={image} alt="hero" />
                                </div>
                                <div className="name_holder">
                                    <h3> <span>Doan Van Khanh</span></h3>
                                </div>
                                <div className="text_typing">
                                    <p>I'm a
                                        &nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                "Front-End Developer",
                                                2000,
                                                "Front-End Intern",
                                                2000,
                                            ]}
                                            wrapper="strong"
                                            speed={50}
                                            // style={{ fontSize: '2em', display: 'inline-block' }}
                                            repeat={Infinity}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="arlo_tm_arrow_wrap bounce anchor">
                            <a onClick={handleScroll} href="#about"><i className="xcon-angle-double-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCV;
import image from '@/assets/img/about/image.jpg'
import myCV from '@/assets/pdf/Đoàn Văn Khánh-TTS ReactJs.pdf'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <>
            <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }}>
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Về tác giả</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.1">
                                            <img src={image} alt="550x640" />
                                            <div className="inner" data-img-url={image}
                                                style={{ backgroundImage: `url(${image})` }}
                                            ></div>
                                        </div>
                                        <div className="border layer" data-depth="0.2">
                                            <img src={image} alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Tôi là Khánh, hiện là<span className="arlo_tm_animation_text_word">
                                            &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    "Sinh viên Đại học Thủy Lợi",
                                                    1000,
                                                    "Thực tập sinh Front-End",
                                                    1000,
                                                ]}
                                                wrapper="strong"
                                                speed={50}
                                                // style={{ fontSize: '2em', display: 'inline-block' }}
                                                repeat={Infinity}
                                            /></span></h4>
                                    </div>
                                    <div className="definition">
                                        <ul style={{ listStyle: 'none' }}>
                                            <li style={{ marginBottom: 10 }}>
                                                <p>Xin chào! Tôi là <strong>Đoàn Văn Khánh</strong>, hiện đang là sinh viên năm cuối của trường Đại học Thủy Lợi.</p>
                                            </li>
                                            <li style={{ marginBottom: 10 }}>
                                                <p>Tôi đã có kinh nghiệm sử dụng các thư viện, framework cho mảng Front-end, có hiểu biết cơ bản về một số công nghệ Back-end và DevOps.</p>
                                            </li>
                                            <li style={{ marginBottom: 10 }}>
                                                <p>Hiện tại, tôi đang đi tìm cơ hội việc làm tại Hà Nội để áp dụng những kiến thức đã học vào thực tế.</p>
                                            </li>
                                            <li style={{ marginBottom: 10 }}>
                                                <p>Dưới đây là thông tin cơ bản và <strong>CV</strong> của tôi:</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Ngày sinh:</label>28/06/2001</span>
                                            </li>
                                            <li>
                                                <span><label>Địa chỉ:</label>83 Trần Duy Hưng</span>
                                            </li>
                                            <li>
                                                <span><label>Trường:</label>Đại học Thủy Lợi</span>
                                            </li>
                                            <li>
                                                <span><label>Ngành:</label>Kỹ sư Công nghệ thông tin</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <br />

                                    <a className="buttons_wrap" href={myCV} download><span>Download CV</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default About;
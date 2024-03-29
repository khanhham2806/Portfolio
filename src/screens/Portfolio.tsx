import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import PreLoader from "../components/PreLoader";
import MobileMenu from "../components/mobile/Menu";
import { FloatButton } from "antd";
import { useEffect, useState } from "react";
import useWindowDimensions from '@/hooks/useWindowDimensions'

const Portfolio = () => {
    const [hideLeftPart, SetHideLeftPart] = useState<boolean>(false);
    const { height, width } = useWindowDimensions();
    return (
        <div className="arlo_tm_wrapper_all">
            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href=""></a></span>
            </div>
            <PreLoader />

            {/* MOBILE MENU */}
            <MobileMenu />
            {/* /MOBILE MENU */}
            {/* CONTENT */}
            {/* /LEFTPART */}
            <div className="arlo_tm_content">
                {
                    width > 1040
                    &&
                    < LeftPart
                        hideLeftPart={hideLeftPart}
                        SetHideLeftPart={SetHideLeftPart}
                    />
                }
                {/* /LEFTPART */}

                {/* RIGHTPART */}
                <RightPart
                    width={width}
                    hideLeftPart={hideLeftPart}
                    SetHideLeftPart={SetHideLeftPart}
                />
                {/* /RIGHTPART */}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop className="arlo_tm_totop opened" />
            </div>
        </div >
    );
}

export default Portfolio;
import About from "components/content/About";
import HomeCV from "components/content/HomeCV";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Contact from "./content/Contact";
import Experiences from "./content/Experiences";
interface IProps {
    hideLeftPart: boolean
    SetHideLeftPart: (value: boolean) => void,
    width: number
}
const RightPart = (props: IProps) => {
    const { hideLeftPart, SetHideLeftPart, width } = props

    return (
        <div className={hideLeftPart ? "arlo_tm_rightpart opened " : width > 1040 ? "arlo_tm_rightpart" : ""}>
            <div className="rightpart_inner">
                {/* HOME */}
                <HomeCV />
                {/* HOME */}

                {/* ABOUT */}
                <About />
                {/* /ABOUT */}

                {/* SKILLS */}
                <Skills />
                {/* /SKILLS */}

                {/* /EXPERIENCES */}
                <Experiences />
                {/* /EXPERIENCES */}

                {/* PROJECTS */}
                <Projects />
                {/* /PROJECTS */}


                {/* CONTACT & FOOTER */}
                <Contact />
                {/* /CONTACT & FOOTER */}
            </div>
        </div>
    );
}

export default RightPart;
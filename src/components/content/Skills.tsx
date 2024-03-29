import react from '@/assets/img/skills/react.png'
import javascript from '@/assets/img/skills/javascript.png'
import typescript from '@/assets/img/skills/typescript.png'
import redux from '@/assets/img/skills/redux.png'
import boostrap from '@/assets/img/skills/boostrap.png'
import antd from '@/assets/img/skills/antd.png'
import node from '@/assets/img/skills/node.png'
import express from '@/assets/img/skills/express.png'
import mysql from '@/assets/img/skills/mysql.png'
import git from '@/assets/img/skills/git.png'

interface ISkills {
    id: number,
    name: string,
    imgUrl: string
}
const Skills = () => {

    const skills: ISkills[] = [
        { id: 1, name: "ReactJS", imgUrl: react },
        { id: 2, name: "JavaScript", imgUrl: javascript },
        { id: 3, name: "TypeScript", imgUrl: typescript },
        { id: 4, name: "Redux", imgUrl: redux },
        { id: 5, name: "Boostrap", imgUrl: boostrap },
        { id: 6, name: "Ant Design", imgUrl: antd },
        { id: 7, name: "NodeJS", imgUrl: node },
        { id: 8, name: "ExpressJS", imgUrl: express },
        { id: 9, name: "MySQL", imgUrl: mysql },
        { id: 10, name: "Git", imgUrl: git },
    ]

    return (<>
        <div className="arlo_tm_section" id="skills" style={{ paddingTop: 100 }}>
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Skills</h3>
                        <span>Kỹ năng</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            {skills.map((item: ISkills) => {
                                return (
                                    <li key={item.id}>
                                        <div className="inner">
                                            <div className="icon">
                                                <img className="svg" src={item.imgUrl} alt="layers" />
                                            </div>
                                            <div className="title_service">
                                                <h3>{item.name}</h3>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Skills;
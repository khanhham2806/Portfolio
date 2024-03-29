import { Modal } from "antd";
import { useState } from "react";
import portfolio from '@/assets/img/projects/portfolio.png'
import logoKsneaker from '@/assets/img/projects/KSneaker.png'
interface IProjects {
    img: string,
    id: number,
    title: string,
    shortDescription: string,
    detail: {
        frontend?: string,
        backend?: string,
        member: number,
        role: string,
        features: string,
        demo?: string,
        github: string
    }

}

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState<IProjects | null>(null)
    const dataProjects: IProjects[] = [
        {
            id: 1,
            img: logoKsneaker,
            title: "KSneaker",
            shortDescription: "Website bán giày trực tuyến",
            detail: {
                frontend: "HTML/SCSS, ReactJS, Redux Toolkit, Ant Design",
                backend: "Node.js(ExpressJS), MySQL",
                member: 1,
                role: "Developer",
                features: "CRUD, Quản lý website, Thanh toán trực tuyến qua VNPay",
                github: "https://github.com/KSneaker"
            }

        },
        {
            id: 2,
            img: portfolio,
            title: "Portfolio",
            shortDescription: "Website Portfolio",
            detail: {
                frontend: "HTML/SCSS, ReactJS, Ant Design",
                member: 1,
                role: "Developer",
                features: "Xem các thông tin cơ bản của cá nhân người sử dụng",
                demo: "",
                github: "https://github.com/KSneaker"
            }

        },
        // {
        //     id: 3,
        //     title: "KSneaker",
        //     shortDescription: "Website bán giày trực tuyến",
        //     detail: {
        //         frontend: "React, Redux Toolkit, Ant Design",
        //         backend: "Node.js(ExpressJS), MySQL",
        //         member: 1,
        //         role: "Developer",
        //         features: "CRUD, Quản lý website, Thanh toán trực tuyến qua VNPay",
        //         github: "https://github.com/KSneaker"
        //     }

        // }
    ]


    const showModal = (item: IProjects) => {
        setDataDetail(item)
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="arlo_tm_section" id="projects" style={{ paddingTop: 100 }}>
                <div className="arlo_tm_projects_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Projects</h3>
                            <span>Dự án</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {
                                    dataProjects.map((item: IProjects) => {
                                        return (
                                            <li key={item.id} onClick={() => showModal(item)}>
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img className="svg" src={item.img} alt="camera-diaphragm" />
                                                    </div>
                                                    <div className="title_service">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>{item.shortDescription}</p>
                                                    </div>
                                                    <div className="text">
                                                        <p>Xem chi tiết
                                                            <i className="xcon-angle-right"></i>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <Modal width={900} footer={null} mask={true} title={<strong style={{ color: '#E3872D', textTransform: 'uppercase', fontSize: 18 }}>Chi tiết dự án</strong>} open={isModalOpen} onCancel={handleCancel}>
                                <ul style={{ listStyle: "none", fontSize: 16 }}>
                                    <li><span><strong>Tên dự án:</strong> {dataDetail?.title}</span></li>
                                    <li><span><strong>Mô tả dự án:</strong> {dataDetail?.shortDescription}</span></li>
                                    <li><span><strong>Công nghệ sử dụng:</strong></span>
                                        <br />
                                        &nbsp;<span>&nbsp;<strong>Front-End:</strong> {dataDetail?.detail.frontend}</span>
                                        <br />
                                        &nbsp;<span>&nbsp;<strong>Back-End:</strong> {dataDetail?.detail.backend}</span>
                                    </li>
                                    <li><span><strong>Thành viên:</strong> {dataDetail?.detail.member}</span></li>
                                    <li><span><strong>Vai trò:</strong> {dataDetail?.detail.role}</span></li>
                                    <li><span><strong>Chức năng:</strong> {dataDetail?.detail.features}</span></li>
                                    <li><span><strong>Github:</strong><a href={dataDetail?.detail.github}> {dataDetail?.detail.github}</a> </span></li>
                                </ul>
                            </Modal>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

export default Projects;
interface IExperiences {
    id: number,
    companyName: string,
    start: string,
    end: string,
    position: string,
    mission: string[],
    project: string[]
}
const Experiences = () => {
    const experiences: IExperiences[] = [
        {
            id: 1,
            companyName: "Nokasoft",
            start: " 01/07/2023",
            end: "30/11/2023",
            position: "Thực tập sinh React",
            mission: ["Tìm hiểu React: Component, Prop, State...", "Làm các bài tập nhỏ và bài tập lớn"],
            project: ["Tìm kiếm với query bằng API có sẵn"]
        },
    ]
    return (
        <>
            <div className="arlo_tm_section" id="experiences" style={{ paddingTop: 100 }}>
                <div className="container">
                    <div className="arlo_tm_title_holder experiences">
                        <h3>Experiences</h3>
                        <span>Kinh nghiệm làm việc</span>
                    </div>
                </div>

                <div className="arlo_tm_footer_experiences_wrapper_all">
                    <div className="arlo_tm_experiences_wrap_all">
                        <div className="container">
                            <div className="leftbox">
                                <div className="short_info_wrap">
                                    {experiences.map((item: IExperiences) => {
                                        return (
                                            <ul key={item.id}>
                                                <h3>{item.id}.</h3>
                                                <li><p><label>Công ty:</label><span>{item.companyName}</span></p></li>
                                                <li><p><label>Thời gian:</label><span>{item.start} - {item.end}</span></p></li>
                                                <li><p><label>Vị trí:</label><span>{item.position}</span></p></li>
                                                <li><p><label>Nhiệm vụ:</label></p></li>
                                                {item.mission.map((mis) => <li><p><label>&nbsp;-</label><span>{mis}</span></p></li>)}
                                                <li><p><label>Dự án:</label></p></li>
                                                {item.project.map((pro) => <li><p><label>&nbsp;-</label><span>{pro}</span></p></li>)}
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experiences;
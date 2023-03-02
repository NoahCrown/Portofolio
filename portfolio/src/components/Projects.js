import TechnologyUsed from "./TechnologyUsed"

const Projects = () => {
    return (
        <>

        
        <h1 className="projects-title ">Projects</h1>
        <hr></hr>


        <div className="statement-nav">
                <div className=" circle red-button"></div>
                <div className=" circle yellow-button"></div>
                <div className=" circle green-button"></div>

        </div>
        <div className="projects-container">
            <div className="project-container">
                <img className="project-image" src="https://cdna.artstation.com/p/assets/images/images/057/315/372/large/putri-soekidin-899b0536-d575-4504-a5ff-c6c88569b3ef.jpg?1671283100"></img>
                <div className="project-info-container">
                <h2 className="project-name">Title</h2>
                <p className="project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips</p>
                <div className="tech-container">
                    <TechnologyUsed/>

                </div>
                <div className="project-buttons">
                    <div className="live-demo">Live Demo<i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                    <div className="view-source">View Source <i class="fa-brands fa-github fa-lg"></i></div>
                </div>
                
                </div>
                

            </div>

        </div>
        </>
    )
}

export default Projects
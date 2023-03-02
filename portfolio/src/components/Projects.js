import ProjectDisplay from "./ProjectDisplay"
const Projects = () => {
    const projectInfo = [
        {
            title: "Workout Tracker",
            img: "https://user-images.githubusercontent.com/91674419/222504313-fcad0023-39a7-4a91-b77e-ec857deff4f3.png",
            description: "Our workout tracker simplifies fitness goals with a user-friendly web app. Log workouts with ease, customize plans, view progress with graphs, and integrate with popular apps for seamless tracking.",
            techUsed: ["HTML", "CSS"],
            linkToDemo: "https//",
            linkToGithub:"https://github.com/NoahCrown/Workout-Tracker",
            
        }
    ]
    return (
        <>

        <h1 className="projects-title ">Projects</h1>
        <hr></hr>


        <div className="statement-nav">
            <div className=" circle red-button"></div>
            <div className=" circle yellow-button"></div>
            <div className=" circle green-button"></div>
        </div>
        {projectInfo.map((val) => (
            <ProjectDisplay
            title={val.title}
            img={val.img}
            desc={val.description}
            tech={val.techUsed}
            demo={val.linkToDemo}
            github={val.linkToGithub}
            />
        ))}
        
        </>
    )
}

export default Projects
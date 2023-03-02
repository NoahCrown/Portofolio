import Info from "./Info"

const About = () => {

    const informations = [

        {
            title:'Noah.currentLocation',
            info: '"San Pablo City, Laguna PH"',
            isClickable: false,

            
        },
        {
            title:'Noah.contactInfo',
            info:'[ "noahimperium@gmail.com", "LinkedIn", "GitHub" ]',
            isClickable: false,
            type: "list"

        },
        {
            title:'Noah.resume',
            info: '“charlesnoah.pdf”',
            isClickable: true,
            type: 'resume'
        },
         {
            title: "Noah.interest",
            info: '[ “self-help books”, “gym”, “programming”, “music” ]',
            isClickable: false,
            type: 'list'

        },
        {
            title: 'Noah.education',
            info:'“BS Computer Engineering - Batangas State University”',
            isClickable: false,

        },
         {
            title:'Noah.skills',
            info:'[“HTML”, “CSS”, “JavaScript”, “React, “MongoDB”, “Node”, “Java”, “Python”, “Git”, “Express”]',
            isClickable: false,

        },
        {
            title:'Noah.certifications',
            info:'“certifications.pdf”',
            isClickable: true,
            type:'certifications'
        }

    ]

    return (
        
        
        <div className="about-container">
            <div className="statement-nav">
                <div className=" circle red-button"></div>
                <div className=" circle yellow-button"></div>
                <div className=" circle green-button"></div>

            </div>
            <div className="statement-container">
            <div className="statements">
            {informations.map((item) => {
                return (
                    <Info 
                    title={item.title} 
                    info={item.info} 
                    isClickable={item.isClickable}
                    type={item.type} />
                )
            })}
            <div className="blinking-arrow-container">
                <h3 className="blinking-arrow"> {">"} </h3>

            </div>
            </div>
            </div>
            
            



        </div>
    )
}

export default About
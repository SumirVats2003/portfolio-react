

const ProjectCard = ({title, image, text, link, codelink}) => {

    function handleClick(link){
        window.open(link);
    }

    return (
        <>
        <div className="project-container" onClick={() => {handleClick(link)}}>
            <div className="img-div">
                <img src={image} />    
            </div>
            
            <div className="content">
                <h1>{title}</h1>
                <p>{text}</p>
                <button className="source-btn" onClick={() => {handleClick(codelink)}}>Source Code</button>
            </div>
           
        </div>
        </>
    )
};

export default ProjectCard;
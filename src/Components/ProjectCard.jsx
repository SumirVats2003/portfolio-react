import { Link } from "react-router-dom";

const ProjectCard = ({title, image, text, link, codelink}) => {

    return (
        <>
        <div className="project-container">
            
        
            <Link to={link} className="img-link">
                <div className="img-div">
                    <img src={image} />
                </div>
            </Link>
            
            
            
            <div className="content">
                <h1>{title}</h1>
                <p>{text}</p>
                <Link to={codelink}>
                    <button className="source-btn" onClick={() => {handleClick(codelink)}}>Source Code</button>
                </Link>
            </div>
           
        </div>
        </>
    )
};

export default ProjectCard;
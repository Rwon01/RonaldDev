
function Card({project}){

    return( 
        <div className="transition duration-300 hover:scale-105 hover:shadow-primary/40 rounded-lg shadow-[0px_0px_24px_3px] shadow-primary/10">
                    
            <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <div className="flex justify-between border-border border-b-4 ">
                    <p className=" px-5 py-6 text-lg text-primary font-bold">{project.title}</p>
                    <p className="text-left text-lg p-5 text-text-muted">{project.years}</p>
                </div>
                    <p className=" px-8 py-6 text-md text-text text-left font-mono ">{project.description}</p>
                    {project.img}
            </a>
            </div> 
        );
};


export default Card;
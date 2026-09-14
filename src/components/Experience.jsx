import projects  from "../util/projects"
import Card from "./Card"

export const lore = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repellat necessitatibus eos aspernatur et hic sequi ipsam sed? In excepturi impedit eaque odit reiciendis adipisci vel aut ipsum iste aspernatur?"  


export default function Experience(){
    console.log(projects)
    return(

        <div className="px-6 py-10 md:px-32 md:py-16"> 
            <div className="bg-linear-to-r from-bg-base to-bg-light
     border-2 border-bg-light shadow-lg shadow-highlight/15 
     h-auto m-4 p-4 rounded-lg">
     <span className="block text-center text-text text-[32px] font-bold p-6 ">Projects</span>
                <div className="py-20 px-10 grid gap-20 grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2">  
                    {
                        projects.map((project, index) => (
                            <Card project={project} key={index}/>
                        ))
                    }
                </div>
            </div>
    </div>
    )
}
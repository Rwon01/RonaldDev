
import { LucideInfo } from "lucide-react"
import {Info} from "lucide-react"

export default function About(){

    return(
        <div className="px-6 py-10 md:px-32 md:py-16">
    <div className=" bg-linear-to-r from-bg-base to-bg-light
     border-2 border-bg-light shadow-lg shadow-highlight/15 transition duration-300
    h-auto m-4 p-4 rounded-lg grid grid-cols-1 grid-rows-1 md:grid-cols-1 gap-1">
            <div className="py-20 px-10">

                
                <div className="border-border p-5 border-b-4 text-lg text-text font-bold flex gap-4">
                   <Info/>
                   <span>About</span>
                    </div>
                <p className=" p-5 text-md text-text-muted font-mono">Hi, My name is Ronald and [...] Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem porro maiores ex pariatur laboriosam, molestias ad dolores enim debitis, officia inventore consectetur ipsum, aperiam sit quibusdam mollitia iusto nisi? </p>
            
            
            </div>
        </div>
    </div>  
    )
}
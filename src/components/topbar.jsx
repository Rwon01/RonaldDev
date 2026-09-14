
import MobileNav from './MobileNav.jsx';

import sections from '../util/sections.jsx';
import { Menu, X } from 'lucide-react';


function Topbar({toggleNavbar, open, currentSection, setCurrentSection}){


    return(    
    
    <div className='p-1'>
    
        
        <div className='hidden bg-linear-to-r from-bg-base to-bg-light
     border-2 border-bg-light shadow-lg shadow-highlight/15
        h-20 m-4 p-4 rounded-lg md:flex align-middle justify-evenly'>

                <div className="mx-4 p-4 rounded-lg flex items-center justify-center transition duration-500 hover:scale-105">
                    <h1 className=" text-shadow-blue-950 text-lg  text-text font-mono hover:text-primary transition-colors duration-200">RonaldManning.dev</h1>
                </div>
            
                <div className="flex">

                    {
                        sections.map((section) => (
                        <div key={`#${section}`} className={`mx-4 p-4 rounded-full border-2 border-border-muted flex items-center justify-center transition duration-300 hover:scale-105 hover:border-border 
                        ${currentSection === section ? 'bg-primary' : 'bg-primary/30'}`}>
                        <a href={`#${section}`} onClick={() => (setCurrentSection(section))} className={`
                         text-shadow-blue-950 text-lg 
                         text-text font-mono hover:text-primary transition-colors duration-200
                         ${currentSection === section ? 'text-white hover:text-white' : ''}
                         "`}>{section}</a>
                    </div>
                        ))
                    }


                </div>

        </div>
        <div className="bg-linear-to-r from-bg-base to-bg-light
     border-2 border-bg-light shadow-lg shadow-highlight/15 h-20 m-4 p-4 rounded-lg md:hidden flex justify-center">
            
            <div className="p-auto m-auto transition-transform duration-200">
                { !open ?
                    (<Menu color='white' onClick={toggleNavbar}/>) :
                    (<X color='white' onClick={toggleNavbar}></X>)
                    }
            </div>

            <h1 className="text-shadow-blue-950 text-lg  text-text m-auto font-mono hover:text-primary transition-colors duration-200">RonaldManning.dev</h1>
        </div>
            <MobileNav open={open}/>
        
    </div>
    )
}

export default Topbar
import sections from "../util/sections"

function MobileNav({ open }) {
    return (
        <div
            className={`
                md:hidden
                absolute left-0 right-0
                bg-linear-to-r from-bg-base to-bg-light
                border-2 border-bg-light shadow-lg shadow-highlight/15
                border-bg-light rounded-lg m-4 p-4
                transition-all duration-300 ease-out
                ${open 
                    ? "opacity-100 translate-y-0 visible" 
                    : "opacity-0 -translate-y-4 invisible"
                }
            `}
        >
            {
            sections.map((section) => (
            
            <div id={`#${section}`} className='mx-4 p-4 flex items-center justify-center'>
                <a href={`#${section}`} className="text-shadow-blue-950 text-lg text-text font-mono hover:text-primary transition-colors duration-200">
                    {section}
                </a>
            </div>
            ))
            }
        </div>
    )
}

export default MobileNav
import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-5 border-l-1 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            {/* border of  margin not good fix next time */}
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[1] bg-[#1a7f5a31] py-2 ' : 'text-white'}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex items-cent justify-center gap-10 sm:flex-col">
                    <img src={projects[selectedItemIndex].image} alt="non" className='h-60 w-72 p-3 rounded' />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>

                        {/* <h1 className="text-tertiary text-xl">{projects[selectedItemIndex].description}</h1> */}

                        <p className='text-white'>{projects[selectedItemIndex].description}</p>
                        {/* <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nisi blanditiis officia non totam soluta aspernatur nihil animi odio saepe? Repudiandae rem labore natus distinctio doloremque enim quasi? Expedita, dolorem.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
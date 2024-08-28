import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


function Courses() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { courses } = portfolioData;
    return (
        <div>
            <SectionTitle title="Courses" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-5 border-l-1 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {courses.map((course, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            {/* border of  margin not good fix next time */}
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[1] bg-[#1a7f5a31] py-2 ' : 'text-white'}`}>{course.title}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex items-cent justify-center gap-10 sm:flex-col">

                    <div className="flex flex-col gap-5">
                        <h1 className="text-secondary text-xl">{courses[selectedItemIndex].title}</h1>

                        {/* <h1 className="text-tertiary text-xl">{projects[selectedItemIndex].description}</h1> */}

                        <p className='text-white'>{courses[selectedItemIndex].description}</p>
                        {/* <p className='text-white'>{courses.description}</p> */}
                    </div>
                    <img src={courses[selectedItemIndex].image} alt="non" className='h-65 w-80 p-3 rounded' />
                </div>
            </div>
        </div>
    )
}

export default Courses
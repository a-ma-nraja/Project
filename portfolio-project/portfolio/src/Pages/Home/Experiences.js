import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;
    return (
        <div>
            <SectionTitle title="Experience" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-5 border-l-1 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experiences.map((experience, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            {/* border of margin not good fix next time */}
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[1] bg-[#1a7f5a31] py-2 ' : 'text-white'}`}>{experience.period}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-secondary text-xl">{experiences[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nisi blanditiis officia non totam soluta aspernatur nihil animi odio saepe? Repudiandae rem labore natus distinctio doloremque enim quasi? Expedita, dolorem.</p>
                </div>
            </div>

        </div>
    );
}

export default Experiences
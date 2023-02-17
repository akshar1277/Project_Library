import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import ImageSlider from './ImageSlider';







const Team = () => {
    return (
        <>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-24 pb-0">
                <div className='container'>
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <ImageSlider></ImageSlider>
                </div>


            </section>

        </>
    )
}

export default Team
import React from 'react'
import './ClientSlider.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { useState, useRef } from 'react';

const data = [
    {
        id: 1,
        name: 'Ronny Jofra',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/237/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 2,
        name: 'Ronny Jofra',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/238/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 3,
        name: 'Ronny Jofra',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/239/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 4,
        name: 'Ronny Jofra',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/240/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 5,
        name: 'Ronny Jofra',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/241/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 6,
        name: 'Ronny Jofra',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/242/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 7,
        name: 'Ronny Jofra',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/243/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },

];


const ClientSlider = () => {

    const [position, setPosition] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = () => {
        const newPosition = containerRef.current.scrollLeft;
        setPosition(newPosition);
    }

    return (
        <>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-24 pb-0">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">

                        {
                            data.map((item, index) => (
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                                        <img
                                            src={item.image}
                                            className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800 m-auto m-auto"
                                            alt=""
                                        />

                                        <div className="content mt-4">
                                            <a
                                                href="#"
                                                className="text-lg font-medium hover:text-indigo-600 block"
                                            >
                                                {item.name}
                                            </a>
                                            <span className="text-slate-400 block">{item.position}</span>

                                            <p className="text-slate-400 mt-4">
                                                If the distribution of letters and 'words' is random
                                            </p>

                                            <ul className="list-none mt-4">
                                                {item.links.map((link, index) => (
                                                    <li className="inline" key={index}>
                                                        <a
                                                            href={link.url}
                                                            className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            {link.icon}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>



        </>
    )
}

export default ClientSlider


{/* <div key={item.id} className="p-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <img
                            className="h-40 w-40 rounded-full mx-auto"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="text-center mt-4">
                            <p className="text-lg font-semibold">{item.name}</p>
                        </div>
                    </div>
                </div> */}


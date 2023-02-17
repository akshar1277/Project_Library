import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';

const data = [
    {
        id: 1,
        name: 'Prof Maitrik Shah',
        position: 'Project Guide',
        image: "https://picsum.photos/id/237/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 2,
        name: 'Akshar Bhalani',
        position: 'Full-Stack Developer',
        image: "https://picsum.photos/id/238/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 3,
        name: 'Harshal Kahar',
        position: 'Front-end Developer',
        image: "https://picsum.photos/id/239/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 4,
        name: 'Karika Patel',
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
        name: 'Viren Goswami',
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
        name: 'Juhi Sodha',
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
        name: 'Ishika Patel',
        position: 'C.E.O.',
        image: "https://picsum.photos/id/243/200/200",
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },

];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <button className="slick-prev slick-arrow">Previous</button>,
        nextArrow: <button className="slick-next slick-arrow">Next</button>
    };

    return (
        <Slider {...settings}>





            {data.map((item) => {
                return <div key={item.id} className="lg:col-span-3 md:col-span-6 p-1 ">
                    <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                        <img
                            src={item.image}
                            className="h-32 w-32 rounded-full shadow-md dark:shadow-gray-800 m-auto m-auto"
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
                                    <li className="inline mx-1" key={index}>
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
            }
            )}


        </Slider>
    );
};

export default ImageSlider;

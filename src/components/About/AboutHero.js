import React from 'react'

const Hero = () => {
    return (
        <>

            <div>

                <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/company/aboutus.jpg')] bg-no-repeat bg-center bg-cover">
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center mt-10">
                            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>

                            <p className="text-slate-300 text-lg max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>


                </section>
                <div className="relative">
                    <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                        <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Hero
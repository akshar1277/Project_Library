import React from 'react'
import { BsPlayCircle } from 'react-icons/bs';

const DepartmentsVideo = () => {
    return (
        <>


            <div className="container md:mt-24 mt-16 mb-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <img src="assets/images/company/about2.png" className="mx-auto" alt="" />
                            <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                    className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">

                                    <BsPlayCircle className='text-5xl inline-flex items-center justify-center '></BsPlayCircle>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="ltr:lg:ml-4 rtl:lg:mr-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are the largest <br /> Business expert </h4>
                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                            <a href="" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Buy Now <i className="mdi mdi-chevron-right align-middle"></i></a>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DepartmentsVideo
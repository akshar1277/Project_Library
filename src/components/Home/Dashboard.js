import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 pb-8 text-center pt-14 dashboardheading">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Welcome to the project dashboard.</h3>

                <p className="text-slate-400 w-2/3 mx-auto"> This platform provides an overview of all projects completed by our seniors, along with the ability to filter by language and project type. The dashboard also includes interactive chart graphs to help visualize project data, as well as a barchart to display project statistics by academic year. Use the filters to explore project details and gain insights into the skills and knowledge of our graduates.</p>
            </div>

            <div className="dashboard">

                <div className="boxes">
                    <div className="box">

                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-gray-600'>IDP</div>
                                <div className='text-3xl'>15</div>
                            </div>
                            <div className='m-4'>

                                icon here


                            </div>
                        </div>


                    </div>
                    <div className="box">

                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-gray-600'>UDP</div>
                                <div className='text-3xl'>25</div>
                            </div>
                            <div className='m-4'>

                                icon here
                            </div>
                        </div>


                    </div>
                    <div className="box">

                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-gray-600'>Project Type</div>
                                <div className='text-3xl'>15</div>
                            </div>
                            <div className='m-4'>

                                icon here


                            </div>
                        </div>


                    </div>

                </div>

                <div className="pie">
                    <div className="chart">Pie Chart (Language wise)</div>
                    <div className="chart">Pie chart (Project Area wise)</div>
                </div>
                <div className="bar">
                    <div className="bar-chart">I am bar chart</div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
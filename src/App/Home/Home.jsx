import React, { useState } from 'react'
import terminal from '../../assets/images/terminal2.png'
import feature1 from '../../assets/images/feature1.png'
import graph from '../../assets/images/graph.png'
const Home = () => {
    const steps = [
        {
            step:"Register your Spend.In account."
        },
        {
            step:"Fill in the list of your business expenses."
        },
        {
            step:"Done, let’s continue the work."
        }
    ]
    const features = [
        {
            title:'Automatic Invoice Payment',
            image:feature1,
            description:"No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!",
        },
        {
            title:'Automatic Invoice Payment',
            image:feature1,
            description:"Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!",
        },
        {
            title:'Use of multi-card payments',
            image:feature1,
            description:"Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!",
        },
    ]
    const comparison = [{
        name:'with spend',
        heading:"Track Business Expenses until its Milisecond",
        points:[
            "Analyze your business cost easily with group transaction thorugh tagging feature.",
            "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.",
            "Arrange your business expenses by date, name, etc.,  with just one click."
        ],
    },
    {
        name:'without spend',
        heading:"Track Business Expenses till hours",
        points:[
            "Analyze your business cost easily with group transaction thorugh tagging feature.",
            "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.",
            "Arrange your business expenses by date, name, etc.,  with just one click."
        ],
    }

    ]
    const [switchIdxComparison,setSwitchIdxComparison] = useState(0)
  return (
    <>
    <div className='bg-[#1A202C] flex items-center justify-center h-screen relative overflow-hidden'>
        <span className='lg:block md:block sm:hidden after:absolute after:w-[400px] after:h-[400px] after:bg-white/10 after:-top-40 after:-right-40 after:rounded-full before:absolute before:w-[360px] before:h-[360px] before:bg-[#1A202C] before:z-50 before: before:-top-36  before:-right-36 before:rounded-full'></span>
        <span className='lg:block md:block sm:hidden after:absolute after:w-[400px] after:h-[400px] after:bg-white/10 after:-bottom-40 after:-left-40 after:rounded-full before:absolute before:w-[360px] before:h-[360px] before:bg-[#1A202C] before:z-50 before: before:-bottom-36  before:-left-36 before:rounded-full'></span>
        <div className='w-full h-full flex justify-start mt-60 lg:items-center md:items-center sm:items-start flex-col space-y-6 z-50 p-4'>
            <p className='font-medium lg:text-[3rem] md:text-[3rem] sm:text-[2rem] leading-tight lg:text-center md:text-center sm:text-left text-white'>All your business <br /> expenses in one place.</p>
            <p className='font-light text-sm lg:text-center md:text-center sm:text-left leading-6 text-white'>Your one-stop finance empower platform. <br />Manage all your business expenses with our supafast app. </p>
            <span className='inline-flex items-center space-x-4'>
            <span><button className='font-medium text-[12px] px-4 py-2 text-white bg-violet-500 rounded-full'>Get Demo</button></span>
            <span><button className='font-medium text-[12px] px-4 py-2 text-white bg-black/20 rounded-full'>Get Demo</button></span>
            </span>
        </div>
        <span className='block absolute lg:w-2/3 md:w-2/3 z-[500] sm:w-5/6 bg-gray-200 h-full rounded-2xl lg:-bottom-[450px] md:-bottom-[450px] sm:-bottom-[400px]'></span>
    </div>

    {/* section 2 */}
    <div className='h-full bg-white lg:space-y-20 md:space-y-16 sm:space-y-8 lg:px-20 md:px-4 sm:px-4 py-12'>
        <div className='w-full h-full space-y-6'>
            <span className='block'><p className='font-medium text-sm text-violet-500'>WHY USE SPEND.IN</p></span>
            <span className='inline-flex items-start lg:flex-row md:flex-row sm:flex-col lg:space-x-4 md:space-x-4 sm:space-x-0 space-y-4'>
            <span className='block flex-1'><p className='font-semibold text-[2rem] leading-[40px]'>Easy, Simple, <br />Affordable</p></span>
            <span className='flex-1'><p className='font-medium text-[14px] text-gray-500/50'>Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.</p></span>
            </span>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:px-20 md:px-4 sm:px-12'>
            {features.map((item,idx)=>{
                return(
                    <div className='space-y-4'>
                        <span className='block h-80 relative rounded-xl ring-1 ring-black/5 overflow-hidden bg-gray-100'>
                            <span className='absolute overflow-hidden before:shimmer before:blur-xl before:opacity-30 -bottom-20 w-80 h-80 -left-20 rounded-xl bg-white'></span>
                            {/* <img src={item.image} className='absolute -bottom-20 w-80 h-80 -left-20' alt="" /> */}
                        </span>
                        <p className='font-semibold text-sm text-black'>{item.title}</p>
                        <p className='font-medium text-gray-400 text-[12px]'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>

    {/* section 3 */}
    <section className='h-full bg-[#1A202C] lg:space-y-20 md:space-y-16 sm:space-y-8 lg:px-20 md:px-4 sm:px-4 py-12'>
        <div className='w-full h-full flex lg:items-center md:items-center sm:items-start justify-center flex-col lg:space-y-6 md:space-y-6 sm:space-y-4'>
            <span className='block'><p className='font-medium text-sm text-violet-500'>WHY USE SPEND.IN</p></span>
            <span className='block flex-1'><p className='font-semibold text-[2rem] text-white leading-[40px]'>Few Easy Steps and Done</p></span>
            <span className='block flex-1 lg:w-1/2 md:w-1/2 sm:w-full'><p className='font-light lg:text-center md:text-center text-start text-sm text-gray-400 leading-[20px]'>In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.</p></span>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:px-20 md:px-4 sm:px-12'>
            {steps.map((item,idx)=>{
                return(
                    <div className='space-y-4 flex items-center justify-center flex-col'>
                        <span className='block h-60 w-60 relative rounded-xl ring-1 ring-black/5 bg-gray-100'>
                            <span className='ring-4 ring-[#1A202C] absolute z-[500] font-semibold text-[12px] -top-2 -left-2 rounded-full w-8 h-8 bg-violet-500 text-white flex items-center justify-center '>{idx + 1}</span>
                            {/* <img src={item.image} className='absolute -bottom-20 w-80 h-80 -left-20' alt="" /> */}
                        </span>
                        <p className='font-semibold text-center text-[12px] w-2/3 text-white'>{item.step}</p>
                    </div>
                )
            })}
        </div>
        <span className='inline-flex w-full items-center justify-center space-x-4'>
            <span><button className='font-medium text-[12px] px-4 py-2 text-white bg-violet-500 rounded-full'>Get a free Demo</button></span>
            <span><button className='font-medium text-[12px] px-4 py-2 text-white bg-black/20 rounded-full'>See Pricing</button></span>
        </span>
    </section>

    <section className='h-full bg-white lg:space-y-20 md:space-y-16 sm:space-y-8 lg:px-20 md:px-4 sm:px-4 py-12'>
        <div className='w-full h-full flex items-start justify-center flex-col lg:space-y-6 md:space-y-6 sm:space-y-4'>
            <span className='block'><p className='font-medium text-sm text-violet-500'>INCREASE PRODUCTIVITY</p></span>
            <span className='block flex-1'><p className='font-semibold text-[2rem] lg:w-2/3 md:w-2/3 sm:w-full leading-[40px]'>Reduce Time in Doing Manual Work Managing Expenses</p></span>
            <span className='inline-flex items-center justify-start bg-black/20 rounded-full gap-4'>
            <span onClick={()=>{setSwitchIdxComparison(0)}}><button className={`${switchIdxComparison == 0 ? 'bg-violet-500' : 'bg-transparent'} font-medium text-[12px] px-4 py-2 duration-200 text-white bg-violet-500 rounded-full`}>With Spend.in</button></span>
            <span onClick={()=>{setSwitchIdxComparison(1)}}><button className={`font-medium text-[12px] px-4 py-2 duration-200 text-white rounded-full ${switchIdxComparison == 1 ? 'bg-violet-500' : ''}`}>Without Spend.in</button></span>
        </span>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-between  space-y-8'>
            <div className='flex items-center justify-start relative'>
                {comparison.map((item,idx)=>{
                    return(
                        <div className={`space-y-4 duration-700 ${switchIdxComparison == idx     ? 'visible static opacity-100' : 'invisible absolute opacity-0'}`}>
                            <p className='font-semibold text-sm'>{item.heading}</p>
                            <ul className='space-y-8'>
                            {item.points.map((item,idx)=>{
                                return(
                                    <li className='flex items-start space-x-2'>
                                    <i className='bx bx-check text-white p-[2px] rounded-full bg-green-300'></i>
                                    <p className='font-medium text-[12px]'>{item}</p>
                                    </li>
                                )
                            })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <span className='w-full h-80 flex overflow-hidden items-center justify-center'>
                <div className='lg:w-2/3 md:w-2/3 sm:w-full flex h-full rounded-xl overflow-x-auto'>
                    <img src={graph} className='w-full h-full object-cover' alt="" />
                </div>
            </span>
        </div>
        </div>
        
    </section>
    </>
  )
}

export default Home

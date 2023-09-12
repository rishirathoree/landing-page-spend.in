import React from 'react'
import sofa1 from '../../../../assets/images/sofa1.jpg'
import sofa2 from '../../../../assets/images/sofa2.jpg'
import sofa3 from '../../../../assets/images/sofa3.jpg'
const Swiper = () => {
  const bannerContent = [
    {name:'Premium Sofas',image:sofa1,description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aperiam laudantium voluptatem molestias perferendis deleniti!'},
    {name:'Budget Sofas',image:sofa2,description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aperiam laudantium voluptatem molestias perferendis deleniti!'},
    {name:'Premium Sofas',image:sofa3,description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aperiam laudantium voluptatem molestias perferendis deleniti!'}
  ]
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  min-h-screen max-h-full'>
      {bannerContent.map((item,idx)=>{
        return(
          <>
          <div className='h-full w-full relative lg:p-0 md:p-8 sm:p-8 '>
            
          <img src={item.image} className='w-full h-full object-cover lg:rounded-none md:rounded-xl sm:rounded-xl ' alt="" />
          </div>
          </>
        )
      })}
    </div>
    </>
  )
}

export default Swiper

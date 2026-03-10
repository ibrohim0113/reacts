import React from 'react'
import "../index.css"
import log1 from "../image/Group 1536.svg"
import log2 from "../image/Group 1536 (1).svg"
const Map = () => {
    return (
        <div>
            <div className=' pl-[38px] xl:pl-0 xl:flex items-center justify-center gap-[500px]'>
                <h1 className='pt-[80px] xl:pt-[0px] font-bold text-[28px] text-[#494B44]  xl:text-[40px]'>География Поставок</h1>
                <div className='xl:pt-0 pt-[15px]'>
                    <p>Доставляем грузы по <span>. . . . . . . . . . . <br /></span>  всему миру в Европу,<span>. . . . . . . . . . . <br /></span> Азию, Америку, Египет<span>. . . . . . . . . . . <br /></span></p>
                </div>
            </div>
            <img className='xl:hidden mt-[17px]' src={log1} alt="" />
            <div className='hidden xl:block'> 
                <div className='mt-[17px] flex justify-center'>
                    <img src={log2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Map

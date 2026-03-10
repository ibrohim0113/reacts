import React from 'react'
import "../index.css"
import log1 from "../image/Rectangle 47 (2).svg"
const Flex = () => {
    return (
        <div className='hidden xl:block'>
            <div className=' flex mt-[80px] justify-center'>
                <img className=' w-full absolute z-[-1]' src={log1} alt="" />
                <div>
                    <h1 className='text-center font-black text-[40px] text-white pt-[89px]'>Сотрудничество</h1>
                    <p className='pt-[15px] w-[454px] text-white text-center'>Предприятие постоянно потребляет различный ассортимент продуктов и услуг</p>
                    <div className='flex justify-center mt-[40px]'>
                        <button className='w-[179px] h-[50px] bg-[#0E9E2F] text-white text-[14px]'>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flex

import React from 'react'
import "../index.css"
import log1 from "../image/unsplash_6tAIO3pxde4.svg"
import log2 from "../image/Group (2).svg"
const Spisoc = () => {
    let data = [
        {
            id: "1",
            img: log1,
            name: "Вышли на международный рынок",
            about: "Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
            date: "25.12.2021"
        },
        {
            id: "2",
            img: log1,
            name: "Встреча с европепйскими коллегами",
            about: "Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
            date: "25.12.2021"
        },
        {
            id: "3",
            img: log1,
            name: "Новое оборудование",
            about: "Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
            date: "25.12.2021"
        },
    ]
    return (
        <div className='mb-[130px] '>
            <div className='hidden xl:block'>
                <div className='items-center flex justify-center gap-[890px]'>
                    <h1 className='font-bold text-[40px]'>Новости</h1>
                    <p className='text-[24px] text-[#0E9E2F]'>Читать все новости</p>
                </div>
            </div>
            <div className=' xl:hidden flex justify-end mr-[20px]'>
                <img className='' src={log2} alt="" />
            </div>
            <div className='flex flex-wrap gap-[33px] mt-[29px] xl:mt-[50px] xl:gap-[100px] justify-center'>
                {data.map((el) => {
                    return <div className='w-[360px]'>
                        <img src={el.img} alt="" />
                        <h1 className='text-[24px] text-[#494B44] pt-[20px]' >{el.name}</h1>
                        <p className='text-[#92938F] pt-[10px]'>{el.about}</p>
                        <p className='text-[#0E9E2F] pt-[16px]'>{el.date}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Spisoc

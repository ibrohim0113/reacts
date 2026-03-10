import React from 'react'
import "../index.css"
import log1 from "../image/unsplash_zbD8iz5ZJk4.svg"
import log2 from "../image/unsplash_2yNMsw-A2eI.svg"
import log3 from "../image/unsplash_zbD8iz5ZJk4 (1).svg"
import log4 from "../image/unsplash_2yNMsw-A2eI (1).svg"
import log5 from "../image/unsplash_2yNMsw-A2eI (2).svg"
import log6 from "../image/unsplash_2yNMsw-A2eI (3).svg"
const BigProduct = () => {
    let data = [
        {
            id: "1",
            name: "Лесоуправление  и заготовка",
            about: "Рубка леса осуществляется на арендованных участках, обеспечивая бесперебойную поставку сырья для производства и для продажи. Расчетная лесосека – 320 000 м3. Общая площадь арендованного леса – 306 000 Га - cертифицирована по стандартам международной добровольной лесной сертификации (FSC).",
            img1: `${log3}`,
            img2: `${log4}`,
            img3: `${log5}`,
            img4: `${log6}`,
        },
        {
            id: "1",
            name: "Лесоуправление  и заготовка",
            about: "Рубка леса осуществляется на арендованных участках, обеспечивая бесперебойную поставку сырья для производства и для продажи. Расчетная лесосека – 320 000 м3. Общая площадь арендованного леса – 306 000 Га - cертифицирована по стандартам международной добровольной лесной сертификации (FSC).",
            img1: `${log3}`,
            img2: `${log4}`,
            img3: `${log5}`,
            img4: `${log6}`,
        },
        {
            id: "1",
            name: "Лесоуправление  и заготовка",
            about: "Рубка леса осуществляется на арендованных участках, обеспечивая бесперебойную поставку сырья для производства и для продажи. Расчетная лесосека – 320 000 м3. Общая площадь арендованного леса – 306 000 Га - cертифицирована по стандартам международной добровольной лесной сертификации (FSC).",
            img1: `${log3}`,
            img2: `${log4}`,
            img3: `${log5}`,
            img4: `${log6}`,
        },
    ]
    return (
        <div>
            <h1 className='pt-[75px] xl:pt-[134px] font-bold text-[28px] xl:text-[40px] text-center'><span className='xl:hidden'>Наша</span> основная деятельность</h1>
            <div className='flex justify-center mt-[45px] xl:hidden'>
                <button className='text-start pl-[30px] rounded-[2px] font-medium bg-[#0E9E2F] text-white w-[300px] h-[50px]'>
                    Наше производство
                </button>
            </div>
            <div className='xl:hidden flex justify-center mt-[50px] mb-[26px]'>
                <div className='flex flex-col w-[300px] gap-[20px] '>
                    <img src={log1} alt="" />
                    <img src={log2} alt="" />
                </div>
            </div>
            <p className='xl:hidden font-medium text-[24px] text-[#494B44] pl-[40px]'>Оборудование</p>
            <p className='pb-[80px] xl:hidden text-[15px] text-[#92938F] pt-[12px] w-[320px] ml-[40px]'>Оборудование предприятия поставляется
                от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции. Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.</p>
            {data.map((el) => {
                return <div className=' hidden xl:block mb-[135px]'>
                    <div className='flex items-center justify-center gap-[30px] mt-[74px] ' >
                        <div className='w-[370px]'>
                            <p className='text-[30px] font-medium text-[#0E9E2F]'>{el.name}</p>
                            <p className=' pt-[30px] text-[#92938F]'>{el.about}</p>
                        </div>
                        <img className='w-[760px]' src={el.img1} alt="" />
                    </div>
                    <div className='flex mt-[30px] justify-center gap-[41px]'>
                        <img className='w-[361px] h-[186px]' src={el.img2} alt="" />
                        <img className='w-[361px] h-[186px]' src={el.img3} alt="" />
                        <img className='w-[361px] h-[186px]' src={el.img4} alt="" />
                    </div>
                </div>
            })}
        </div >
    )
}

export default BigProduct

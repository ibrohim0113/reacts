import React from 'react'
import log1 from "../image/Group 1530.svg"
import log2 from "../image/unsplash_Xp9hn1HzzDk.svg"
const Product = () => {
    let data = [
        {
            id: "1",
            img: `${log2}`,
            name: "Латофлекс",
            about: "Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0"
        },
        {
            id: "1",
            img: `${log2}`,
            name: "Латофлекс",
            about: "Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0"
        },
        {
            id: "1",
            img: `${log2}`,
            name: "Латофлекс",
            about: "Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0"
        },
        {
            id: "1",
            img: `${log2}`,
            name: "Латофлекс",
            about: "Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0"
        },
    ]
    return (
        <div className='bg-[#686868] pb-[100px]'>
            <h1 className='font-bold text-[28px] text-white pt-[99px] pl-[38px] w-[100px] xl:ml-[120px] xl:w-[460px] xl:text-[40px]'>Продукция завода</h1>
            <p className='text-[#D2D2D2] w-[320px] pl-[38px] pt-[15px] xl:ml-[120px] xl:w-[466px] '>Ниже представлен список нашей продукции. Получить дополнительную информацию, а также оставить заявку можно по контактам коммерческой службы.</p>
            <img className='xl:hidden ml-[220px] mt-[20px]' src={log1} alt="" />
            <div className='flex xl:flex-wrap mt-[48px] w-[369px] xl:w-[1300px] overflow-x-scroll xl:overscroll justify-start xl:ml-[150px]  gap-[70px]'>
                {data.map((el) => {
                    return <div class="w-[360px] h-[413px] bg-[#535353] pl-[28px] 
[clip-path:polygon(0_0,85%_0,100%_15%,100%_100%,0_100%)]">
                        <div className='flex justify-center pl-[0px] ml-[0px] mt-[12px]'>
                            <img src={el.img} alt="" />
                        </div>
                        <p className='text-[24px] text-white'>{el.name}</p>
                        <p className='text-[#D2D2D2] w-[285px] pt-[14px]'>{el.about}
                        </p>
                        <button className='font-medium text-[14px] text-white bg-[#0E9E2F] w-[200px] h-[46px] mt-[23px]'>Подробнее о товаре</button>
                    </div>
                })}


            </div>
        </div>
    )
}

export default Product

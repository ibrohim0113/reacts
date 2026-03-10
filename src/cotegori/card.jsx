import React from 'react'
import log1 from "../image/Вход-1 1.svg"
import log3 from "../image/Вход-1 1 (1).svg"
import log2 from "../image/Group 1501.svg"
const Card = () => {
    return (
        <div>
            <div className='hidden xl:block'>
                <div className=' flex justify-center mb-[100px]'>
                    <div className='flex justify-center gap-[40px] items-center w-[1160px] h-[622px]'>
                        <img className=' w-[1160px] h-[622px] absolute z-[-1]' src={log1} alt="" />
                        <div>
                            <h1 className='w-[412px] font-bold text-[40px] text-white'>Стабильные поставки за счет собственной лесозаготовки</h1>
                            <div className='flex  items-center gap-[15px] mt-[42px]'>
                                <img src={log2} alt="" />
                                <p className='font-medium text-[12px] text-[#0E9E2F]'>Смотреть видео о заводе</p>
                            </div>
                            <p className='pt-[58px] text-[#D2D2D2] w-[297px]'>Гибкий подход к условиям сотрудничества – скидки, различные формы оплаты, условия поставки.. </p>
                        </div>
                        <div className='pl-[45px] mt-[60px] [clip-path:polygon(0_0,85%_0,100%_15%,100%_100%,0_100%)] bg-[#0E9E2F] w-[500px] h-[563px]'>
                            <h4 className='font-medium text-[24px] pt-[50px] text-white'>Сертификат FSС	</h4>
                            <p className='pt-[14px] text-[#F2F2F2] w-[332px]'>Сертифицированная продукция (FSC 100%) по системе Forest Stewardship Council®.</p>
                            <h4 className='font-medium text-[24px] pt-[50px] text-white'>Соответствие регламенту EUTR	</h4>
                            <p className='pt-[14px] text-[#F2F2F2] w-[332px]'>(European Union Timber Regulation) – предоставляем необходимый пакт документов. </p>
                            <h4 className='font-medium text-[24px] pt-[50px] text-white'>Сертификат CARB / CARB2		</h4>
                            <p className='pt-[14px] text-[#F2F2F2] w-[332px]'>Для поставок в США и другие страны, запрашивающие сертификацию на соответствие производства и продукции стандартам по выбросам формальдегида.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:hidden '>
                <img className='z-[-1] absolute w-[375px] ' src={log3} alt="" />
                <div className='flex text-center justify-center'>
                    <h1 className='pt-[40px] w-[312px] font-medium text-[28px]  text-white'>Стабильные поставки за счет собственной лесозаготовки</h1>
                </div>
                <div className='ml-[38px] flex  items-center gap-[15px] mt-[42px]'>
                    <img src={log2} alt="" />
                    <p className='font-medium text-[12px] text-[#0E9E2F]'>Смотреть видео о заводе</p>
                </div>
                <p className='pl-[38px] pt-[58px] text-[#D2D2D2] w-[297px]'>Гибкий подход к условиям сотрудничества – скидки, различные формы оплаты, условия поставки.. </p>
                <div className='pl-[55px] [clip-path:polygon(0_0,85%_0,100%_15%,100%_100%,0_100%)] bg-[#0E9E2F] h-[639px] mt-[44px]'>
                    <h4 className='font-medium text-[18px] pt-[50px] text-white'>Сертификат FSС	</h4>
                    <p className='text-[15px] pt-[14px] text-[#F2F2F2] w-[252px]'>Сертифицированная продукция (FSC 100%) по системе Forest Stewardship Council®.</p>
                    <h4 className='font-medium text-[18px] pt-[50px] text-white'>Соответствие регламенту EUTR	</h4>
                    <p className='text-[15px] pt-[14px] text-[#F2F2F2] w-[252px]'>(European Union Timber Regulation) – предоставляем необходимый пакт документов. </p>
                    <h4 className='font-medium text-[18px] pt-[50px] text-white'>Сертификат CARB / CARB2		</h4>
                    <p className='text-[15px] pt-[14px] text-[#F2F2F2] w-[252px]'>Для поставок в США и другие страны, запрашивающие сертификацию на соответствие производства и продукции стандартам по выбросам формальдегида.</p>
                </div>
            </div>
        </div>
    )
}

export default Card

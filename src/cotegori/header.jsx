import React from 'react'
import "../index.css"
import log2 from "../image/Rectangle 47.svg"
import log1 from "../image/Ресурс 1 1 (1).svg"
import log3 from "../image/Group 1324 (1).svg"
import log4 from "../image/Group 1323.svg"
import log5 from "../image/Group 1384.svg"
import log6 from "../image/WhatsApp_white.svg"
import log7 from "../image/Group 1534.svg"
import log8 from "../image/Rectangle 47 (1).svg"
const Header = () => {
    return (
        <div>   
            <div className='hidden xl:block xl:flex xl:gap-[257px] xl:items-center xl:justify-center xl:pt-[20px] xl:pb-[20px]    '>
                <div className=' xl:flex xl:items-center xl:gap-[30px]'>
                    <img className='' src={log1} alt="Logo" />
                    <p className='xl:font-medium xl:text-[12px] xl:text-white'>Продукция</p>
                    <p className='xl:font-medium xl:text-[12px] xl:text-white'>Поставщикам</p>
                    <p className='xl:font-medium xl:text-[12px] xl:text-white'>Вакансии</p>
                    <p className='xl:font-medium xl:text-[12px] xl:text-white'>Новости</p>
                    <p className='xl:font-medium xl:text-[12px] xl:text-white'>контакты</p>
                </div>
                <div className='hidden xl:block xl:flex xl:gap-[30px]'>
                    <img src={log3} alt="Logo 2" />
                    <img src={log4} alt="Logo 3" />
                    <img src={log5} alt="Logo 4" />
                </div>
            </div>
            <div className='hidden xl:block pb-[100px]'>
                <h1 className='xl:font-medium xl:text-[60px] xl:text-white xl:pt-[30px] xl:w-[898px] xl:pl-[60px]'>Группа компаний Гремяchinский ДОК</h1>
                <p className='xl:text-[18px] xl:text-[#D2D2D2] xl:w-[622px] xl:pl-[60px] xl:pt-[22px]'>Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов</p>
                <div className='xl:flex xl:items-center xl:justify-between xl:ml-[60px] xl:mr-[60px] xl:mt-[70px]'>
                    <button className='xl:w-[180px] xl:h-[50px] xl:bg-[#0E9E2F] xl:text-white xl:text-[14px] xl:font-medium'>Связаться с нами</button>
                    <img className='xl:w-[65px] xl:h-[65px]' src={log6} alt="" />
                </div>
            </div>
            <img className=' hidden xl:block xl:absolute xl:top-0 xl:z-[-1] xl:w-full ' src={log2} alt="Logo 2" />
            <div className=' xl:hidden'>
                <img className='w-full' src={log7} alt="" />
                <div>
                    <h1 className='font-medium text-[28px] text-white text-center pt-[149px]'>Группа компаний Гремячинский ДОК</h1>
                    <p className='text-[#E8E8E8] p-[27px] pl-[40px]  text-center'>Современное предприятие
                        по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов</p>
                    <div className='flex justify-center'>
                        <button className='w-[300px] h-[50px] bg-[#0E9E2F] text-[14px] text-white font-medium mt-[30px]'>Связаться с нами</button>
                    </div>
                    <img className='w-[49px] h-[49px] mt-[80px] ml-[300px]' src={log6} alt="" />
                </div>
                <img className='w-full absolute top-0 z-[-1]' src={log8} alt="" />
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import "../index.css"
import log1 from "../image/tod-s-lgnEI45raTI-unsplash.svg"
import log2 from "../image/Vector 3.svg"
import log3 from "../image/Group 1513.svg"
import log4 from "../image/iPhone 13 mini - 2.svg"
const Login = () => {
    return (
        <div>
            <div className='hidden xl:block'>
                <img className='w-full absolute z-[-1] ' src={log1} alt="" />
                <div className='flex justify-center items-center pt-[60px] gap-[80px]'>
                    <div>
                        <h1 className='font-bold text-[40px] w-[506px] text-white'>Свяжитесь с нашим специалистом</h1>
                        <p className='text-[#D2D2D2] w-[471px] pt-[25px]'>Заинтерисованы в сотрудничестве  или остались вопросы? Заполните форму обратной связи и наши менеджеры обязательно свяжутся с вами</p>
                        <div className='gap-[40px] flex mt-[64px]'>
                            <div className='flex items-center gap-[18px]'>
                                <div className='flex justify-center items-center w-[39px] h-[39px] rounded-[50%] border-2 border-[#0E9E2F]'>
                                    <img src={log2} alt="" />
                                </div>
                                <p className='text-[12px] text-[#D2D2D2] '>Ответим втечение <br />
                                    15 минут, в рабочее <br />
                                    время</p>
                            </div>
                            <div className='flex items-center gap-[18px]'>
                                <div className='flex justify-center items-center w-[39px] h-[39px] rounded-[50%] border-2 border-[#0E9E2F]'>
                                    <img src={log2} alt="" />
                                </div>
                                <p className='text-[12px] text-[#D2D2D2] '>Ответим втечение <br />
                                    15 минут, в рабочее <br />
                                    время</p>
                            </div>
                        </div>
                    </div>
                    <img src={log3} alt="" />
                </div>
            </div>
            <img className='xl:hidden' src={log4} alt="" />
        </div>
    )
}

export default Login

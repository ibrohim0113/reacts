import React from 'react'
import "../index.css"
import log1 from "../image/Group 1521.svg"
const Footer = () => {
    return (
        <div className=' bg-[#313131] pb-[126px] xl:pb-[26px]'>
            <div className='xl:gap-[152px] xl:flex  bg-[#313131]  pt-[70px] pl-[38px] xl:pl-[60px]'>

                <div>
                    <img className='' src={log1} alt="" />
                    <p className='text-[14px] text-white w-[289px] pt-[22px] xl:pt-[36ox] '>Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов</p>
                </div>
                <div>
                    <p className='text-[#787878] pt-[51px] xl:pt-0'>Реализация</p>
                    <p className='text-[14px] text-white pt-[20px]'>Латофлекс</p>
                    <p className='text-[14px] text-white pt-[10px]'>Фанера</p>
                    <p className='text-[14px] text-white pt-[10px]'>Брикеты топливные RUF</p>
                    <p className='text-[14px] text-white pt-[10px]'>Пиломатериалы</p>
                    <p className='text-[14px] text-white pt-[10px]'>Кроватные основания</p>
                    <p className='text-[14px] text-white pt-[10px]'>Уголь</p>
                    <p className='text-[14px] text-white pt-[10px]'>Саженцы</p>
                    <p className='text-[14px] text-white pt-[10px]'>Отходы производства</p>
                </div>
                <div>
                    <p className='text-[#787878] pt-[51px] xl:pt-0'>О компании</p>
                    <p className='text-[14px] text-white pt-[20px]'>Продукция</p>
                    <p className='text-[14px] text-white pt-[10px]'>Деятельность</p>
                    <p className='text-[14px] text-white pt-[10px]'>Приемущества</p>
                    <p className='text-[14px] text-white pt-[10px]'>Поставщикам</p>
                    <p className='text-[14px] text-white pt-[10px]'>Вакансии</p>
                    <p className='text-[14px] text-white pt-[10px]'>Новости</p>
                </div>
                <div>
                    <p className='text-[#787878] pt-[51px] xl:pt-0'>Отдел закупок</p>
                    <p className='text-[14px] text-white pt-[10px]'>+7 (342) 502-16-91</p>
                    <p className='text-[14px] text-white pt-[10px]'>purchase@grdok.ru</p>
                    <p className='text-[#787878] pt-[51px] xl:pt-[30px]'>Отдел закупок</p>
                    <p className='text-[14px] text-white pt-[10px]'>sale@grdok.ru</p>
                    <p className='text-[14px] text-white pt-[10px]'>@gremdok_bot</p>
                    <p className='text-[14px] text-white pt-[10px]'>Мелкий опт, «карандаши»,  </p>
                    <p className='text-[14px] text-white pt-[5px]'> «пятаки» : +7 (342) 502-16-91  </p>
                </div>
                <div>
                    <p className='text-[#787878] pt-[51px] xl:pt-0'>Контакты</p>
                    <p className='text-[14px] text-white pt-[20px]'>info@grdok.ru</p>
                    <p className='text-[#787878] pt-[51px] xl:pt-0'>Адрес</p>
                    <p className='text-[14px] text-white pt-[20px] w-[200px]'>Гремячинск Пермский край
                        618270 РФ, г. Гремячинск, ул. Коммунистическая, д.1</p>
                </div>
            </div>
            <div className='pl-[38px] mt-[62px] xl:mt-[92px] xl:flex justify-center gap-[100px] items-center'>
                <h1 className='text-[#787878]'>© 2022 ГремДок, все права защищены</h1>
                <p className='text-[#787878] xl:pt-0 pt-[10px]'>Политика конфиденциальности</p>
            </div>
        </div>
    )
}

export default Footer

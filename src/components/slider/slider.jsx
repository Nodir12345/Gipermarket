import React from 'react'
import "./slider.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
export const Slider = () => {
  return (
    <div className='slider_box'><Splide aria-label="My Favorite Images">
    <SplideSlide>
      <div>
        <img src="https://zon.uz/_next/image?url=https%3A%2F%2Fapi.zon.uz%2Ffiles%2Fbanners-pc%2Fimage%2Fiphone-14.webp&w=1920&q=100" alt="" />
      </div>
    </SplideSlide>
    <SplideSlide>
    <img className='btnimg' src="https://zon.uz/_next/image?url=https%3A%2F%2Fapi.zon.uz%2Ffiles%2Fbanners-pc%2Fimage%2Fvivo.webp&w=1920&q=100" alt="" />

    </SplideSlide>
    <SplideSlide> 
       <img className='btnimg' src="https://zon.uz/_next/image?url=https%3A%2F%2Fapi.zon.uz%2Ffiles%2Fbanners-pc%2Ffree-delivery-pc.webp&w=1920&q=100" alt="" />
    </SplideSlide>
    <SplideSlide>

    <img className='btnimg' src="https://zon.uz/_next/image?url=https%3A%2F%2Fapi.zon.uz%2Ffiles%2Fbanners-pc%2Fimage%2Ftovari-dlya-kuxni.webp&w=1920&q=100" alt="" />


    </SplideSlide>
    <SplideSlide>
    <img className='btnimg' src="https://zon.uz/_next/image?url=https%3A%2F%2Fapi.zon.uz%2Ffiles%2Fbanners-pc%2Fimage%2Fnoutbuki-i-kompyuteri.webp&w=1920&q=100" alt="" />

    </SplideSlide>
    <SplideSlide>
    <img className='btnimg' src="https://storage2.alifshop.uz/files?k1=58850598-8a35-487d-8e46-a70d6b2bcd44&k2=a2f81ef9963c99effad6ee58adc4df2f05290f8c6a214771f552638560c60bc3e8b9081038bae5ffcc6335cd8077f34ddd32befc14f65ca7cf215adfd1780a2c" alt="" />
    </SplideSlide>

    <SplideSlide>
      <img className='btnimg' src="https://storage2.alifshop.uz/files?k1=b813d38d-91fa-4a9b-932d-a6f65498328c&k2=9efc0e6fcea6cc877adf8408d3314ec38e75d75b0d0a8ae6bf4d927f9a510e5d4036c6384eb6d947f62ea18699a4ee056c86975958aac6f05537856b4aefb7cb" alt="" />
    </SplideSlide>
    <SplideSlide>
      <img className='btnimg' src="https://storage2.alifshop.uz/files?k1=2e8dc571-bff6-40bf-965b-4d5efa96e7fc&k2=13304248dfb18a92ad3626c40d9249d2c5c2054a3999284bfe5956b97d6a07faea4c644c3fa06a4df00f268117214eb57bdb86594d42e754dde91b44b1e31c44" alt="" />
    </SplideSlide>
    <SplideSlide>
      <img className='btnimg' src="https://storage2.alifshop.uz/files?k1=a3412866-19cc-4cee-a3d7-fbd37d2236bc&k2=231b0ce76fdc7f28869c455182864f04c212fbcdefb6f64df2add3a9391fc69b96c81fd1d8a47ed67fb3883fcb996707a464f6ab38a6b50a95431549bf69f036" alt="" />
    </SplideSlide>
  </Splide></div>
  )
}

'use client';
import React from 'react';

// styles
import styles from './HomeCarousel.module.scss';
import Image from 'next/image';

// lib
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

export default function HomeCarousel() {
  const logos = [
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648032/caisse-des-depots-et-consignations.svg',
      name: 'Caisse des dépôts et consignations',
    },
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648280/dga-logo.svg',
      name: 'DGA',
    },
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648202/chu-logo.jpg',
      name: 'CHU',
    },
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648340/logo-cpam.jpg ',
      name: 'CPAM',
    },
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648238/Credit_Agricole.png',
      name: 'Crédit Agricole',
    },
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648373/republique-francaise-ministere-de-la-defense.svg',
      name: 'Ministère de la Défense',
    },
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648429/sogerma.jpg',
      name: 'Sogerma',
    },
    {
      url: 'https://res.cloudinary.com/dqszntd5j/image/upload/v1594648029/sud_ouest.png',
      name: 'Sud Ouest',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        cssMode={true}
      >
        {logos.map((logo) => {
          return (
            <SwiperSlide key={logo.name} className={styles.slide}>
              <Image
                src={logo.url}
                alt={`Nos clients - ${logo.name}`}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: 'auto', height: '100px' }}
                className={styles.logo}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

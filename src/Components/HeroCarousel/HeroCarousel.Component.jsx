import React, { useState } from "react";
import HeroSlider from 'react-slick';
import { NextArrow, nextArrow, PrevArrow } from "./Arrows.Component";
const HeroCarousel =() =>{
    const [images, setImages] = useState([  {
        adult: false,
        bacckdrop_path: "/goku-super-saiyan-god-movie-fighting-beerus.jpg",
        genre_ids: [16,878, 28],
        id: 610150,
        original_language: 'ja',
        original_title: "",
        overview:
        "the red ribbon army, an evil organization that was once destroyed by goku in the past, has been reformed by a group of people.",
        popularity: 5953.989,
        poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbXyU.jpg",
        release_date: "2022-06-11",
        title: "Dragon Ball Super",
        Video: false,
        vote_average: 8,
        vote_count: 1426,
    },
    {
        adult: false,
        bacckdrop_path: "/goku-super-saiyan-god-movie-fighting-beerus.jpg",
        genre_ids: [16,878, 28],
        id: 610150,
        original_language: 'ja',
        original_title: "",
        overview:
        "the red ribbon army, an evil organization that was once destroyed by goku in the past, has been reformed by a group of people.",
        popularity: 5953.989,
        poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbXyU.jpg",
        release_date: "2022-06-11",
        title: "Dragon Ball Super",
        Video: false,
        vote_average: 8,
        vote_count: 1426,
    }
]);

    const settingsLG = {
        arrows: true,
        slidesToShow: 1,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    }

    const settings = {
        arrows: true,
        slidesToShow: 1,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    }
    return (
        <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map((images, index) => (
                    <div className="w-full h-56 md:h-80 py-3" key={index}>
                        <img src="https://i.pinimg.com/originals/00/e2/95/00e29564c516d92302735127236a33b0.jpg" alt="Hero Banner" className="w-full h-full rounded-md object-cover" />
                    </div>
                ))}
            </HeroSlider>
        </div>
        <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {images.map((images, index) => (
                    <div className="w-full h-96 px-2 py-3" key = {index}>
                        <img src="https://i.pinimg.com/originals/00/e2/95/00e29564c516d92302735127236a33b0.jpg" alt="Hero Banner" className="w-full h-full rounded-md object-cover"/>
                    </div>
                ))}
            </HeroSlider>
        </div>
        </>
    );
};

export default HeroCarousel;
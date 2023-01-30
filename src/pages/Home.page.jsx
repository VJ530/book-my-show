import React, {useEffect, useState} from "react";
import axios from "axios";

import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import DefaultLayoutHoc from "../layouts/Default.layout"; 

const HomePage =() => {

    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [premierMovies, setpremierMovies] = useState([])
    const [onlineStreamEvents, setonlineStreamEvents] = useState([])

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setRecommendedMovies(getPopularMovies.data.results);
        };
    requestPopularMovies();
},[]);
    useEffect(() => {
        const requestTopratedMovies = async () => {
            const getTopratedMovies = await axios.get("/movie/top_rated");
            setpremierMovies(getTopratedMovies.data.results);
        };
    requestTopratedMovies();
},[]);
    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setonlineStreamEvents(getUpcomingMovies.data.results);
        };
    requestUpcomingMovies();
},[]);
    return (
        <>
        <HeroCarousel />
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of Entertainment</h1>
            <EntertainmentCardSlider />
        </div>

        <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSlider
            title = "Recommended Movies"
            subTitle = "List of recommended movies"
            posters = {recommendedMovies}
            isDark = {false}
            />
        </div>

        <div className="bg-premier-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://i.ibb.co/D4NpGcz/Screenshot-2023-01-29-132722.png" className="w-full h-full" alt="Rupay" />
                </div>
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <PosterSlider title="Premiers"
                subject = "Brand new releases every Friday"
                posters = {premierMovies}
                isDark={true} />
            </div>
        </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider title="Online Stream Events"
                subject = ""
                posters = {onlineStreamEvents}
                isDark={false} />
        </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage)
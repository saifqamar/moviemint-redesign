import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import MarketCard from "./marketCard";
import { useState } from "react";
import StoryCards from "./storyCards";
import prodLogo from "../images/prodHouseLogo.jpeg"

export default function ProductionHouseBody(props){
    const [isCatOpen, setIsCatOpen] = useState(false);
    const [isGenOpen, setIsGenOpen] = useState(false);
    const [isMoviesOpen, setMoviesOpen] = useState(true);
    const [isfeedOpen, setfeedOpen] = useState(false);

    const CatOpen = () =>{
        setIsCatOpen(!isCatOpen)
    }

    const GenOpen = () =>{
        setIsGenOpen(!isGenOpen)
    }

    const openMovies = () => {
        setMoviesOpen(true);
        setfeedOpen(false);
    }

    const feedOpen = ()=>{
        setMoviesOpen(false);
        setfeedOpen(true);
    }

    return(
        <div className="whole-body relative mx-6 lg:mx-20">
            <div className="profile-pic absolute -top-12 w-20 lg:w-28 h-20 lg:h-28 rounded-full overflow-hidden border border-m-Primary">
                <img className="w-full h-full" src={prodLogo} alt="production house image" />
            </div>
            <div className="pt-12 lg:pt-28">
                <div className="uppersec">
                    <div className="pro-det w-full flex flex-row">
                        <div className="head grow">
                            <h1 className="text-mtext text-3xl font-bold mb-2 ">{props.userName}</h1>
                            <p className="text-grayText text-sm font-bold mb-1">{props.wNum}</p>
                            <p className="bio text-grayText text-sm font-regular mb-1">{props.bio}</p>
                        </div>

                        <div className="social-media flex flex-row gap-x-2">
                            <FaLinkedin className="w-6 md:w-12  h-8 md:h-8 text-mtext hover:text-m-Primary hover:cursor-pointer" />
                            <FaInstagram className="w-6 md:w-12 h-8 md:h-8 text-mtext hover:text-m-Primary hover:cursor-pointer" />
                        </div>

                    </div>
                </div>

                <div className="bar mt-4 flex justify-between gap-x-3">
                    <div className="left flex flex-row gap-x-4 items-center">
                        <p onClick={openMovies} className={isMoviesOpen ? "movies-btn cursor-pointer font-medium text-m-Primary" : "movies-btn cursor-pointer font-medium text-grayText hover:text-m-Primary "}>Movies</p>
                        <p onClick={feedOpen} className={isfeedOpen ? "feed-btn cursor-pointer font-medium text-m-Primary" : "feed-btn cursor-pointer font-medium text-grayText hover:text-m-Primary "}>Feed</p>
                    </div>
                    <div className="right">
                        <form className="">   
                            <label for="default-search" className="mb-2 text-sm font-medium  sr-only text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm rounded-lg bg-neutral-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                            </div>
                        </form>
                    </div>  
                </div>
                <hr className="text-grayText border-neutral-800" />

                <div className={isMoviesOpen ? "whole-movie-sec mt-10  mb-12 lg:mb-28" : "whole-movie-sec hidden mt-10  mb-12 lg:mb-28"}>
                    <div className="mainmarket relative h-full flex flex-col lg:flex-row">
                        {/* Side bar */}
                        <div className="relative side-bar lg:sticky lg:top-10 lg:overflow-y-scroll w-full lg:w-1/6  lg:h-[80vh] rounded-xl border border-mgray bg-neutral-900 ">
                            
                            <h1 className="text-grayText text-base font-semibold px-4 py-3">Filters   |</h1>

                            <div className="absolute left-20 top-[8%] all-filters flex flex-row lg:flex-col lg:static">
                                {/* Filter One */}
                                <div className="flex flex-col items-center ">
                                    {/* Filter button */}
                                    <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                        onClick={CatOpen}
                                        className={isCatOpen ? "text-white flex justify-between w-full lg:text-xl bg-black hover:bg-black focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center" : "text-white flex justify-between w-full lg:text-xl bg-primary-700 hover:bg-black focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center"}
                                        type="button">
                                        Category
                                        <svg className={isCatOpen ? "w-4 h-4 ml-2 rotate-180" : "w-4 h-4 ml-2"} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>

                                    
                                    <div id="dropdown" className={isCatOpen ? "z-10 w-full p-3 bg-crdGray rounded-lg shadow":"z-10 hidden w-full p-3 bg-crdGray rounded-lg shadow"}>
                                        {/* <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                        Category
                                        </h6> */}
                                        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                        <li className="flex items-center">
                                            <input id="apple" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Apple (56)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="fitbit" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:hover:bg-crdGray dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Fitbit (56)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="dell" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Dell (56)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="asus" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Asus (97)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="logitech" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="logitech" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Logitech (97)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="msi" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="msi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            MSI (97)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="bosch" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="bosch" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Bosch (176)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="sony" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="sony" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Sony (234)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="samsung" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="samsung" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Samsung (76)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="canon" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="canon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Canon (49)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="microsoft" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="microsoft" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Microsoft (45)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="razor" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Razor (49)
                                            </label>
                                        </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Filter two */}
                                <div className="flex flex-col items-center ">
                                    {/* Filter button */}
                                    <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                        onClick={GenOpen}
                                        className={isGenOpen ? "text-white flex justify-between w-full lg:text-xl bg-black hover:bg-black focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center" : "text-white flex justify-between w-full lg:text-xl bg-primary-700 hover:bg-black focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center"}
                                        type="button">
                                        Genre
                                        <svg className={isGenOpen ? "w-4 h-4 ml-2 rotate-180" : "w-4 h-4 ml-2"} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>

                                    
                                    <div id="dropdown" className={isGenOpen ? "z-10 w-full p-3 bg-crdGray rounded-lg shadow":"z-10 hidden w-full p-3 bg-crdGray rounded-lg shadow"}>
                                        {/* <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                        Category
                                        </h6> */}
                                        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                        <li className="flex items-center">
                                            <input id="apple" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Apple (56)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="fitbit" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:hover:bg-crdGray dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Fitbit (56)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="dell" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Dell (56)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="asus" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Asus (97)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="logitech" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="logitech" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Logitech (97)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="msi" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="msi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            MSI (97)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="bosch" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="bosch" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Bosch (176)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="sony" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="sony" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Sony (234)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="samsung" type="checkbox" value="" checked
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="samsung" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Samsung (76)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="canon" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="canon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Canon (49)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="microsoft" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="microsoft" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Microsoft (45)
                                            </label>
                                        </li>

                                        <li className="flex items-center">
                                            <input id="razor" type="checkbox" value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                            <label for="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Razor (49)
                                            </label>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main className=" mt-6 lg:w-5/6 lg:mt-0 lg:pl-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
                            {props.movies.map((movie) => (
                            
                                <MarketCard title={movie.title} price={movie.price} shares={movie.shares} image={movie.imageUrl} uploader={movie.uploader} />
                            ))}
                            {/* <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard /> */}
                        </main>
                    </div>
                </div>

                <div className={isfeedOpen ? "feed mt-10 mb-14 lg:mb-28 block" : 'feed mt-10 mb-14 lg:mb-28 hidden'}>
                    <StoryCards />
                </div>
            </div>

        </div>
    )
}

import { Link } from "react-router-dom";
import Header from "../components/header";
import { HashLink } from 'react-router-hash-link';


export default function LoginPage(){
    return(
        <>
        <Header />
        <section className="bg-m-background">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold  text-mtext">
                    <img className="w-12 h-12 mr-2" src="https://moviemint.net/static/media/logo.c8743748796ba7fefd35.png" alt="logo" />
                    MovieMint    
                </a>
                <div className="w-full bg-crdGray rounded-lg shadow  border md:mt-0 sm:max-w-md xl:p-0 border-neutral-800">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-mtext">Your email</label>
                                <input type="email" name="email" id="email" className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-neutral-800 border border-neutral-700  placeholder-grayText  text-white" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-mtext">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-neutral-800  border-neutral-700  placeholder-gray-400  text-white   " required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    {/* <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border  roundedfocus:ring-3 focus:ring-primary-300  bg-gray-700  border-gray-600  focus:ring-primary-600  ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="  text-gray-300">Remember me</label>
                                    </div> */}
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline text-mtext">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-m-background bg-m-Primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light   text-gray-400">
                                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline hover:text-m-Primary  text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
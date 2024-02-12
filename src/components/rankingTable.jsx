import React from "react";


export default function RankingTable(){
    return(
        <div className="whole mt-8 md:mt-20">
            <div className="head-sec px-4 w-full flex flex-row justify-between mb-5">
                <h1 className="text-mtext text-3xl font-bold ">Projects</h1>
                <a href="" className="py-2 text-mtext bg-mgray rounded-xl md:px-5">see all</a>
            </div>
            <div className=" px-4 w-full text-mtext">
                <table className="w-full table-auto sm:table-fixed">
                    <tr className="text-left text-sm text-aw-color border-b border-none border-aw-color ">
                        <th className="p-4 text-grayText">Name</th>
                        <th className="p-4 hidden md:table-cell text-grayText">Movie</th>
                        <th className="p-4 hidden md:table-cell text-grayText">Awards</th>
                        <th className="p-4 hidden md:table-cell text-grayText">Ctegories</th>
                        <th className="p-4 hidden md:table-cell text-grayText">Release Date</th>
                    </tr>

                    <tr  className="text-left text-lg hover:bg-crdGray border-y border-none border-aw-color">
                        <td className="py-5 px-4">
                            <div className="user flex gap-x-3">
                                <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                                <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                            </div>
                        </td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Studio</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Web Design , Web Development , UX/</td>

                        <td className="py-5 px-4 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                    </tr>

                    <tr  className="text-left text-lg hover:bg-crdGray border-y border-none border-aw-color">
                        <td className="py-5 px-4">
                            <div className="user flex gap-x-3">
                                <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                                <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                            </div>
                        </td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Studio</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Web Design , Web Development , UX/</td>

                        <td className="py-5 px-4 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                    </tr>

                    <tr  className="text-left text-lg hover:bg-crdGray border-y border-none border-aw-color">
                        <td className="py-5 px-4">
                            <div className="user flex gap-x-3">
                                <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                                <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                            </div>
                        </td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Studio</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Web Design , Web Development , UX/</td>

                        <td className="py-5 px-4 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                    </tr>

                    <tr  className="text-left text-lg hover:bg-crdGray border-y border-none border-aw-color">
                        <td className="py-5 px-4">
                            <div className="user flex gap-x-3">
                                <img className="w-8 h-8 rounded-[50px]" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/2224726/659d88f683ae8636087718.png" alt="" />
                                <a href="" className="border-b-2 border-neutral-700 font-bold">bufugu.com <small className="text-[8px]">INT</small></a>
                            </div>
                        </td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Studio</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">24</td>
                        <td className="py-5 px-4 hidden md:table-cell text-base">Web Design , Web Development , UX/</td>

                        <td className="py-5 px-4 w-full flex justify-end"><button className="px-5 text-sm border border-aw-color h-10 rounded-lg hover:bg-black hover:text-white">View</button></td>
                    </tr>

                </table> 
            </div>
        </div>
    )
}
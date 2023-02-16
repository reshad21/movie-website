import React, { useContext } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import download from '../../../assets/play-removebg-preview.png';
import { AuthContext } from '../../../Pages/Context/AuthProvider';

const ShowSearch = () => {

    const { data } = useContext(AuthContext);
    console.log(data);
    return (
        <div className='lg:px-24 md:px-4 px-2 py-7 mt-12 dark:bg-[#3d4451] dark:text-white'>
            <h1>ShowSearch result:{data?.length}</h1>
            <div className='grid grid-cols-5 gap-4'>
                {
                    data?.map(item => {
                        return (
                            <div className="">
                                <div className="shadow-xl border-2 rounded-[6px] border-slate-700 overflow-hidden">
                                    <div className='relative'>
                                        <figure className='rounded-t-[12px] ml-[-1px]'>
                                            <img src={download} alt="Shoes" className='w-full h-[300px] object-cover' />
                                        </figure>

                                        <Link to={`/movie/${item?.show?.id}`}>
                                            <div className="info p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition text-slate-200 bg-[#0000005b]">
                                                {/* <span>Rating: {item?.rating?.average} <FaStar className='star inline-block mb-1 text-yellow-600' /></span> */}
                                                {/* <p>popularity: {popular?.popularity}</p> */}
                                                <p>Release Date: {item?.premiered}</p>
                                                <FaYoutube className='inline-block text-7xl ml-20 mt-9 text-rose-500' />
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                                <p className='pl-2 pt-1 font-extralight text-[14px] text-slate-600 dark:text-slate-200'>{item?.name}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ShowSearch;
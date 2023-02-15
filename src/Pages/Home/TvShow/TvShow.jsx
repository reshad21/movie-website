import React from 'react';
import { Link } from 'react-router-dom';
import download from '../../../assets/play-removebg-preview.png';
const TvShow = ({ tvshow }) => {
    return (
        <div>
            <div className="shadow-xl border-2 rounded-[6px] border-slate-700 overflow-hidden">
                <div className='relative'>
                    <figure className='rounded-t-[12px] ml-[-1px]'>
                        <img src={
                            (tvshow?.backdrop_path)
                                ?
                                `https://image.tmdb.org/t/p/w500` + tvshow?.backdrop_path
                                :
                                download

                        } alt="Shoes" className='w-full brightness-50 h-[300px] object-cover' />
                    </figure>

                    <Link to={`/movie/${tvshow?.id}`}>
                        <div className="info p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition text-slate-200">
                            <span>Rating: {tvshow?.vote_average}</span>
                            <p>popularity: {tvshow?.popularity}</p>
                            <p>First Air Date: {tvshow?.first_air_date}</p>
                        </div>
                    </Link>

                </div>
            </div>
            <p className='pl-2 pt-1 font-extralight text-[14px] text-slate-300'>{tvshow?.original_name}</p>
        </div>
    );
};

export default TvShow;
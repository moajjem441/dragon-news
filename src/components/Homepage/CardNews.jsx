import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaRegEye, FaStar } from 'react-icons/fa';

const CardNews = ({ news }) => {
    console.log(news)
    return (
        <div class="card bg-base-100  shadow-sm py-2 p-2">
            {/* author info */}
            <div className='bg-gray-500 flex justify-between items-center p-2'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <Image className=' rounded-full'
                            src={news.author?.img}
                            alt={news.author?.name || "author_image"}
                            width={30}
                            height={30}>
                        </Image>
                    </div>


                    <div>
                        <h2 className='text-black '>{news.author.name}</h2>
                        <p className='text-gray-300 '>{format(new Date(), "yyyy-MM-dd")}</p>
                    </div>
                </div>
                <div className='flex text-2xl gap-2 text-gray-300'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>


            {/* card body  */}
            <div class="card-body">
                <h2 class="card-title"> {news.title}</h2>
            </div>
            <figure>
                <Image
                    src={news?.image_url}
                    alt={news.author?.name || "news_image"}
                    width={200}
                    height={200}
                ></Image>
            </figure>
            <p className='my-2 p-2'>{news.details}</p>

            {/* footer fo card  */}

            <div className='flex justify-between items-center'>
                <div className='flex gap-2 justify-between items-center'>
                    <div className='flex gap-2 justify-between items-center'>
                        <div><FaStar className='text-orange-300' /></div>
                        <p>{news.rating.number}</p>
                    </div>
                    <div className='flex gap-2 justify-between items-center'>
                        <div><FaRegEye /></div>
                        <p>{news.total_view}</p>
                    </div>
                </div>

                <div>
                    <Link href={`/news/${news._id}`}><button
                        className='btn btn-active'>See more</button></Link>
                </div>
            </div>
        </div>

    );
};

export default CardNews;
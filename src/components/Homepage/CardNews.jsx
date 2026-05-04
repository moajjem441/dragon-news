import Image from 'next/image';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const CardNews = ({ news }) => {
    console.log(news)
    return (
            <div class="card bg-base-100  shadow-sm">
       {/* author info */}
                  <div className='bg-gray-200'>
                    <div><Image></Image></div>
                    <div>
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                  </div>
            {/* card body  */}
                <div class="card-body">
                    <h2 class="card-title"> {news.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>

                {/* footer fo card  */}
            </div>
       
    );
};

export default CardNews;
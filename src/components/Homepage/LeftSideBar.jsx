import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({allCategories,activeId}) => {
    return (
        <div>
             <h2 className="font-bold my-2">All Categories</h2>

         <ul>
           {
            allCategories.news_category.map(category=><li className={`${activeId == category.category_id ? "bg-amber-800" : "bg-gray-500" } mb-2 text-center p-2`} 
                key={category.category_id}
            >
                
                <Link href={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
          }
         </ul>
            
        </div>
    );
};

export default LeftSideBar;
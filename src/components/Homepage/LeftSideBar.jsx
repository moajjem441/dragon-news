import React from 'react';

const LeftSideBar = ({allCategories}) => {
    return (
        <div>
             <h2 className="font-bold my-2">All Categories</h2>

         <ul>
           {
            allCategories.news_category.map(category=><li className="bg-gray-500 mb-2 text-center p-2" key={category.category_id}
            >{category.category_name}</li>)
          }
         </ul>
            
        </div>
    );
};

export default LeftSideBar;
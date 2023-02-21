import React from 'react'

const Categories = () => {
    const cat1 = require('../images/cat1.png');
    const cat2 = require('../images/cat2.png');
    const cat3 = require('../images/cat3.png');
    const cat4 = require('../images/cat4.png');
    const cat5 = require('../images/cat5.png');
    const cat6 = require('../images/cat6.png');
    const cat7 = require('../images/cat7.png');
    const cat8 = require('../images/cat8.png');
    const cat9 = require('../images/cat9.png');
    const cat10 = require('../images/cat10.png');
    const cat11 = require('../images/cat11.png');
    const data = [
        {
            cateImg: cat1,
            cateName: "Fashion",
        },
        {
            cateImg: cat2,
            cateName: "Electronic",
        },
        {
            cateImg: cat3,
            cateName: "Cars",
        },
        {
            cateImg: cat4,
            cateName: "Home & Garden",
        },
        {
            cateImg: cat5,
            cateName: "Gifts",
        },
        {
            cateImg: cat6,
            cateName: "Music",
        },
        {
            cateImg: cat7,
            cateName: "Health & Beauty",
        },
        {
            cateImg: cat8,
            cateName: "Pets",
        },
        {
            cateImg: cat9,
            cateName: "Baby Toys",
        },
        {
            cateImg: cat10,
            cateName: "Groceries",
        },
        {
            cateImg: cat11,
            cateName: "Books",
        },
    ]
  return (
    <>
    <div className='category'>
        {/* display categories */}
      {data.map((value,index) =>{
        return (
            <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default Categories

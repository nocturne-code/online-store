import React from "react"

const Wrapper = () => {
  const data = [
    {
      cover: "fa fa-truck icon-circle",
      title: "Worldwide Delivery",
      decs: "We offer worldwide delivery on all of our products!",
    },
    {
      cover: "fa fa-id-card-o icon-circle",
      title: "Safe Payment",
      decs: "We use secure payment methods to ensure your information is safe and secure.",
    },
    {
      cover: "fa fa-shield icon-circle",
      title: "Shop With Confidence",
      decs: "Shopping on a secure website gives you the confidence to make the best purchase.",
    },
    {
      cover: "fa fa-headphones icon-circle",
      title: "24/7 Support",
      decs: "Our website provides 24/7 support to ensure your needs are met at any time.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {/* display data */}
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img'>
                  {/* display image */}
                <i className={val.cover}></i>
                </div>
                {/* display title and description */}
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
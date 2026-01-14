import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RecentProduct = () => {
  const products = [
    { image: './coffeemug.png', price: 43 },
    { image: './coffeemug.png', price: 43 },
    { image: './coffeemug.png', price: 43 },
    { image: './coffeemug.png', price: 43 },
  ];

  return (
    <>
      <section className="bg-[#fcf4ee] w-full py-10 flex flex-col items-center justify-center">
        <h1 className="text-center tracking-wider text-[#43290c] text-3xl font-bold">
          Explore Recent Products
        </h1>
        <p className="text-center mt-4 text-sm text-[#8b7965]">
          Showcases the latest additions, and updates to our collections
        </p>

        {/* Custom Arrows */}
        <div className="relative w-full mt-10 px-10">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="product-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="p-6  text-center">
                  <div className="relative flex justify-center">
                     <img
                        src={product.image}
                        alt="Product"
                        className="absolute -top-6 md:right-4 right-8 h-66"
                      />
                    <div className="bg-[#dec5ab] rounded-full w-52 h-52 flex items-center justify-center">
                    
                    </div>
                  </div>
                  <p className="text-[#8b7965] mt-10 text-sm">Arabica</p>
                  <h3 className="text-[#43290c] font-bold text-lg">Arabian Coffee</h3>
                  <p className="text-[#43290c] font-semibold mb-3">${product.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Buttons */}
          <div className="custom-prev absolute top-[40%] -translate-y-1/2 left-2 z-10 cursor-pointer text-3xl text-[#43290c] hover:scale-110 transition">
<i className="ri-arrow-left-line"></i>
          </div>
          <div className="custom-next absolute top-[40%] -translate-y-1/2 right-2 z-10 cursor-pointer text-3xl text-[#43290c] hover:scale-110 transition">
<i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProduct;

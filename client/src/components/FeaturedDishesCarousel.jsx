import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const dishes = [
  { name: "Dish 1", image: "https://via.placeholder.com/300?text=Dish+1" },
  { name: "Dish 2", image: "https://via.placeholder.com/300?text=Dish+2" },
  { name: "Dish 3", image: "https://via.placeholder.com/300?text=Dish+3" },
];

export default function FeaturedDishesCarousel() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Featured Dishes</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{dish.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
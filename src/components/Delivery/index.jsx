import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard";

// Component
import DeliveryCarousel from "./DeliveryCarousel";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "123456",
      image: {
        images: [
          {
            location:
              "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
          },
        ],
      },
      name: "Bakehouse Comfort",
      cuisine: ["Bakery", "Desserts", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456",
      image: {
        images: [
          {
            location:
              "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
          },
        ],
      },
      name: "Bakehouse Comfort",
      cuisine: ["Bakery", "Desserts", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456",
      image: {
        images: [
          {
            location:
              "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
          },
        ],
      },
      name: "Bakehouse Comfort",
      cuisine: ["Bakery", "Desserts", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456",
      image: {
        images: [
          {
            location:
              "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
          },
        ],
      },
      name: "Bakehouse Comfort",
      cuisine: ["Bakery", "Desserts", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
  ]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in NCR(Delhi)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;

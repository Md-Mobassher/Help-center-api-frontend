"use client";

import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const CardSection = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch data from the API
    fetch("/api/cards")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" bg-slate-200">
      <div className="container mx-auto px-8 py-16">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center mb-8">
          How can we help?
        </h1>
        <div className="flex justify-center mb-8">
          <div className="border border-gray-600 rounded-lg  p-2 w-1/2 bg-white flex justify-between">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 outline-none focus:ring-0 ml-4"
            />{" "}
            <button className=" px-4 py-2 ml-4 rounded-lg">
              <HiArrowNarrowRight className="size-8" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {filteredCards?.map((card) => (
          <div key={card.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;

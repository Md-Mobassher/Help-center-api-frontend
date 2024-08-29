"use client";

import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface Card {
  id: string;
  title: string;
  description: string;
}

const CardSection: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch data from the API
    fetch("https://backend-phi-tawny.vercel.app/cards")
      .then((response) => response.json())
      .then((data) => setCards(data?.data || [])) // Ensure that cards are set correctly
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  // Filter cards based on the search query
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-slate-200">
        <div className="container mx-auto px-8 py-16">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center mb-8">
            How can we help?
          </h1>
          <div className="flex justify-center mb-8">
            <div className="border border-gray-600 rounded-lg p-2 lg:w-1/2 md:w-1/2 w-[90%] bg-white flex justify-between">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 outline-none focus:ring-0 ml-4"
              />
              <button className="px-4 py-2 ml-4 rounded-lg">
                <HiArrowNarrowRight className="size-8" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* card */}
      <div className="max-w-5xl mx-auto lg:px-6 md:px-6 px-4 mt-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                key={card.id}
                className="bg-gray-100 border rounded-lg border-gray-300 shadow-lg cursor cursor-pointer"
              >
                <div className=" border-b border-gray-300 p-5">
                  <h2 className="text-xl font-bold">{card.title}</h2>
                </div>

                <div className="p-5 flex flex-col justify-between items-start">
                  <p className="mb-5">{card.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-600">
              No results found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardSection;

"use client";
import { useState, useEffect } from "react";

interface Cat {
  id: string;
  url: string;
}

const CAT_API_KEY = process.env.CAT_API_KEY;

export default function CatGallery() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=5", {
      headers: { "x-api-key": CAT_API_KEY || "" },
    })
      .then((res) => res.json())
      .then((data: Cat[]) => setCats(data))
      .catch((err) => console.error(err));
  }, []);

  const nextCat = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cats.length);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text--800 mb-4 ">Cat Gallery</h2>
      {cats.length > 0 && (
        <img
          src={cats[currentIndex].url}
          alt="Cat"
          className="w-64 h-64 object-cover"
        />
      )}
      <button
        onClick={nextCat}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Next
      </button>
    </div>
  );
}

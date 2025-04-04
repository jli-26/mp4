"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cat Gallery</h2>
      {cats.length > 0 && (
        <div className="w-64 h-64 relative">
          <Image
            src={cats[currentIndex].url}
            alt="Cat"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 256px"
            priority
          />
        </div>
      )}
      <button
        onClick={nextCat}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Next
      </button>
    </div>
  );
}


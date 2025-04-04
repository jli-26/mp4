"use client";

import useSWR from "swr";
import Cat from "./CatData";

const api_key = process.env.CAT_API_KEY;

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      "x-api-key": api_key,
    },
  }).then((res) => res.json());

export default function CatGallery() {
  const { data, error } = useSWR(
    "https://api.thecatapi.com/v1/images/search?limit=20",
    fetcher
  );

  if (error) return <div>Error loading cats</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {data.map((cat: { id: string; url: string; width: number; height: number }) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </>
  );
}

"use client";
import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Link from "next/link";
import React, { useState } from "react";

const page = async ({ params: { id } }) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const anime = await getAnimeResponse(`anime/${id}`);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
    const day = date.getDate().toString().padStart(2, "0");
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}${year !== 0 ? `, ${year}` : ""}`;
  }

  const truncateSynopsis = (text, maxLength = 300) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.slice(0, maxLength);
    return `${truncatedText}...`;
  };

  return (
    <>
      <div className="h-full bg-cover bg-center bg-gray-700">
        <div className="relative h-full bg-black bg-opacity-70 flex flex-col md:flex-row gap-8 md:gap-16 pt-10 px-24 pb-8">
          <div className="detail-card overflow-hidden self-center rounded-2xl w-72">
            <img src={anime.data.images.jpg.large_image_url} alt={`poster for ${anime.data.title}`} className="hidden md:block" />
          </div>
          <div className="mt-10 text-white md:flex-1">
            <div className="lg:w-12/12">
              <div className="relative">
                <div className="mb-10">
                  <h3 className="text-white font-bold mb-1 text-xl">{anime.data.title}</h3>
                  <span className="text-gray-400 text-sm block">
                    {anime.data.title_japanese}, {anime.data.title}
                  </span>
                </div>
                <div className="absolute top-0 right-0 text-center hidden md:inline">
                  <span className="flex items-center text-sm">
                    <span className="text-xl mr-1">
                      {" "}
                      <i>
                        <svg className="w-4 h-4 ms-1 text-yellow-500 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </i>{" "}
                    </span>
                    <span className="text-xm font-sans italic opacity-70">
                      {anime.data.score ? anime.data.score.toFixed(2) : "?"} / {anime.data.scored_by}{" "}
                    </span>
                  </span>
                </div>
                <p className="text-white">
                  {showFullSynopsis ? anime.data.synopsis.replace("[Written by MAL Rewrite]", "") : truncateSynopsis(anime.data.synopsis.replace("[Written by MAL Rewrite]", ""))}
                  {anime.data.synopsis.length > 300 && (
                    <span className="cursor-pointer text-slate-400" onClick={() => setShowFullSynopsis(!showFullSynopsis)}>
                      {showFullSynopsis ? " Lebih Sedikit" : " Lihat Selengkapnya"}
                    </span>
                  )}
                </p>
                <div className="my-12 md:flex">
                  <div className="w-full md:w-1/2">
                    <ul>
                      <li>
                        <span className="text-white">Type:</span> {anime.data.type ? anime.data.type : "?"}, source: {anime.data.source ? anime.data.source : "?"}
                      </li>
                      <li className="flex">
                        <span className="text-white"></span>{" "}
                        {anime.data.studios.map((studio) => (
                          <p key={studio.mal_id}>{`Studios: ${studio.name}`}</p>
                        ))}
                      </li>
                      <li>
                        <span className="text-white">Status:</span> {anime.data.status}
                      </li>
                      <li>
                        <span className="text-white">Date Aired:</span> {anime.data.aired.from ? formatDate(anime.data.aired.from) : "?"} to {anime.data.aired.to ? formatDate(anime.data.aired.to) : "?"}
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <ul>
                      <li>
                        <span className="text-white">Rating:</span> {anime.data.rating ? anime.data.rating : "?"}
                      </li>
                      <li>
                        <span className="text-white">Durations:</span> {anime.data.duration ? anime.data.duration : "?"}
                      </li>
                      <li>
                        <span className="text-white">Scores:</span> {anime.data.score ? anime.data.score : "?"} / 10
                      </li>
                      <li className="flex">
                        <span className="text-white">Genre: </span>{" "}
                        {anime.data.genres.map((genre, index) => (
                          <span key={genre.mal_id}>
                            {genre.name}
                            {index < anime.data.genres.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="mb-4">
                  <Link href={anime.data.trailer.url || "#"} className="text-white bg-red-600 inline-block font-semibold uppercase tracking-wide px-5 py-3 rounded mr-2">
                    Trailer
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-70 pb-16">
          <VideoPlayer ytId={anime.data.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
};

export default page;

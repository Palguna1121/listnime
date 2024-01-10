import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Link from "next/link";
import Synopsis from "@/components/Utilities/Synopsis";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const characters = await getAnimeResponse(`anime/${id}/characters`);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
    const day = date.getDate().toString().padStart(2, "0");
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}${year !== 0 ? `, ${year}` : ""}`;
  }

  return (
    <>
      <div className="h-full bg-cover bg-center bg-gray-700">
        <div className="relative h-full bg-black bg-opacity-70 flex flex-col md:flex-row gap-8 md:gap-16 pt-10 px-24 pb-8">
          <div className="detail-card overflow-hidden self-center rounded-2xl w-72">
            <img src={anime.data?.images.jpg.large_image_url} alt={`poster for ${anime.data?.title}`} className="hidden md:block" />
          </div>
          <div className="mt-10 text-white md:flex-1">
            <div className="lg:w-12/12">
              <div className="relative">
                <div className="mb-10">
                  <h3 className="text-white font-bold mb-1 text-xl">{anime.data?.title}</h3>
                  <span className="text-gray-400 text-sm block">
                    {anime.data?.title_japanese}, {anime.data?.title}
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
                      {anime.data?.score ? anime.data.score.toFixed(2) : "?"} / {anime.data?.scored_by}{" "}
                    </span>
                  </span>
                </div>
                <Synopsis anime={anime} />
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
                      <li>
                        <span className="text-white">Genre:</span> {anime.data.genres.map((genre) => genre.name).join(", ")}
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

        <div className="flex justify-center items-center h-full bg-black bg-opacity-70 px-5">
          <VideoPlayer ytId={anime.data.trailer.youtube_id} />
        </div>
        <div className="py-16 bg-black bg-opacity-70">
          <h3 className="ml-10 text-2xl text-white">Characters in : {anime.data?.title}</h3>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 justify-items-center mt-4 px-10">
            {characters.data.slice(0, 16).map((c, index) => (
              <div className="col-span-1" key={index}>
                <div className="text-center">
                  <img src={c.character.images.jpg.image_url} alt="" className="w-21 h-25 border border-white m-auto transition-transform transform hover:scale-105" />
                  <div className="text-lg mt-2 text-white">{c.character.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

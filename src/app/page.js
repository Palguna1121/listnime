import Link from "next/link";
import Listnime from "./components/Listnime";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Home = async () => {
  const response = await fetch(`${BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();
  console.log(anime);

  return (
    <div className="m-5">
      <div className="flex justify-between p-2">
        <h1 className="text-2xl mx-5">Populer Saat Ini...</h1>
        <Link href={"/populer"} className="mx-5 mt-2 lg:text-md md:text-sm text-xs">
          lihat semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 m-5">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="">
              <Listnime title={data.title} id={data.mal_id} type={data.type} images={data.images.webp.image_url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

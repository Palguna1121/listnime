import Link from "next/link";

const Listnime = ({ api, url }) => {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mx-5 mb-8">
        {api.data?.map((data, index) => {
          return (
            <div key={index} className="group">
              <Link href={`/anime/${data?.mal_id}`} as={`/anime/${data?.mal_id}`} className="text-sm text-white ">
                <img alt={data?.title} src={data?.images.jpg.large_image_url} className="rounded-xl object-cover opacity-100 transition-opacity group-hover:opacity-60 h-[300px] w-full duration-500 sm:h-[400px]" />
                <div className="text-left p-3">
                  {data?.type ? <p className="text-sm font-extrabold uppercase tracking-widest text-white">~{data?.type}~</p> : null}

                  {data?.title.length > 25 ? <p className="text-sm font-bold text-white lg:text-xl md:text-md">{data?.title.slice(0, 20)}...</p> : <p className="text-sm font-bold text-white lg:text-xl md:text-md">{data?.title}</p>}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listnime;

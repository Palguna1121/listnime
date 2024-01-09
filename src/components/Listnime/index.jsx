import Link from "next/link";

const Listnime = ({ api, url }) => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 gap-y-28 mx-5 mb-8">
        {api.data?.map((data, index) => {
          return (
            <div key={index} className="group relative block">
              <Link href={`/anime/${data.mal_id}`} as={`/anime/${data.mal_id}`} className="text-sm text-white ">
                <img alt={data.title} src={data.images.jpg.large_image_url} className="absolute inset-0 object-cover opacity-100 transition-opacity group-hover:opacity-40 h-[300px] w-full duration-500 sm:h-[400px]" />
                <div className="relative text-left px-3">
                  <div className="mt-32 sm:mt-40 lg:mt-56">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 mb-8">
                      <p className="text-sm font-extrabold uppercase tracking-widest text-white">~{data.type}~</p>
                      <p className="text-sm font-bold text-white lg:text-xl md:text-md">{data.title}</p>
                    </div>
                  </div>
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

import Link from "next/link";

const Listnime = ({ api }) => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 lg:m-5 md:m-4 sm:m-3 m-5 lg:p-5 md:p-4 sm:p-3 p-3">
        {api.data?.map((data, index) => {
          return (
            <div className="group relative block p-3" key={index}>
              <img alt={data.title} src={data.images.jpg.large_image_url} className="absolute inset-0 object-cover opacity-100 transition-opacity group-hover:opacity-60 h-[300px] w-full duration-500 sm:h-[400px]" />

              <Link href={`/${data.mal_id}`} className="text-sm text-white">
                <div className="relative p-3 sm:p-4 lg:p-6 text-left">
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

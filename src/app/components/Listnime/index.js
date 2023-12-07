import Link from "next/link";

const Listnime = ({ id, title, images, type }) => {
  return (
    <>
      <div className="group relative block p-3">
        <img alt="Developer" src={images} className="absolute inset-0 object-cover opacity-75 transition-opacity group-hover:opacity-25 h-[300px] w-full duration-500 sm:h-[400px]" />

        <div className="relative p-4 sm:p-6 lg:p-6 text-left">
          <div className="mt-32 sm:mt-40 lg:mt-56">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{type}</p>
            <p className="text-sm font-bold text-white lg:text-xl md:text-md">{title}</p>
          </div>
        </div>
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex justify-end">
          <Link href={`/${id}`} className="text-sm text-white">
            see more...
          </Link>
        </div>
      </div>
    </>
  );
};

export default Listnime;

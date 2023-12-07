import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="navbar bg-base-100 flex md:flex-row sm:flex-row flex-col justify-between">
        <div className="flex-1">
          <Link href={`/`} className="text-2xl">
            Listnime
          </Link>
        </div>
        <div className="flex-none gap-2 my-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

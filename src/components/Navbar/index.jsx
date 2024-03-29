import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header>
      <div className="navbar bg-base-100 flex md:flex-row sm:flex-row flex-col justify-between px-5">
        <div className="flex-1">
          <Link href={`/`} className="lg:pl-5 md:pl-3 text-2xl">
            Listnime
          </Link>
        </div>
        <div className="gap-5">
          <Link href={`/season`} className="text-base">
            Trending
          </Link>
          <Link href={`/populer`} className="text-base">
            Popular
          </Link>
          <Link href={`/season`} className="text-base">
            Cocote
          </Link>
        </div>
        <div className="flex-none gap-2 my-2">
          <div className="form-control">
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  {/* <details>
                    <summary>Genre</summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                      <li>
                        <Link href={"/"}>blablabla</Link>
                      </li>
                      <li>
                        <Link href={"/"}>blablabla</Link>
                      </li>
                    </ul>
                  </details> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="form-control">
            <InputSearch />
          </div>
          <div className="form control md:flex lg:flex hidden">
            <UserActionButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

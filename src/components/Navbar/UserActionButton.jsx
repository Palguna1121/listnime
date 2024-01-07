import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div>
      <div className="dropdown dropdown-end mx-3 ml-3">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user ? (
              <img src={user.image} />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -2 18 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            )}
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            {!user ? null : (
              <Link href={"/users/dashboard"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            )}
          </li>
          <li>
            <Link href={actionURL}>{actionLabel}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserActionButton;

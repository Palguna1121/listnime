import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div>
      <div className="hero h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center">
          <img src={user.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{user.name}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="gap-3">
              <Link href={"https://github.com/palguna1121"} className="btn btn-neutral mr-5">
                Go to Github
              </Link>
              <Link href={"/users/dashboard/comment"} className="btn btn-success">
                my comment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

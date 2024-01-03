import Listnime from "@/components/Listnime";
import Header from "@/components/Listnime/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const listmusim = await getAnimeResponse("seasons/now", "limit=8");
  const listnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <section className="m-5 pb-8">
        <Header title="Populer Musim ini" linkTitle={"Lihat Semua"} linkHref={"/season"} />
        <Listnime api={listmusim} />
      </section>
      <section className="m-5 pb-8">
        <Header title="Paling Populer" linkTitle={"Lihat Semua"} linkHref={"/populer"} />
        <Listnime api={listnime} />
      </section>
    </>
  );
};

export default Page;

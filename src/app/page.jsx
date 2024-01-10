import Listnime from "@/components/Listnime";
import Header from "@/components/Listnime/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const Page = async () => {
  const listmusim = await getAnimeResponse("seasons/now", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 8);

  return (
    <>
      <section className="m-5 pb-8">
        <Header title="Populer Musim ini" linkTitle={"Lihat Semua"} linkHref={"/season"} />
        <Listnime api={listmusim} />
      </section>
      <section className="m-5 pb-24">
        <Header title="Rekomendasi" />
        <Listnime api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;

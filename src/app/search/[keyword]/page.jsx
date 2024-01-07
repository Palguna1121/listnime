import { getAnimeResponse } from "@/libs/api-libs";
import Listnime from "@/components/Listnime";
import Header from "@/components/Listnime/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchNime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  const searchResultsExist = searchNime && searchNime.data.length > 0;

  return (
    <>
      <section className="m-5 pb-8">
        {searchResultsExist ? (
          <>
            <Header title={`Hasil Pencarian : ${decodeKeyword}`} />
            <Listnime api={searchNime} />
          </>
        ) : (
          <Header title={`Hasil Pencarian : ${decodeKeyword} Tidak Ditemukan`} />
        )}
      </section>
    </>
  );
};

export default Page;

import Listnime from "@/components/Listnime";
import Header from "@/components/Listnime/Header";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const response = await fetch(`${BASE_URL}/anime?q=${decodeKeyword}`);
  const searchNime = await response.json();

  return (
    <>
      <section className="m-5 pb-8">
        <Header title={`Hasil Pencarian "${decodeKeyword}"`} />
        <Listnime api={searchNime} />
      </section>
    </>
  );
};

export default Page;

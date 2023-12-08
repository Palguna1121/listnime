import Listnime from "@/components/Listnime";
import Header from "@/components/Listnime/Header";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Home = async () => {
  const response = await fetch(`${BASE_URL}/top/anime?limit=8`);
  const listnime = await response.json();

  return (
    <>
      <section className="m-5 pb-8">
        <Header title="Paling Populer" linkTitle={"Lihat Semua"} linkHref={"/populer"} />
        <Listnime api={listnime} />
      </section>
      <section className="m-5 pb-8">
        <Header title="Terbaru" linkTitle={"Lihat Semua"} linkHref={"/new"} />
        <Listnime api={listnime} />
      </section>
    </>
  );
};

export default Home;

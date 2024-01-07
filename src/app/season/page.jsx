"use client";

import Listnime from "@/components/Listnime";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = async () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimeResponse("seasons/now", `page=${page}`);
      setAnime(data);
    };

    if (page) {
      fetchData();
    }
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Musim ini, ${page}`} />
      <Listnime api={anime} />
      <Pagination page={page} last={anime.pagination?.last_visible_page} setPage={setPage} />
    </>
  );
};

export default Page;

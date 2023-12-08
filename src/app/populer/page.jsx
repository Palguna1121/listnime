"use client";

import Listnime from "@/components/Listnime";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = async () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/top/anime?page=${page}`);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setAnime(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    if (page) {
      fetchData();
    }
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler ${page}`} />
      <Listnime api={anime} />
      <Pagination page={page} last={anime.pagination?.last_visible_page} setPage={setPage} />
    </>
  );
};

export default Page;

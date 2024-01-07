"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleBack}>
        {"<"}
      </button>
    </div>
  );
};

export default Page;

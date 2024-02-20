import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import ImageCard from "../../components/ImageCard/ImageCard";
function QuoteHome() {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [imageUrlArray, setImageUrlArray] = useState([]);
  const [page, setPage] = useState(1);
  const pageRef = useRef(1);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(searchText);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };
  const fetchData = () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_APP_AUTHORIZATION_TOKEN;
    const apiUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=3`;
    const headers = {
      Authorization: apiKey,
      "Content-Type": "application/json",
    };
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        const data = [...imageUrlArray, ...response.data.photos];
        setImageUrlArray(data);
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      })
      .finally(() => {
        setLoading(false);
        setPage(page + 1);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="h-screen ">
        <div className="mt-32 w-full  flex justify-center">
          <TextBox
            placeholder="Search for image"
            handleSubmit={handleKeyDown}
            handleChange={handleChange}
            currText={searchText}
          />
          <Button placeholder="search" handleSubmit={handleSubmit} type="add" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 md:gap-6 justify-center justify-items-center">
          {imageUrlArray.map((item, idx) => (
            <ImageCard key={idx} url={item.src.original} />
          ))}
        </div>
        {loading && (
          <h1 className="text-slate-100  flex justify-center m-2">
            Loading...
          </h1>
        )}
        <div className="text-red-600  flex justify-center m-2">
          <button className="rounded-xl p-2 bg-slate-200" onClick={fetchData}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default QuoteHome;

import React, { useState, useEffect } from "react";
import axios from "axios";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import ImageCard from "../../components/ImageCard/ImageCard";
function QuoteHome() {
  const [searchText, setSearchText] = useState("");
  const [imageUrlArray, setImageUrlArray] = useState([]);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(searchText);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };
  useEffect(() => {
    const apiKey = import.meta.env.VITE_APP_AUTHORIZATION_TOKEN;
    const apiUrl = `https://api.pexels.com/v1/curated?per_page=21`;
    const headers = {
      Authorization: apiKey,
      "Content-Type": "application/json",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setImageUrlArray(response.data.photos);
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });
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
      </div>
    </>
  );
}

export default QuoteHome;

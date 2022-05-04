

import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = ({ onGifClick, close }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "YU1jLda0kXiH1OMw8cppdeKEisdq9pg1",
            limit: 100
          }
        });

        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return currentItems.map((el) => {
      const src = el.images.fixed_height.url;
      return (
        <div key={el.id} className="gif">
          <img
            onClick={() => {
              onGifClick(src);
              close();
            }}
            src={src}
            alt=""
          />
        </div>
      );
    });
  };
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get Gifs
        </div>
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "YU1jLda0kXiH1OMw8cppdeKEisdq9pg1",
          q: search,
          limit: 100
        }
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="m-2">
      {renderError()}
      <form className="search-bar">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mx-2"
        >
          Go
        </button>
      </form>

      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;

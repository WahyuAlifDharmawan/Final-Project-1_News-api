import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNews } from "../../../features/news/newsSlice";
import { addItems, removeItems } from "../../../features/news/newsSlice";
import Card from "../../molekuls/Card/Card";

function SearchPage() {
  const dispatch = useDispatch();

  // const allNews = useSelector((state) => state.search.article);
  const savedItems = useSelector((state) => state.saved.savedItems);
  const searchNews = useSelector((state) => state.search.entities);

  const getSearchParams = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    const searchParams = params.get("q");
    return searchParams;
  };

  const handleToSaved = (item) => {
    dispatch(addItems(item));
  };

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <>
      <div className="layout my-8 md:my-12">
        <h2 className="text-lg font-semibold capitalize text-gray-900 md:text-xl">
          Search Result For "{getSearchParams()}"
        </h2>

        <div className="grid gap-2 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3">
          {searchNews.map((news, index) => {
            return (
              <div key={index} className="border-1 border-gray-700/30 rounded">
                <Card
                  key={index}
                  source={news?.source.name}
                  Image={news?.urlToImage}
                  titleImg={news?.title}
                  title={news?.title}
                  author={news?.author}
                  description={news?.description}
                  url={news?.url}
                  onClick={() => {
                    // handleToRemove(news);
                    savedItems?.find((item) => item.title === news.title)
                      ? handleToRemove(news)
                      : handleToSaved(news);
                  }}
                  buttonName={
                    savedItems?.find((item) => item.title === news.title) ? (
                      <p className="bg-red-500 text-white p-2 rounded">
                        Unsave
                      </p>
                    ) : (
                      <p className="bg-blue-500 text-white p-2 rounded">Save</p>
                    )
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../molekuls/Card/Card";
import { CovidNews } from "../../../features/news/newsSlice";
import { addItems, removeItems } from "../../../features/news/newsSlice";

const NewsListCovid = () => {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.articles.entities);
  const savedItems = useSelector((state) => state.saved.savedItems);

  useEffect(() => {
    dispatch(CovidNews());
  }, [dispatch]);

  // console.log(allNews);

  const handleToSaved = (item) => {
    dispatch(addItems(item));
  };

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <>
      <div className="mx-6">
        <h1 className="text-4xl my-10 text-center font-serif">Covid News</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 w-68 m-3">
        {allNews.map((news, index) => {
          return (
            <div key={index} className="border-1 border-gray-700/30 rounded">
              <Card
                source={news?.source.name}
                Image={news?.urlToImage}
                titleImg={news?.title}
                title={news?.title}
                author={news?.author}
                description={news?.description}
                url={news?.url}
                onClick={() => {
                  savedItems?.find((item) => item.title === news.title)
                    ? handleToRemove(news)
                    : handleToSaved(news);
                }}
                buttonName={
                  savedItems?.find((item) => item.title === news.title) ? (
                    <p className="bg-red-500 text-white p-2 rounded">Unsave</p>
                  ) : (
                    <p className="bg-blue-500 text-white p-2 rounded">Save</p>
                  )
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsListCovid;

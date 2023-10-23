import { useEffect, useState } from "react";

const NewsCard = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <>
      {news.map((newses, i) => (
        <article
          key={i}
          className="bg-white rounded-tr-[60px] rounded-bl-[60px]"
        >
          <div className="rounded-tr-[60px] w-[400px]  rounded-bl-[60px]">

          <img className="w-full  rounded-tr-[60px] rounded-bl-[60px] " src={newses.image} alt="" />
          </div>

          <p className="text-2xl font-semibold px-3 pt-3">{newses.title}</p>

          <p className="px-4 pt-7">{newses.content}</p>
        </article>
      ))}
    </>
  );
};

export default NewsCard;

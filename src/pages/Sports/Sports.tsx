// type NewsProps = {
//   title: string;
//   id: string;
//   description: string;
//   image: string;
//   slug: string;

import { Link, Outlet } from "react-router-dom";

// };
const Sports = () => {
  // const [news, setNews] = useState<NewsProps[]>([]);
  // useEffect(() => {
  //   fetch("https://team-delta001.herokuapp.com/api/news/Sports")
  //     .then((res) => res.json())
  //     .then((data) => setNews(data));
  // }, []);
  return (
    <>
      {/* <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-6">
            {news.slice(0, 1).map((item) => (
              <div key={item.id}>
                <Link to={`singleNews/${item.slug}`}>
                  <img src={item.image} alt={item.title} className="w-full " />
                </Link>
              </div>
            ))}
          </div>
          <div className="xl:col-span-3">
            {news.slice(1, 2).map((item) => (
              <div key={item.id}>
                <Link to={`singleNews/${item.slug}`}>
                  <img src={item.image} alt={item.title} className="w-full " />
                  <h1 className="news-sub-title-three-col pt-2">{item.title}</h1>
                  <p className="news-sub-title-three-col pt-2">{item.title}</p>

                </Link>
              </div>
            ))}
          </div>
          <div className="xl:col-span-3">ghg</div>
        </div>
      </section> */}
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/sports">
          <span className="border-b">Sports</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/sports/cricket">&bull;Cricket</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/sports/football">&bull;Football</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/sports/localsports">&bull;Local Sports</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Sports;

import { Link, Outlet } from "react-router-dom";
// type NewsProps = {
//     title: string;
//     id: string;
//     description: string;
//     image: string;
//   };
const Tech = () => {
  // const [news, setNews] = useState<NewsProps[]>([]);
  // useEffect(() => {
  //   fetch("https://team-delta001.herokuapp.com/api/news/tech")
  //     .then((res) => res.json())
  //     .then((data) => setNews(data));
  // }, []);
  return (
    <div>
      {/* {news.map((n) => {
        const { id, title, description, image } = n;
        return (
          <div className="mt-4" key={id}>
            <div className="m-3 mb-6">
              <h1 className="font-bold text-lg">{title}</h1>
              <p>{description}</p>
              <img src={image} alt="" />
            </div>
            <hr />
          </div>
        );
      })} */}

      {/* {
          news.map(n=><HomePageNews key={n.id} ></HomePageNews>)
        } */}
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/tech">
          <span className="border-b">Tech</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/tech/gadgetandapps">&bull;Gadget and Apps</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/tech/it">&bull;IT</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/tech/socialmedia">&bull;SocialMedia</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Tech;

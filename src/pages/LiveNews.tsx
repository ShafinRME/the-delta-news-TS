import LiveNewsData from "../../src/data/LiveNewsData";

const LiveNews = () => {
  return (
    <div>
      {LiveNewsData.map((singleNews) => {
        const { text, id } = singleNews;
        return (
          <div key={id}>
            <h1>{text}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default LiveNews;

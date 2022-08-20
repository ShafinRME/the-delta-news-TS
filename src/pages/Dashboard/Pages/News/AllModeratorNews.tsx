import { useQuery } from "@tanstack/react-query";
import Loadings from "../../../../components/Loading/Loadings";
import ModeratorRow from "../../DashboardComponent/TableRow/ModeratorRow";

const AllModeratorNews = () => {

  interface Data {
    _id?: string;
    id?: string;
    title: string;
    description?: string;
    image?: string;
    date?: string;
    slug?: string;
  }
  const url = `https://team-delta001.herokuapp.com/api/news`;
  const { isLoading, data } = useQuery<Data[], Error>(["allNews"], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loadings />;
  }

  console.log("allNews", data);

  return (
    <>
      <section className="p-5 text-lg font-semibold text-left text-accent">
        ALL Moderator news
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Browse a list of Flowbite products designed to help you work and play,
          stay organized, get answers, keep in touch, grow your business, and
          more.
        </p>
      </section>
      <section className="lg:max-w-6xl mx-auto overflow-x-auto">
        <table className="table rounded-0 w-full">
          {/* table title */}
          <thead className="sticky top-0 w-full rounded-0">
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Title</th>
              <th>View</th>
              <th>Edit</th>
              <th>Request</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* table data */}
          <tbody>
            {data?.map((news, index) => (
              <ModeratorRow key={news.id} index={index} news={news} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AllModeratorNews;

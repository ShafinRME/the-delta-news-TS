import { Link } from "react-router-dom";
import Cont from "../../../../Assets/images/dashboard/cong.png"
import EcomCard from "../../DashboardComponent/Card/EcomCard";


const Ecommerce = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <div className="hero bg-base-200 xl:px-8 shadow-sm rounded-lg xl:pt-3 pb-5">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={Cont}
                  className="max-w-xs w-40 lg:w-72 lg:h-56"
                  alt="welcome"
                />
                <div>
                  <h1 className="text-lg lg:text-2xl font-semibold text-secondary">
                    Congratulations! <br /> Delta Times
                  </h1>
                  <p className="pt-4 pb-6 text-neutral font-medium text-sm">
                    Best seller of the month You have done 57.6% more sales
                    today.
                  </p>
                  <Link
                    to="/"
                    className="px-4 py-2.5 bg-primary-content text-sm font-medium text-white rounded-lg hover:opacity-90 hover:transition-opacity duration-500"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="card bg-base-200 rounded-lg  shadow-sm xl:py-4">
              <div className="card-body">
                <h2 className="card-title text-secondary text-lg lg:text-2xl font-semibold">
                  Our Advertisement Services
                </h2>
                <p className="py-3 text-neutral font-medium text-sm">
                  Our News two services premium Adds and live TV chancels. we
                  make your adds and you can enjoy add free tv chanel.
                </p>
                <div className="card-actions justify-end pt-1">
                  <div className="badge badge-outline">Adds</div>
                  <div className="badge badge-outline">Live TV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="div">
            <EcomCard
              title="Total Ads Sold"
              details="All Sold"
              total="150"
            />
          </div>
          <div className="div">
            <EcomCard
              title="Total Balance"
              details="Only Ads"
              total="$12,000"
            />
          </div>
          <div className="div">
            <EcomCard
              title="Ads Profit"
              details="All Payment"
              total="$10,000"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ecommerce;

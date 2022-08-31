import { Link, Outlet } from "react-router-dom";

const International = () => {
  return (
    <div>
      {/* news addes */}
      <section className="pt-4 pb-6 border-b border-warning-content">
        <div className="max-w-4xl mx-auto">
          <a
            href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src="" alt="single big" className=" h-full md:h-24 w-full " />
          </a>
        </div>
      </section>
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/international">
          <span className="border-b">International</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/international/asia">&bull;Asia</Link>
        </li>

        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/international/america">&bull;America</Link>
        </li>

        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/international/europe">&bull;Europe</Link>
        </li>
      </ul>
      <Outlet />
      {/* <NestedNavbar
        title="International"
        subTitle1="Asia"
        subTitle2="America"
        subTitle3="Europe"
      /> */}
    </div>
  );
};

export default International;

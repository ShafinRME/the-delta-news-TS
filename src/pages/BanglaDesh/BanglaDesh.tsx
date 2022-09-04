import { Outlet } from "react-router-dom";
import CategoryAdds2 from "../../Assets/images/singleAdd/categoryadds2.png";
const BanglaDesh = () => {
  return (
    <>
      {/* news advertisement */}
      <section className="pt-4 pb-6 border-b border-warning-content">
        <div className="max-w-4xl mx-auto">
          <a
            href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CategoryAdds2}
              alt="single big"
              className=" h-full md:h-24 w-full "
            />
          </a>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default BanglaDesh;

import { Link, Outlet } from "react-router-dom";

const BanglaDesh = () => {
  return (
    <>
      <h1 className="text-2xl text-center m-2">Bangladesh</h1>
      <div className="flex justify-around">
        <Link to="/politics">Politics</Link>
        <Link to="/accident">Accident</Link>
        <Link to="/crime">Crime</Link>
      </div>
      <Outlet />
    </>
  );
};

export default BanglaDesh;

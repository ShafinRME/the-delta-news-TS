const TotalCard = ({
  title,
  total,
  details,
}: {
  title: string;
  total: string;
  details: string;
}) => {
  return (
    <>
      <div className=" flex justify-between px-8 py-6 items-center bg-base-200 rounded-lg">
        <div className="">
          <h1>{title}</h1>
          <h6>{details}</h6>
          <p className="text-neutral-content">{total}</p>
        </div>
        <div>ggg</div>
      </div>
    </>
  );
};

export default TotalCard;

import { Helmet } from "react-helmet-async";

const PageTitle = ({
  title,
  description,
}: {
  title: string | undefined;
  description: string | undefined;
}) => {
  return (
    <>
      <Helmet>
        <title>{title}- Delta News</title>
        {description && <meta name="description" content={description}></meta>}
      </Helmet>
    </>
  );
};

export default PageTitle;

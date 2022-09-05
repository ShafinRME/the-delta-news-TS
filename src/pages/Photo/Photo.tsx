import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
interface PhotosProps {
  image: string;
}
const Photo = () => {
  const [photos, setPhotos] = useState<PhotosProps[]>([]);

  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news")
      .then((res) => res.json())
      .then((result) => {
        setPhotos(result);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-5 ">
        {photos.map((photo) => (
          <div className="relative">
            <img
              className="rounded-xl w-[500px] h-[300px]"
              src={photo.image}
              alt=""
            />

            <div
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col  opacity-0 hover:opacity-100 hover:rounded-xl hover:transition-opacity duration-300 mb-3"
              style={{ backdropFilter: `blur(5px)` }}
            >
              <h1 className="text-white font-bold">Tittle</h1>
              <BsFillEyeFill className="text-white rounded-xl text-2xl " />
              <BiDownload className="text-white rounded-xl text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Photo;

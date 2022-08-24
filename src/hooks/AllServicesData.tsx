import { useEffect, useState } from "react";

export interface AllSlots {
  _id?: string;
  slot?: string[];
  title?: string;
  price?: number;
  currency?: string;
  frequency?: string;
  description?: string;
  features?: string[];
  btn?: string;
  mostPopular?: string | boolean;
}

// interface AdvSlot {
//   advSlots?: Services;
// }
const useServices = () => {
  const [services, setServices] = useState<AllSlots[][]>([]);
  useEffect(() => {
    const url = "Services.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [services]);
  return [services];
};

export default useServices;

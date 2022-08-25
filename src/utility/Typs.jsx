 interface DetailsNews {
  _id: undefined | string;
  id: undefined | string;
  title: undefined | string;
  image: undefined | string;
  description: undefined | string;
  reference: undefined | string;
  category: undefined | string;
  date: undefined | string;
}

interface Data {
  _id?: string;
  id?: string;
  title: string;
  description?: string;
  image?: string;
  date?: string;
  slug?: string;
  category?:string
}

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface locationProps {
  state: any;
}


export { DetailsNews, Data, FormValues, locationProps };
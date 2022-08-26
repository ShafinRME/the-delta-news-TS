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
  category?:string;
  reference?:string;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface locationProps {
  state: any;
}

type NewsProps = {
  title: string,
  id: string,
  _id: string,
  description: string,
  image: string,
  slug: string,
  category:string,
  date:string,
  
};

type ModeratorRowProps = {
  news: {
    _id?: string,
    id?: string,
    title?: string,
    description?: string,
    image?: string,
    date?: string,
    slug?: string,
    reference?: string,
  },
  index: number,
};


interface allNewsData {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  slug?: string;
  category?: string;
}


export {
  DetailsNews,
  Data,
  FormValues,
  locationProps,
  allNewsData,
  NewsProps,
  ModeratorRowProps,
};
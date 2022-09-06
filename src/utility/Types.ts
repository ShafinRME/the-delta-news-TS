export interface DetailsNews {
  _id: undefined | string;
  id: undefined | string;
  title: undefined | string;
  image: undefined | string;
  description: undefined | string;
  reference: undefined | string;
  category: undefined | string;
  date: undefined | string;
}

export interface Data {
  _id?: string;
  id?: string;
  title: string;
  description?: string;
  image?: string;
  date?: string;
  slug?: string;
  category?: string;
  reference?: string;
}

export interface FormValues {
  name: string;
  email: string;
  password: string;
}

export interface locationProps {
  state: any;
}

export type NewsProps = {
  title: string;
  id: string;
  _id: string;
  description: string;
  image: string;
  category: string;
  subCategory: string;
  slug: string;
  date: string;
  reference?: string;
};
export type SectionProps = {
  news: {
    title: string;
    id: string;
    _id: string;
    description: string;
    image: string;
    slug: string;
    category: string;
    date: string;
  }[];
};
export type SectionNewsProps = {
  news: {
    title: string;
    id: string;
    _id: string;
    description: string;
    image: string;
    slug: string;
    category: string;
    date: string;
  }[];
  linkUrl: string;
  linkText: string;
};

export type ModeratorRowProps = {
  news: {
    _id?: string;
    id?: string;
    title?: string;
    description?: string;
    image?: string;
    date?: string;
    slug?: string;
    reference?: string;
  };
  index: number;
};

export interface allNewsData {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  slug?: string;
  category?: string;
}

// export {
//   DetailsNews,
//   Data,
//   FormValues,
//   locationProps,
//   allNewsData,
//   NewsProps,
//   ModeratorRowProps,
//   SectionNewsProps,
//   SectionProps,
// };

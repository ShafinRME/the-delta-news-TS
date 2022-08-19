import { useEffect, useState } from "react";
export interface AllNews {
    title?: string;
    _id?: string;
    description?:string
}
const useAllNews = () => {
    const [AllNews, setAllNews] = useState<AllNews[]>([]);
    useEffect(() => {
        const url = 'https://team-delta001.herokuapp.com/api/news/';

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setAllNews(data)
            })
    }, [AllNews])
    return [AllNews]
}

export default useAllNews;
import React from "react";
type OneProps = {
    singleNews : {
      id: number;
      image: string;
      text: string;
      link: string;
      path: string;
    };
  };

export default function OneNews({ singleNews }: OneProps) {
    const {path}=singleNews
  return <div>OneNews {path}</div>;
}

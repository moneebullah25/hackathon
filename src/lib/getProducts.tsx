import { client } from "../../sanity/lib/client";
import { Image as SImage } from "sanity";


export enum CATEGORY {
  MALE= "912509f4-86a5-4561-8e4d-b0a534ee4262",
  KID= "4a4dd79a-2675-4da8-a24c-0552bb9b1a52",
  FEMALE= "f3455066-06fa-4ad0-9d06-0abd70bcf589"
}

export interface Product {
  title: string;
  images: SImage[];
  description: string;
  _id: string;
  price: number;
  category: {
    name: string;
  };
  sizeSet: {
    [key: number]: string;
  };
  categorySet: {
    [key: number]: string;
  };
  care: string[];
  quantity: number;
}

export const getProducts = async (category: string | null) => {
  const query = `*[_type=="product"${category ? ` && references("${category}")` : ""}] {
    title,
    images,
    description,
    _id,
    price,
    sizeSet,
    categorySet,
    category -> {
      name
    },
    care
  }`;

  const res = await client.fetch(query);
  return res;
};

export const getProductsWithID = async (id: string | null) => {
  const query = `*[_type=="product"${id ? ` && _id=="${id}"` : ""}] {
    title,
    images,
    description,
    _id,
    price,
    sizeSet,
    categorySet,
    category -> {
      name
    },
    care
  }`;

  const res = await client.fetch(query);
  return res;
};
export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Product Title",
    },
    {
      name: "description",
      type: "string",
      title: "Product Description",
    },
    {
      name: "care",
      type: "array",
      title: "Product Care",
      of: [{type: "string"}],
    },
    {
      title: "Product Category",
      name: "category",
      type: "reference",
      to: [{type: "category"}],
    },
    {
      title: "Product Category Set",
      name: "categorySet",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Dress", value: "dress" },
          { title: "Sweaters", value: "sweaters" },
          { title: "Pants", value: "pants" },
          { title: "Jackets", value: "jackets" },
          { title: "T Shirts", value: "tshirts" },
        ],
      },
    },
    {
      name: "sizeSet",
      type: "array",
      title: "Product Size Set",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "XXS", value: "XXS" },
          { title: "XS", value: "XS" },
          { title: "S", value: "S" },
          { title: "M", value: "M" },
          { title: "L", value: "L" },
          { title: "XL", value: "XL" },
          { title: "XXL", value: "XXL" },
        ],
      },
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};

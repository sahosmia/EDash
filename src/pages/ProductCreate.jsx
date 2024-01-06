import { useState } from "react";
import { BackButton, BreadCaumb, SaveButton } from "../data/component";
import { useEffect } from "react";
import InputCom from "../components/InputCom";

const ProductCreate = () => {
  const [categories, setCategories] = useState([]);
  const [fromState, setFormState] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    brand: "",
    category: "",
  });

  useEffect(() => {
    const getAllCategories = () => {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        });
    };
    getAllCategories();
  }, []);

  const brands = [
    "Al Munakh",
    "Fog Scent Xpressio",
    "Royal_Mirage",
    "Impression of Acqua Di Gio",
    "HP Pavilion",
    "Infinix",
    "OPPO",
    "Huawei",
    "Samsung",
    "Apple",
  ];

  const handleCreate = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fromState,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    console.log("ami");
  };

  return (
    <div className="p-2">
      <BreadCaumb
        title="Products"
        parentUrl="/pages/products/list"
        parentTitle="Products"
        pageUrl="/pages/products/create"
        pageTitle="Create"
        buttonGroup={
          <>
            <BackButton url="/pages/products/list"></BackButton>
          </>
        }
      ></BreadCaumb>

      <div className="py-5">
        <form onSubmit={handleCreate} action="">
          <div className="flex gap-10 pb-8">
            <InputCom
              title="Title"
              placeholder="Product title"
              value={fromState.title}
              handleChange={(e) =>
                setFormState({ ...fromState, title: e.target.value })
              }
            ></InputCom>

            <InputCom
              title="Price"
              placeholder="Product price"
              value={fromState.price}
              type="number"
              handleChange={(e) =>
                setFormState({ ...fromState, price: e.target.value })
              }
            ></InputCom>
          </div>
          <div className="flex gap-10 pb-8">
            <div className="flex flex-col flex-1">
              <label className="block">
                <span className="block text-sm font-medium mb-1.5">
                  Select Category
                </span>
                <span className="flex items-center peer w-full transition duration-200 px-3.5 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300 hover:border-gray-1000  ">
                  <select name="" id="" className="w-full ">
                    <option value="">Choose a category</option>
                    {categories &&
                      categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className=" capitalize"
                        >
                          {category}
                        </option>
                      ))}
                  </select>
                </span>
              </label>
            </div>

            <InputCom
              title="Discount Percentage"
              placeholder="Discount Percentage"
              value={fromState.discountPercentage}
              type="number"
              handleChange={(e) =>
                setFormState({
                  ...fromState,
                  discountPercentage: e.target.value,
                })
              }
            ></InputCom>
          </div>

          <div className="flex gap-10 pb-8">
            <div className="flex flex-col flex-1">
              <label className="block">
                <span className="block text-sm font-medium mb-1.5">
                  Select Brand
                </span>
                <span className="flex items-center peer w-full transition duration-200 px-3.5 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent border border-gray-300 hover:border-gray-1000  ">
                  <select name="" id="" className="w-full ">
                    <option value="">Choose a Brand</option>
                    {brands &&
                      brands.map((brand) => (
                        <option
                          key={brand}
                          value={brand}
                          className=" capitalize"
                        >
                          {brand}
                        </option>
                      ))}
                  </select>
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <SaveButton></SaveButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;

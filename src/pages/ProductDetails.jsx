import { useState } from "react";
import { BackButton, BreadCaumb, SaveButton } from "../data/component";
import { useEffect } from "react";
import InputCom from "../components/InputCom";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [categories, setCategories] = useState([]);

  const params = useParams();

  const url = "https://dummyjson.com/products/" + params.id;
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return (
    <div className="p-2">
      <BreadCaumb
        title="Products"
        parentUrl="/pages/products/list"
        parentTitle="Products"
        pageTitle="Details"
        buttonGroup={
          <>
            <BackButton url="/pages/products/list"></BackButton>
          </>
        }
      ></BreadCaumb>

      <div className="py-5  flex gap-10 ">
        <div className=" w-760">
          <div className="pb-2">
            <img src={data.thumbnail} alt={data.title} className="w-full h-[500px] object-fill" />
          </div>
          <div className="flex gap-2 w-full h-20 overflow-auto">
            {data.images &&
              data.images.map((item) => (
                <img
                  key={item}
                  src={item}
                  alt=""
                  className=" w-20 h-full  object-cover rounded flex-1"
                />
              ))}
          </div>
        </div>
        <div className=" pt-5  flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 pb-3">
              {data.title}
            </h2>

            <h4 className="inline-block text-center text-2xl font-bold">
              ${data.price}
            </h4>
          </div>
          <p className="text-gray-500 text-sm pb-10">{data.description}</p>
          <p className=" capitalize font-bold text-gray-500 pb-2">
            Category : 
            <span className="font-normal text-gray-800">{data.category}</span>
          </p>
          <p className=" capitalize font-bold text-gray-500 pb-2">
            Brand : 
            <span className="font-normal text-gray-800">{data.brand}</span>
          </p>
          <p className=" capitalize font-bold text-gray-500 pb-2">
            Stock : 
            <span className="font-normal text-gray-800">{data.stock}</span>
          </p>
          <p className=" capitalize font-bold text-gray-500 pb-2">
            Discount Percentage : 
            <span className="font-normal text-gray-800">
              {data.discountPercentage}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

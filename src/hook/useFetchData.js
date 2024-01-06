import { useEffect } from "react";
import { useState } from "react";

export default function useFetchData(){
  const [datas, setDatas] = useState({});
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const paginateList = Math.ceil(datas.total / limit);
  const paginateArray = [];
   const limitArray= [10, 20, 30, 50, 100];

  const url ="https://dummyjson.com/products/";
  const mainUrl = url + "search?q=" +
    search +
    "&limit=" +
    limit +
    "&skip=" +
    skip;


  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        fetch(mainUrl)
          .then((res) => res.json())
          .then((data) => {
            setDatas(data);
            setLoading(false);
          });
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [mainUrl]);
  

  for (let i = 1; i <= paginateList; i++) {
    paginateArray.push(i);
  }
  
  const prevPaginate = () => {
    setSkip(skip - limit);
  }

  const nextPaginate = () => {
    setSkip(skip + limit);
  }
  const handlePaginateItem = (item) => {
  setSkip((item - 1) * limit);
  }

  const handleLimit = (input) =>{
    setLimit(input);
  }

  const handleSearch = (input) =>{
    setSearch(input);
  }



  return {
    datas,
    setDatas,
    limit, 
    limitArray,
    skip, 
    search, 
    loading, 
    paginateArray,
    prevPaginate, 
    nextPaginate,
    handleLimit,
    handleSearch,
    handlePaginateItem,
  }

}
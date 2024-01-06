import {
  BreadCaumb,
  TableView,
  ExportButton,
  CreateButton,
} from "../data/component";

const ProductList = () => {
  const columnList = ["category", "price", "stock"];
  // Delete
  const handleDelete = (id) => {
    fetch("https://dummyjson.com/products/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newProducts = datas.products.filter(
          (item) => item.id !== data.id
        );
        setDatas({ ...datas, total: datas.total - 1, products: newProducts });
      });
  };

  return (
    <div className="p-2">
      <BreadCaumb
        title="Products"
        parentUrl="/pages/products"
        parentTitle="Products"
        pageUrl="/pages/products/list"
        pageTitle="List"
        buttonGroup={
          <>
            <ExportButton></ExportButton>
            <CreateButton url="/pages/products/create"></CreateButton>
          </>
        }
      ></BreadCaumb>

      <TableView
        handleDelete={handleDelete}
        columnList={columnList}
      ></TableView>
    </div>
  );
};

export default ProductList;

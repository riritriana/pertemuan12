import { useEffect } from "react";
import { useState } from "react";

export default function Product() {
  const productData = [
    {
      id: 1,
      productName: "Cardigan Rajut",
      price: 200000,
      image: "https://i.pinimg.com/564x/7b/d1/35/7bd13515976c2c8c9a565b5063319668.jpg",
    },
    {
      id: 2,
      productName: "Kemeja Lengan panjang ",
      price: 130000,
      image: "https://i.pinimg.com/564x/6c/cf/3e/6ccf3e4e447a76f6ac8483366e6b77d4.jpg",
    },
    {
      id: 3,
      productName: "Baju Batik Wanita",
      price: 125000,
      image: "https://i.pinimg.com/564x/92/a6/a8/92a6a8f7a0f9d68899776f65c0f8d8d0.jpg",
    },
  ];

  const saveProduct = localStorage.getItem("products");
  const [products, setProducts] = useState(
    saveProduct ? JSON.parse(saveProduct) : productData);
    useEffect(() => {
      localStorage.setItem("products", JSON.stringify(products));
    }, [products]);
    
  // const [products, setProducts] = useState(productData);// untuk menyimpan data produk yg akan ditampilak dikomponen
  const [formData, setformData] = useState(null); // untuk menampung data dari form input sementara sebelum di add/update ke daftar product
  const [isEdit, setIsEdit] = useState(false); // Untuk menentukan apakah form digunakan untuk edit atau add

  // Fungsi untuk menambah produk baru
  function handleAdd() {
    //membuat id baru 
    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    // menyalin array lama dan membuat array baru
    setProducts([...products, { ...formData, id: newId }]);
    setformData(null); // membersihkan data input form 
  }

  // Fungsi untuk memperbarui produk yang ada
  function handleUpdate() {
    setProducts(
      products.map((p) => (p.id === formData.id ? formData : p))
    );
    setformData(null);
    setIsEdit(false);
  }

  return (
    <>
      <h1 className="title"> React Store</h1>
      <button className="add-button" onClick={() => {
        setformData({ productName: "", price: "", image: "" });
        setIsEdit(false); // Set mode ke add
      }}>Add</button>
      <div className="product-container">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt="" className="product-image"/>
            <p className="product-name">{p.productName}</p>
            <p className="product-price">{p.price}</p>
            <button className="update-button" onClick={() => {
              setformData(p);
              setIsEdit(true); // Set mode ke edit
            }}>Update</button>
        <button className="delete-button"
        onClick={() => {
            if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
            setProducts(products.filter((item) => item.id !== p.id));
            }}}> Delete </button>
          </div>
        ))}
      </div>

      {formData && (
        <div className="form-container" >
          <form className="form" onSubmit={(e) => {
            e.preventDefault();// untuk mencegah halama reload
            isEdit ? handleUpdate() : handleAdd();
          }}>
            <label>Product Name
              <input
              className="form-input"
                type="text"
                value={formData.productName}
                onChange={(e) => setformData({ ...formData, productName: e.target.value })}
              />
            </label>
            <label>Price
              <input
                className="form-input"
                type="text"
                value={formData.price}
                onChange={(e) => setformData({ ...formData, price: parseFloat(e.target.value) || 0 })}
              />
            </label>
            <label>Image Url
              <input
                 className="form-input"
                type="text"
                value={formData.image}
                onChange={(e) => setformData({ ...formData, image: e.target.value })}
              />
            </label>
            <button type="submit" className="submit-button">{isEdit ? "Update" : "Add"}</button>
            <button type="button" className="cancel-button"  onClick={() => setformData(null)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
}

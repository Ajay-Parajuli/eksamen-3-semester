import { useEffect, useState } from "react";
import "./create.css";
import imgPlaceholder from "./img-placeholder.jpg";

export const PostForm = ({ savePost, products }) => {
  const [brand, setBrand] = useState("");
  const [img1, setImg1] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [materiale, setMateriale] = useState("");
  const [stand, setStand] = useState("");
  const [stock, setStock] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [color, setColor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (products) {
      setBrand(products.brand);
      setImg1(products.img1);
      setPrice(products.price);
      setSize(products.size);
      setMateriale(products.materiale);
      setStand(products.stand);
      setStock(products.stock);
      setColor(products.color);
      setSubCategory(products.subcategory);
    }
  }, [products]);

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImg1(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage("");
    } else {
      setErrorMessage("The image file is too big!");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      img1: img1,
      brand: brand,
      Price: price,
      Size: size,
      Materiale: materiale,
      stock: stock,
      stand: stand,
      color: color,
      subcategory: subcategory,
    };

    const validForm =
      formData.brand &&
      formData.img1 &&
      formData.Price &&
      formData.stock &&
      formData.stand &&
      formData.Size &&
      formData.Materiale &&
      formData.color &&
      formData.subcategory;

    if (validForm) {
      savePost(formData);
    } else {
      setErrorMessage("Udfyld alle felter");
    }
  }

  return (
    <div className="formdata">
      <div>
        <h2>Tilføje et produkt</h2>
      </div>
      <form className="post-form" onSubmit={handleSubmit}>
        <p className="img-instruction">Vælg et billede</p>
        <input type="file" className="file-input" placeholder="Billede" accept="image/*" onChange={handleImageChange} />
        <img className="image-preview" src={img1} alt="Choose" onError={(event) => (event.target.src = imgPlaceholder)} />
        <input type="number" value={price} placeholder="pris" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" value={brand} placeholder="brand" onChange={(e) => setBrand(e.target.value)} />
        <input type="text" value={size} placeholder="size" onChange={(e) => setSize(e.target.value)} />

        <input type="text" value={stand} placeholder="stand" onChange={(e) => setStand(e.target.value)} />

        <select>
          <option value="Ny" onChange={(e) => setStand(e.target.value)}>
            Ny
          </option>
          <option value="Næsten Ny" onChange={(e) => setStand(e.target.value)}>
            Næsten Ny
          </option>
          <option value="Gammel" onChange={(e) => setStand(e.target.value)}>
            Gammel
          </option>
        </select>

        <input type="text" value={materiale} placeholder="materiale" onChange={(e) => setMateriale(e.target.value)} />
        <input type="text" value={stock} placeholder="stock" onChange={(e) => setStock(e.target.value)} />
        <input type="text" value={color} placeholder="farve" onChange={(e) => setColor(e.target.value)} />
        <input type="text" value={subcategory} placeholder="subcategory" onChange={(e) => setSubCategory(e.target.value)} />
        <p className="text-error">{errorMessage}</p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

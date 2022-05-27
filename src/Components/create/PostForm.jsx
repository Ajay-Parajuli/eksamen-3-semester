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
      <div className="h2">
        <h2>Tilføje et produkt</h2>
      </div>
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="felter">
          <p className="img-instruction">Vælg et billede</p>
          <input type="file" className="file-input" placeholder="Billede" accept="image/*" onChange={handleImageChange} />
          <br></br>
        </div>

        <div className="felterimg">
          <img className="image-preview" src={img1} alt="Choose" onError={(event) => (event.target.src = imgPlaceholder)} />
          <br></br>
        </div>
        <div className="felter">
          <p>Pris på produktet</p>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <br></br>
        </div>

        <div className="felter">
          <p>Navnet på brand</p>
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
          <br></br>
        </div>

        <div className="felter">
          <p>Angiv størrrelse</p>
          <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
          <br></br>
        </div>

        <div className="felter">
          <p>Angiv tøj stand</p>
          <select value={stand} onChange={(e) => setStand(e.target.value)}>
            <option value="">Vælg</option>
            <option value="Ny">Ny</option>
            <option value="Næsten Gammel">Næsten Ny</option>
            <option value="Gammel">Gammel</option>
          </select>
        </div>

        <div className="felter">
          <p>Materiale</p>
          <input type="text" value={materiale} onChange={(e) => setMateriale(e.target.value)} />
          <br></br>
        </div>

        <div className="felter">
          <p>Angiv antal stk. på lager</p>
          <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
          <br></br>
        </div>

        <div className="felter">
          <p>Farve</p>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
          <br></br>
        </div>

        <div className="felter">
          <p>Vælg tøj category</p>
          <select value={subcategory} onChange={(e) => setSubCategory(e.target.value)}>
            <option value="">Vælg</option>
            <option value="Jeans og Bukser">Jeans og Bukser</option>
            <option value="Sweatshirts og Hoodies">Sweatshirts og Hoodies</option>
            <option value="Tshirt og Poloer">Tshirts og poloer</option>
            <option value="Skjorter">Skjorter</option>
            <option value="Sweatre">Sweatre</option>
            <option value="Sko">Sko</option>
            <option value="Shorts">Shorts</option>
            <option value="Jakker">Jakker</option>
          </select>
          <br></br>
        </div>
        <div className="feltertext">
          <span className="text-error">{errorMessage}</span>
        </div>
        <div className="tac">
          <button className="tacbtn" type="submit">
            Gem
          </button>
        </div>
      </form>
    </div>
  );
};

import { useEffect, useState } from "react";

export const PostForm = ({ savePost, post }) => {
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [materiale, setMateriale] = useState("");
  const [stand, setStand] = useState("");
  const [stock, setStock] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      setBrand(post.brand);
      setImage(post.image);
      setPrice(post.Price);
      setSize(post.size);
      setMateriale(post.materiale);
      setStand(post.stand);
      setStock(post.stock);
    }
  }, [post]);

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
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
      image: image,
      brand: brand,
      price: price,
      size: size,
      materiale: materiale,
      stock: stock,
      stand: stand,
    };

    const validForm = formData.brand && formData.image && formData.price && formData.stock && formData.stand && formData.size && formData.materiale;

    if (validForm) {
      savePost(formData);
    } else {
      setErrorMessage("Udfyld alle felter");
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <p className="img-instruction">Vælg et billede</p>
      <label>
        <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
      </label>

      <label>
        Prisen?
        <input type="number" value={price} placeholder="Beløb" onChange={(e) => setPrice(e.target.value)} />
      </label>

      <label>
        Brand
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </label>

      <label>
        Size?
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </label>

      <label>
        Stand
        <input type="text" value={stand} onChange={(e) => setStand(e.target.value)} />
      </label>

      <label>
        Materiale?
        <input type="text" value={materiale} onChange={(e) => setMateriale(e.target.value)} />
      </label>

      <label>
        Stock?
        <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
      </label>
      <p className="text-error">{errorMessage}</p>
      <button type="submit">Save</button>
    </form>
  );
};

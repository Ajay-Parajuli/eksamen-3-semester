import { useEffect, useState } from "react";

export const PostForm = ({ savePost, post }) => {
  const [city, setCitys] = useState("");
  const [image, setImage] = useState("");
  const [budget, setBudget] = useState("");
  const [housing, setHousing] = useState("");
  const [position, setPosition] = useState("");
  const [pets, setPets] = useState("");
  const [personality, setPersonality] = useState("");
  const [smoking, setSmoking] = useState("");
  const [eatingHabits, setEatingHabits] = useState("");
  const [partyHabits, setPartyHabits] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [language, setLanguage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      setCitys(post.city);
      setImage(post.image);
      setBudget(post.budget);
      setHousing(post.housing);
      setPosition(post.position);
      setPets(post.pets);
      setPersonality(post.personality);
      setLanguage(post.language);
      setSmoking(post.smoking);
      setEatingHabits(post.eatingHabits);
      setPartyHabits(post.partyHabits);
      setBio(post.bio);
      setInterests(post.interests);
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
      city: city,
      budget: budget,
      housing: housing,
      position: position,
      pets: pets,
      personality: personality,
      language: language,
      smoking: smoking,
      eatingHabits: eatingHabits,
      partyHabits: partyHabits,
      bio: bio,
      interests: interests,
    };

    const validForm =
      formData.city &&
      formData.image &&
      formData.budget &&
      formData.housing &&
      formData.position &&
      formData.pets &&
      formData.personality &&
      formData.language &&
      formData.smoking &&
      formData.eatingHabits &&
      formData.partyHabits &&
      formData.bio &&
      formData.interests;

    if (validForm) {
      savePost(formData);
    } else {
      setErrorMessage("Udfyld alle felter");
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <p className="img-instruction">Vælg dit profil billede</p>
      <label>
        <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
      </label>

      <b>Informationer</b>
      <p>Generelt om dig</p>

      <label>
        Hvad er dit månedlige budget?
        <input type="number" value={budget} placeholder="Beløb" onChange={(e) => setBudget(e.target.value)} />
      </label>

      <label>
        Hvor søger du bolig?
        <input type="text" value={city} placeholder="eks. Aarhus C, Aarhus N.." onChange={(e) => setCitys(e.target.value)} />
      </label>

      <label>
        Hvad er din stilling?
        <input type="text" value={position} placeholder="Job eller Uddanelse" onChange={(e) => setPosition(e.target.value)} />
      </label>
      <p className="text-error">{errorMessage}</p>
      <button type="submit">Save</button>
    </form>
  );
};

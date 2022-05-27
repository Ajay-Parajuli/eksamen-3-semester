/*import { doc, getDoc, updateDoc, deleteDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm } from "./PostForm";
import { productsRef } from "../firebase-config";

export const Update = ({ showLoader }) => {
  const params = useParams();
  const [post, setPost] = useState({});
  const postId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    async function getPost() {
      showLoader(true);
      const docRef = doc(productsRef, postId);
      const docData = await getDoc(docRef);
      setPost(docData.data());
      showLoader(false);
    }

    getPost();
  }, [showLoader, postId]);

  async function handleSubmit(postToUpdate) {
    showLoader(true);
    const docRef = doc(productsRef, postId);
    await updateDoc(docRef, postToUpdate);
    navigate("/");
  }

  async function deletePost() {
    const confirmDelete = window.confirm(`Slet dette opslag, ${post.title}?`);
    if (confirmDelete) {
      showLoader(true);
      const docRef = doc(productsRef, postId);
      await deleteDoc(docRef);
      navigate("/");
    }
  }

  return (
    <section className="page">
      <h1>Opdater opslaget</h1>
      <PostForm savePost={handleSubmit} post={post} />
      <button className="btn-outline" onClick={deletePost}>
        Slet
      </button>
    </section>
  );
};/*/

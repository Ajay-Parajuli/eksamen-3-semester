import React from "react";
import { getAuth } from "firebase/auth";
import { addDoc, serverTimestamp } from "@firebase/firestore";
import { useEffect } from "react";
import { productsRef } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { PostForm } from "../Components/create/PostForm";

export const Create = ({ showLoader }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    showLoader(false);
  }, [showLoader]);

  async function handleSubmit(newPost) {
    showLoader(true);
    newPost.createdAt = serverTimestamp();
    newPost.uid = auth.currentUser.uid;
    await addDoc(productsRef, newPost);

    showLoader(false);
    navigate("/clothing");
  }

  return (
    <section className="page">
      <PostForm savePost={handleSubmit} />
    </section>
  );
};

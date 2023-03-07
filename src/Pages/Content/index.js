import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Content() {
  const [post, setPost] = useState([]);
  const { idContent } = useParams();

  async function loadPosts() {
    try {
      const response = await axios.get(
        `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${idContent} `
      );
      const data = response.data;
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadPosts();
  }, []);

  console.log(idContent);
  return <div>Teste</div>;
}

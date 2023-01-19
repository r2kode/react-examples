import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

export const useOpenAi = () => {
  const [imageDescription, setImageDescription] = useState("");
  const [image, setImage] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: imageDescription,
      n: 1,
      size: "512x512",
    });

    console.log(res.data);
    setImage(res.data.data[0].url ?? "");
  };

  return { image, imageDescription, generateImage, setImageDescription };
};

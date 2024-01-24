import { useOpenAi } from "./hooks/useOpenAi";

function DallE() {
  const { image, imageDescription, generateImage, setImageDescription } =
    useOpenAi();

  return (
    <div>
      <h1>Generate an Image using Open AI API</h1>
      <div>
        <textarea
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setImageDescription(e.target.value)}
          cols={60}
          rows={5}
        ></textarea>
      </div>
      <button onClick={generateImage}>Generate an Image</button>
      <div>
        {image.length > 0 ? <img src={image} alt={imageDescription} /> : <></>}
      </div>
    </div>
  );
}

export default DallE;

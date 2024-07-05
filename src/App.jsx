import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lowerColor, setLowerColor] = useState([20, -120, 0]);
  const [upperColor, setUpperColor] = useState([170, 150, 220]);
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  useEffect(() => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("lower_color", JSON.stringify(lowerColor));
      formData.append("upper_color", JSON.stringify(upperColor));

      fetch("http://localhost:5000/detect-spots", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setResultImage(url);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [image, lowerColor, upperColor]);

  const handleColorChange = (colorType, index, value) => {
    const color = colorType === "lower" ? [...lowerColor] : [...upperColor];
    color[index] = parseInt(value, 10);
    if (colorType === "lower") {
      setLowerColor(color);
    } else {
      setUpperColor(color);
    }
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="App">
      <h1>Detecção de Manchas em Folhas de Milho</h1>
      <input type="file" onChange={handleImageUpload} />
      <div>
        <h2>Configuração de Cor</h2>
        <div>
          <h3>Cor Inferior</h3>
          {lowerColor.map((value, index) => (
            <input
              key={index}
              type="number"
              value={value}
              onChange={(e) =>
                handleColorChange("lower", index, e.target.value)
              }
            />
          ))}
        </div>
        <div>
          <h3>Cor Superior</h3>
          {upperColor.map((value, index) => (
            <input
              key={index}
              type="number"
              value={value}
              onChange={(e) =>
                handleColorChange("upper", index, e.target.value)
              }
            />
          ))}
        </div>
      </div>
      {resultImage && <img src={resultImage} alt="Processed" />}
    </div>
  );
}

export default App;

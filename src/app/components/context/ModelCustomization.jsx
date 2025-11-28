const { createContext, useContext, useState } = require("react");

const ModelCustomizationContext = createContext({});

export const ModelCustomizationProvider = (props) => {
  const [modelList] = useState([
    {
      modelId: 0,
      modelLabel: "Arm Chair",
      slug: "arm-chair",
      mobileRotation: [-0.6, 3.7, 0],
      desktopRotation: [-0.2, Math.PI + Math.PI / 12, 0.1],
      modelSlug: "",
      haveTexture: true,
      haveChain: false,
      haveColor: true,
    },
    {
      modelId: 1,
      modelLabel: "Modern Accent Chair",
      slug: "mordern-accent-chair",
      mobileRotation: [-0.6, 3.7, 0],
      desktopRotation: [-0.2, Math.PI + Math.PI / 12, 0.1],
      modelSlug: "",
      haveTexture: false,
      haveChain: false,
      haveColor: true,
    },
    {
      modelId: 2,
      modelLabel: "Winter Jacket",
      slug: "winter-jacket",
      mobileRotation: [0.1, Math.PI * 0.75, 0],
      desktopRotation: [0.1, Math.PI * 0.75, 0],
      modelSlug: "",
      haveTexture: false,
      haveChain: true,
      haveColor: true,
    },
  ]);

  const [textureList] = useState([
    {
      textureLabel: "Default",
      textureId: 0,
    },
    {
      textureLabel: "Texture 1",
      textureId: 1,
    },
    {
      textureLabel: "Texture 2",
      textureId: 2,
    },
  ]);

  const [chainList] = useState([
    {
      chainLabel: "Default",
      chainId: 0,
    },
    {
      chainLabel: "Chain 1",
      chainId: 1,
    },
    {
      chainLabel: "Chain 2",
      chainId: 2,
    },
  ]);

  const [colorList] = useState([
    {
      color: "currentcolor",
      colorId: 0,
    },
    {
      color: "#fff",
      colorId: 1,
    },
    {
      color: "#fff",
      colorId: 2,
    },
    {
      color: "#fff",
      colorId: 3,
    },
    {
      color: "#fff",
      colorId: 4,
    },
    {
      color: "#fff",
      colorId: 5,
    },
  ]);

  const [selectedModel, setSelectedModel] = useState(modelList[0]);
  const [selectedTexture, setSelectedTexture] = useState(textureList[0]);
  const [selectedChain, setSelectedChain] = useState(chainList[0]);
  const [selectedColor, setSelectedColor] = useState(colorList[0]);

  return (
    <ModelCustomizationContext.Provider
      value={{
        modelList,
        textureList,
        colorList,
        selectedModel,
        setSelectedModel,
        selectedTexture,
        setSelectedTexture,
        selectedChain,
        setSelectedChain,
        selectedColor,
        setSelectedColor,
      }}
    >
      {props.children}
    </ModelCustomizationContext.Provider>
  );
};

export const useModelCustomization = () => {
  const context = useContext(ModelCustomizationContext);

  return context;
};

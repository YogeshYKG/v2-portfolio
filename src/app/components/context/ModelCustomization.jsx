const { createContext, useContext, useState, useEffect } = require("react");

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
      colorId: 0,
      colorName: "Default",
      hex: "currentcolor",
    },
    // --- Warm Neutrals (Arm Chair, Sofa) ---
    {
      colorId: 1,
      colorName: "Warm Beige",
      hex: "#D8C7A6",
    },
    {
      colorId: 2,
      colorName: "Sandstone",
      hex: "#CBBBA0",
    },
    {
      colorId: 3,
      colorName: "Cocoa Brown",
      hex: "#6B4F37",
    },
    {
      colorId: 4,
      colorName: "Charcoal",
      hex: "#3A3A3A",
    },

    // --- Modern Designer Shades ---
    {
      colorId: 5,
      colorName: "Slate Blue",
      hex: "#4A5C7B",
    },
    {
      colorId: 6,
      colorName: "Forest Green",
      hex: "#2F4F3E",
    },
    {
      colorId: 7,
      colorName: "Muted Olive",
      hex: "#7A8365",
    },

    // --- Premium Textile Colors (Also for Jackets) ---
    {
      colorId: 8,
      colorName: "Deep Burgundy",
      hex: "#5A1A1A",
    },
    {
      colorId: 9,
      colorName: "Midnight Navy",
      hex: "#1A2735",
    },
    {
      colorId: 10,
      colorName: "Arctic White",
      hex: "#F4F4F4",
    },
    {
      colorId: 11,
      colorName: "Storm Grey",
      hex: "#8D8D8D",
    },
  ]);

  const [selectedModel, setSelectedModel] = useState(modelList[0]);
  const [selectedTexture, setSelectedTexture] = useState(textureList[0]);
  const [selectedChain, setSelectedChain] = useState(chainList[0]);
  const [selectedColor, setSelectedColor] = useState(colorList[0]);

  useEffect(() => {
    if (selectedTexture == textureList[0]) {
      setSelectedColor(colorList[0]);
    }
  }, [selectedTexture]);

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

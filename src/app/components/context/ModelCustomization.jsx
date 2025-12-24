const { createContext, useContext, useState, useEffect } = require("react");

const ModelCustomizationContext = createContext({});

// 🔥 Master configuration for each model
export const MODEL_CONFIG = {
  0: {
    textureLabel: "Texture",
    colorLabel: "Color",
    hideTextures: [],
    hideColors: [5, 1],
  },

  1: {
    textureLabel: "No Texture",
    colorLabel: "Color",
    hideTextures: [0], // example
    hideColors: [], // example
  },

  2: {
    textureLabel: "Chain",
    colorLabel: "Chain Color",
    hideTextures: [2],
    hideColors: [4],
  },
};

export const ModelCustomizationProvider = (props) => {
  const [modelList] = useState([
    {
      modelId: 0,
      modelLabel: "Arm Chair",
      slug: "arm-chair",
      mobileRotation: [-0.6, 3.7, 0],
      desktopRotation: [-0.2, Math.PI + Math.PI / 12, 0.1],
      textureLabel: "Selected Texture :",
      colorLabel: "Selected Color :",
      textureLabelMobile: "Texture :",
      colorLabelMobile: "Color :",
      haveTexture: true,
      haveChain: false,
      haveColor: true,
    },
    {
      modelId: 1,
      modelLabel: "Modern Accent Chair",
      slug: "modern-accent-chair",
      mobileRotation: [-0.6, 3.7, 0],
      desktopRotation: [-0.2, Math.PI + Math.PI / 12, 0.1],
      textureLabel: "Selected Texture :",
      colorLabel: "Leg Color :",
      colorLabel_varient1: "Armpit Color :",
      colorLabel_varient2: "Fabric Color :",
      textureLabelMobile: "Texture :",
      colorLabelMobile: "Leg :",
      colorLabelMobile_varient1: "Armpit :",
      colorLabelMobile_varient2: "Fabric :",
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
      textureLabel: "Selected Chain :",
      colorLabel: "Selected Color :",
      textureLabelMobile: "Texture :",
      colorLabelMobile: "Color :",
      haveTexture: false,
      haveChain: true,
      haveColor: true,
    },
  ]);

  const [textureList, setTextureList] = useState([
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

  const [colorList, setColorList] = useState([
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
  const [selectedColor, setSelectedColor] = useState(colorList[0]);
  const [selectedColor_varient1, setSelectedColor_varient1] = useState(
    colorList[0]
  );
  const [selectedColor_varient2, setSelectedColor_varient2] = useState(
    colorList[0]
  );

  useEffect(() => {
    const modelId = selectedModel?.modelId ?? 0;

    const { textureLabel, colorLabel, hideTextures, hideColors } =
      MODEL_CONFIG[modelId] || MODEL_CONFIG[0];

    // 🔹 Update texture list (with label + filter)
    setTextureList((prev) =>
      prev
        .filter((t) => !hideTextures.includes(t.textureId))
        .map((item) =>
          item.textureId === 0
            ? { ...item, textureLabel: "Default" }
            : { ...item, textureLabel: `${textureLabel} ${item.textureId}` }
        )
    );

    // 🔹 Update color list (with label + filter)
    setColorList((prev) =>
      prev
        .filter((c) => !hideColors.includes(c.colorId))
        .map((item) =>
          item.colorId === 0
            ? { ...item, colorName: "Default" }
            : { ...item, colorName: `${colorLabel} ${item.colorId}` }
        )
    );
  }, [selectedModel]);

  useEffect(() => {
    if (selectedTexture == textureList[0]) {
      setSelectedColor(colorList[0]);
      setSelectedColor_varient1(colorList[0]);
      setSelectedColor_varient2(colorList[0]);
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
        selectedColor,
        setSelectedColor,
        selectedColor_varient1,
        setSelectedColor_varient1,
        selectedColor_varient2,
        setSelectedColor_varient2,
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

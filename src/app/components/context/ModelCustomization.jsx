const { createContext, useContext, useState } = require("react");

const ModelCustomizationContext = createContext({});

export const ModelCustomizationProvider = (props) => {
  const [modelList] = useState([
    {
      modelId: 0,
      modelLabel: "Arm Chair",
      mobileRotation: [-0.6, 3.7, 0],
      desktopRotation: [-0.2, Math.PI + Math.PI / 12, 0.1],
      modelSlug: "",
    },
    {
      modelId: 1,
      modelLabel: "Modern Accent Chair",
      mobileRotation: [-0.6, 3.7, 0],
      desktopRotation: [-0.2, Math.PI + Math.PI / 12, 0.1],
      modelSlug: "",
    },
    {
      modelId: 2,
      modelLabel: "Winter Jacket",
      mobileRotation: [-0.6, 3.7, 0],
      desktopRotation: [-0.2, Math.PI + Math.PI / 12, 0.1],
      modelSlug: "",
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

  const [selectedModel, setSelectedModel] = useState(modelList[0]);
  const [selectedTexture, setSelectedTexture] = useState(textureList[0]);

  return (
    <ModelCustomizationContext.Provider
      value={{
        modelList,
        textureList,
        selectedModel,
        setSelectedModel,
        selectedTexture,
        setSelectedTexture,
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

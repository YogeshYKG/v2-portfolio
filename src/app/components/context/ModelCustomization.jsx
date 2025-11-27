const { createContext, useContext, useState } = require("react");

const ModelCustomizationContext = createContext({});

export const ModelCustomizationProvider = (props) => {
  const [selectedModel, setSelectedModel] = useState("Model 1");
  const [selectedTexture, setSelectedTexture] = useState("Texture 1");

  return (
    <ModelCustomizationContext.Provider
      value={{
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

import seoData from "./seo.json";

export const getSeoMetaData = (pathname) => {
  return (
    seoData[pathname] || {
      title: "Default Title",
      description: "Default description",
    }
  );
};

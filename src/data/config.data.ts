import { ISiteData, IMainCategory } from "@/src/types/site.types";

export const siteData: ISiteData = {
  title: "테스트 블로그",
  description: "",
  keywords: "",
  author: "테스트",
  type: "website",
  url: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
  image: "",
};

export const mainCategory: IMainCategory = {
  mCategorys: ["사이퍼즈"],
};
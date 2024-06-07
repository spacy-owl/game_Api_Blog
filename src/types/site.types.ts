export interface ISiteData {
    title: string;
    description: string;
    url: string;
    type: string;
    image: string;
    keywords: string;
    author: string;
  }
  
  export interface IMetaData {
    title: string|string[];
    url?: string;
    description?: string;
    author?: string;
    keywords?: string;
    type?: string;
    tags?: string;
    section?: string;
    updated?: string;
    image?: string;
  }
  
  export interface IAppLayoutProps extends IMetaData {
    children: React.ReactNode;
  }

  export interface IMainCategory {
    mCategorys: string[];
  }
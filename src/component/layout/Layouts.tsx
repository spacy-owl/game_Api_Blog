import { Aside } from "./Aside";
import { Main } from "./Main";
import { IAppLayoutProps, IMetaData } from '@/src/types/site.types';
import { useRouter } from 'next/router';
import React from 'react';
import { Meta } from "./Meta";


export const Layouts = ({
    children, title, description, keywords, author, image, updated, tags, type, section,
  }: IAppLayoutProps) => {

    const { asPath, } = useRouter();

    const meta: IMetaData = {
        title,
        url: asPath,
        description,
        keywords,
        author,
        image,
        tags,
        type,
        section,
        updated,
      };


    return(
        <>
        <Meta meta={meta} />
        <Aside />
        <Main>{children}</Main>
        </>
    );
}

export default Layouts;
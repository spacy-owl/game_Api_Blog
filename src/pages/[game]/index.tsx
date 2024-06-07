import { useState } from "react";
import classes from "./search.module.css";
import {useRouter} from 'next/router'
import Layouts from "@/src/component/layout/Layouts";
import Image from "next/image";

export const Test = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const searchPage = () => {
    router.push(`/사이퍼즈/${name}`);
  }

  let searchTermClass = classes.searchTerm;

  switch (router.query.game) {
    case '사이퍼즈':
      searchTermClass += ` ${classes.cyphers}`;
      break;
    case '발로란트':
      searchTermClass += ` ${classes.valorant}`;
      break;
    default:
      break;
  }

    return (
      <Layouts title="닉네임 검색">
      <div className={classes.wrap}>
        <div className={classes.search}>
            <input type="text" className={classes.searchTerm} placeholder="닉네임 입력" onChange={onChange}/>
            <button type="submit" className={classes.searchButton} onClick={searchPage}>
              <i className="fa fa-search"></i>
          </button>
        </div>
        <div className={classes.gameLogo}>
        <Image
          src="/images/blog/search/cyphersLogo.png"
          alt="Neople 오픈 API"
          width={100}
          height={40}
        />
        </div>
      </div>
      </Layouts>
    );
  }

  export async function getServerSideProps({ params }) {
    const { game } = params;
  
    const validUrls = ['사이퍼즈'];
    if (!validUrls.includes(game)) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { game },
    };
  }

  
  export default Test;
import Layouts from "@/src/component/layout/Layouts";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import classes from "./cypherCSS.module.css";
import ListCyphers from "@/src/component/list/ListCyphers";
import CypherTh from "@/src/component/list/CypherTh";
import CypherUser from "@/src/component/card/CypherUser";

export const Cyphers_Search = () => {
    const router = useRouter();
    const [returnData, setReturnData] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:8080/cyphers`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                name: router.query.id,
                gameTypeId: "rating",
              }),
        })
        .then(res => res.json())
        .then(res => setReturnData(res));
    }, [router.query.id]);

    if (!returnData) {
        return <div>Loading...</div>;
    }

    console.log(returnData.matches.rows);
    console.log(returnData);

    return (
        <Layouts title='사이퍼즈 캐릭터 검색'>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <CypherUser nickname = {returnData.nickname} grade={returnData.grade} clanName={returnData.clanName}/>
            {/* <CypherUser /> */}
            </div>
            <CypherTh />
            {returnData.matches.rows.map((row) => (
            <ListCyphers row = {row}/>
            ))}
        </Layouts>
    );
}

export default Cyphers_Search;
import classes from "./CypherUser.module.css";

const CypherUser = (props:{nickname:string, grade:number, clanName:string}) => {
    return(
        <div className={classes.cypherProfile}>
            <div>
                <span>닉네임</span>
                <span>급수</span>
                <span>클랜</span>
            </div>
            <div>
                <span>{props.nickname}</span>
                <span>{props.grade}급</span>
                <span>{props.clanName != null ? props.clanName : '-'}</span>
            </div>
        </div>
    );
}

export default CypherUser;
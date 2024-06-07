import { CyphersMatchInfo } from "@/src/types/cypher.types";
import classes from "./ListCyphers.module.css";
import { CommaFormat } from "@/src/util/Comma.js";

const ListCyphers = ({ row }: CyphersMatchInfo) => {

    let resultColor = '';
    let positionName = '';

    switch (row.playInfo.result) {
        case 'lose':
            resultColor += ` ${classes.lose}`;
            break;
        case 'win':
            resultColor += ` ${classes.win}`;
            break;
        default:
            break;
    }

    switch (row.position.name) {
        case '원거리딜러':
            positionName += '원딜';
            break;
        case '근거리딜러':
            positionName += '근딜';
            break;
        default:
            positionName += row.position.name;
            break;
    }

    const timeArr = row.date.split(" ");


    return (
        <div className={classes.matchWrap}>
            <div className={resultColor}>
                <p>{timeArr[0]}</p>
                <p>{timeArr[1]}</p>
                <p>{row.playInfo.partyUserCount == 0 ? ('[ 솔로 플레이 ]') : ('[ ' + row.playInfo.partyUserCount + '인 파티 ]')}</p>
                <p>{'[' + row.playInfo.result + ']'}</p>
            </div>
            <div className={classes.matchDetailWrap}>
                <div>
                    <div>
                        <img src={`https://img-api.neople.co.kr/cy/characters/${row.playInfo.characterId}?zoom=1`} alt={row.playInfo.characterName} />
                        <div style={{textAlign:'left'}}><span>{row.playInfo.characterName}</span>
                            <span>{positionName}</span></div>
                    </div>
                </div>
                <div>
                    <span>{'Lv.' + row.playInfo.level}</span>
                </div>
                <div>
                    <span>{row.playInfo.deathCount == 0 ? 'PERPECT' : ((row.playInfo.killCount + row.playInfo.assistCount) / row.playInfo.deathCount).toFixed(2)}</span>
                </div>
                <div>
                    <span>{row.playInfo.killCount}</span>
                </div>
                <div>
                    <span>{row.playInfo.deathCount}</span>
                </div>
                <div>
                    <span>{row.playInfo.assistCount}</span>
                </div>
                <div>
                    <span>{CommaFormat(row.playInfo.attackPoint)}</span>
                </div>
                <div>
                    <span>{CommaFormat(row.playInfo.damagePoint)}</span>
                </div>
                <div>
                    <span>{row.playInfo.battlePoint}</span>
                </div>
                <div>
                    <span>{row.playInfo.sightPoint}</span>
                </div>
            </div>
        </div>
    );
}

export default ListCyphers;
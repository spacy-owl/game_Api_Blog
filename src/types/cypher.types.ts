export interface CyphersMatchInfo {
    date: string;
    map: CyphersMap;
    matchId: string;
    playInfo: CyphersPlayInfo;
    position: CyphersPosition;
  }


interface CyphersMap {
    mapId: string;
    name: string;
}

export interface CyphersPlayInfo {
    assistCount: number;
    attackPoint: number;
    backAttackCount: number;
    battlePoint: number;
    characterId: string;
    characterName: string;
    comboCount: number;
    damagePoint: number;
    deathCount: number;
    demolisherKillCount: number;
    getCoin: number;
    guardTowerKillCount: number;
    guardianKillCount: number;
    healAmount: number;
    killCount: number;
    level: number;
    maxLifeTime: number;
    minLifeTime: number;
    partyInfo: CyphersPartyInfo[];
    partyUserCount: number;
    playTime: number;
    playTypeName: string;
    random: boolean;
    responseTime: number;
    result: string;
    sentinelKillCount: number;
    sightPoint: number;
    spellCount: number;
    spendCoin: number;
    spendConsumablesCoin: number;
    towerAttackPoint: number;
    trooperKillCount: number;
}

interface CyphersPartyInfo {
    playerId: string;
    nickname: string;
    characterId: string;
    characterName: string;
}

export interface CyphersPosition {
    attribute: CyphersAttribute[];
    explain: string;
    name: string;
}

interface CyphersAttribute {
    level: number;
    id: string;
    name: string;
}
function rankPlayer (quantityVictories, quantityDefeats) {
    let balanceRankedMatches = quantityVictories - quantityDefeats;
    let levelRank;

    if (balanceRankedMatches < 10) {
        levelRank = "Ferro";
    } else if (balanceRankedMatches >= 11 && balanceRankedMatches <= 20) {
        levelRank = "Bronze";
    } else if (balanceRankedMatches >= 21 && balanceRankedMatches <= 50) {
        levelRank = "Prata";
    } else if (balanceRankedMatches >= 51 && balanceRankedMatches <= 80) {
        levelRank = "Ouro";
    } else if (balanceRankedMatches >= 81 && balanceRankedMatches <= 90) {
        levelRank = "Diamante";
    } else if (balanceRankedMatches >= 91 && balanceRankedMatches <= 100) {
        levelRank = "Lendário";
    } else if (balanceRankedMatches >= 101) {
        levelRank = "Imortal";
    } 

    console.log("O herói tem de saldo de " + balanceRankedMatches + " está no nível de " + levelRank);

}

rankPlayer(80, 0);
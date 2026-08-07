// =========================
// DLS26 Tournament Hub
// script.js
// Part 1
// =========================

// -------------------------
// Player Database
// -------------------------

const players = [
{
    name: "Daniel",
    rating: 99,
    stars: "⭐⭐⭐⭐⭐",

    championships: 3,
    firstPlace: 3,
    secondPlace: 0,
    thirdPlace: 0,

    medals: 5,
	cups: 3,

    goals: 15,
    conceded: 4,

    tournaments: 3,

    gamesPlayed: 7,
    wins: 7,
    losses: 0,

    bestFinish: "Champion",
    worstFinish: "Champion"
},

{
    name: "Thiago",
    rating: 85,
    stars: "⭐⭐⭐⭐☆",

    championships: 0,
    firstPlace: 0,
    secondPlace: 1,
    thirdPlace: 1,

    medals: 2,
	cups: 0,

    goals: 8,
    conceded: 6,

    tournaments: 3,

    gamesPlayed: 6,
    wins: 2,
    losses: 4,

    bestFinish: "Secon Place",
    worstFinish: "Quarterfinal"
},

{
    name: "Samu",
    rating: 82,
    stars: "⭐⭐⭐☆☆",

    championships: 0,
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 2,

    medals: 2,
	cups: 0,

    goals: 7,
    conceded: 5,

    tournaments: 3,

    gamesPlayed: 5,
    wins: 2,
    losses: 3,

    bestFinish: "Third Place",
    worstFinish: "Quarter Final"
},

{
    name: "Tizi",
    rating: 60,
    stars: "⭐⭐☆☆☆",

    championships: 0,
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 1,

    medals: 1,
	cups: 0,

    goals: 4,
    conceded: 10,

    tournaments: 2,

    gamesPlayed: 2,
    wins: 0,
    losses: 2,

    bestFinish: "Thirdplace",
    worstFinish: "Semifinal"
},

{
    name: "Dylan",
    rating: 78,
    stars: "⭐⭐☆☆☆",

    championships: 0,
    firstPlace: 0,
    secondPlace: 1,
    thirdPlace: 0,

    medals: 1,
	cups: 0,

    goals: 4,
    conceded: 12,

    tournaments: 3,

    gamesPlayed: 6,
    wins: 1,
    losses: 5,

    bestFinish: "Final",
    worstFinish: "Semifinal"
}
];

{
    name: "75",
    rating: 78,
    stars: "⭐⭐⭐☆☆",

    championships: 0,
    firstPlace: 0,
    secondPlace: 1,
    thirdPlace: 0,

    medals: 1,
	cups: 0,

    goals: 4,
    conceded: 6,

    tournaments: 3,

    gamesPlayed: 6,
    wins: 2,
    losses: 1,

    bestFinish: "Final",
    worstFinish: "Final"
}
];

// -------------------------
// Trophy Room
// -------------------------

const tournaments = [

{
    name: "DLS Cup 1",
    champion: "Daniel",
    runnerUp: "Thiago",
    third: "Tizi"
},

{
    name: "DLS Cup 2",
    champion: "Daniel",
    runnerUp: "Dylan",
    third: "Samu"
},
	
{
    name: "DLS Cup 3",
    champion: "Daniel",
    runnerUp: "Mati",
    third: "Samu"
}

];

// -------------------------
// Helper Functions
// -------------------------

function goalsPerTournament(player){
    return (
        player.goals /
        player.tournaments
    ).toFixed(2);
}

function showPanel(){

    document.getElementById("bracketSection").style.display="none";

    document.getElementById("contentSection").style.display="block";

}

function showBracket(){

    document.getElementById("bracketSection").style.display="block";

    document.getElementById("contentSection").style.display="none";

}

function loadBracket(url){

    showBracket();

    document
        .getElementById("bracketFrame")
        .src=url;

}

function setActive(button){

    document
    .querySelectorAll(".button-container button")
    .forEach(btn=>btn.classList.remove("active"));

    button.classList.add("active");

}
// =========================
// Part 2
// Player Statistics
// =========================

function showStats(){

    showPanel();

    const container = document.getElementById("dynamicContent");

    let html = `
        <h2>📊 Player Statistics</h2>
        <p>Career records across all DLS Cups.</p>
    `;

    players.forEach(player => {

        const winRate =
            player.gamesPlayed > 0
            ? ((player.wins / player.gamesPlayed) * 100).toFixed(1)
            : "0.0";

        html += `

        <div class="player-card">

            <h3>${player.stars} ${player.name} (${player.rating})</h3>

            <p><strong>🎖️ Best Finish:</strong> ${player.bestFinish}</p>

            <p><strong>🎖️ Worst Finish:</strong> ${player.worstFinish}</p>
		
		    <p><strong>🏆 Cups:</strong> ${player.cups}</p>

            <p><strong>🥇 First Place:</strong> ${player.firstPlace}</p>

            <p><strong>🥈 Second Place:</strong> ${player.secondPlace}</p>

            <p><strong>🥉 Third Place:</strong> ${player.thirdPlace}</p>

            <p><strong>🏅 Total Medals:</strong> ${player.medals}</p>

            <hr>

            <p><strong>⚽ Career Goals:</strong> ${player.goals}</p>

            <p><strong>🥅 Career Goals Conceded:</strong> ${player.conceded}</p>

            <p><strong>🎯 Goals per Tournament:</strong> ${goalsPerTournament(player)}</p>

            <hr>

            <p><strong>🏟️ Tournaments Played:</strong> ${player.tournaments}</p>

            <p><strong>🎮 Games Played:</strong> ${player.gamesPlayed}</p>

            <p><strong>✅ Wins:</strong> ${player.wins}</p>

            <p><strong>❌ Losses:</strong> ${player.losses}</p>

            <p><strong>📈 Win Rate:</strong> ${winRate}%</p>

        </div>

        `;

    });

    container.innerHTML = html;

}
// =========================
// Part 3
// Power Rankings + Trophy Room
// =========================

// -------------------------
// Power Rankings
// -------------------------

function showPowerRankings(){

    showPanel();

    const container = document.getElementById("dynamicContent");

    const rankings = [...players].sort((a,b)=>b.rating-a.rating);

    let html = `
        <h2>⭐ Power Rankings</h2>
        <p>Ranked by overall rating.</p>
    `;

    rankings.forEach((player,index)=>{

        let tier = "Beginner";

        if(player.rating >= 95){
            tier = "Elite";
        }else if(player.rating >= 85){
            tier = "Excellent";
        }else if(player.rating >= 80){
            tier = "Good";
        }else if(player.rating >= 70){
            tier = "Average";
        }

        html += `
            <div class="power-rank">
                <span>#${index+1} ${player.name}</span>
                <span>${player.stars} (${player.rating}) • ${tier}</span>
            </div>
        `;
    });

    container.innerHTML = html;

}

// -------------------------
// Trophy Room
// -------------------------

function showTrophyRoom(){

    showPanel();

    const container = document.getElementById("dynamicContent");

    let html = `
        <h2>🏆 Trophy Room</h2>
        <p>History of every DLS Cup.</p>
    `;

    tournaments.forEach(tournament=>{

        html += `
            <div class="trophy">

                <h3>${tournament.name}</h3>

                <p>🥇 Champion: <strong>${tournament.champion}</strong></p>

                <p>🥈 Runner Up: ${tournament.runnerUp}</p>

                <p>🥉 Third Place: ${tournament.third}</p>

            </div>
        `;
    });

    html += `
        <hr>

        <h2>🏅 Trophy Cabinet</h2>

        <table>

            <tr>
                <th>Player</th>
                <th>🏆 Cups</th>
                <th>🥇</th>
                <th>🥈</th>
                <th>🥉</th>
                <th>🏅 Medals</th>
            </tr>
    `;

    players.forEach(player=>{

        html += `
            <tr>

                <td>${player.name}</td>
		
		        <td>${player.cups}</td>

                <td>${player.firstPlace}</td>

                <td>${player.secondPlace}</td>

                <td>${player.thirdPlace}</td>

                <td>${player.medals}</td>
		
            </tr>
        `;

    });

    html += `</table>`;

    container.innerHTML = html;

}
// -------------------------
// Default Page
// -------------------------

showBracket();

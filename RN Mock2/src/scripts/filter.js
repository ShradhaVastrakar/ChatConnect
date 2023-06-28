//add your js code here

let url = "https://jsonmock.hackerrank.com/api/football_matches"

function applyFilter(){
    let year = document.getElementById("year").value;
    let team1 = document.getElementById("team1").value;
    let team2 = document.getElementById("team2").value;

    let queryParams = "";

    if(year){
        queryParams += `&year=${year}`
    }

    if(team1){
        queryParams += `&team1=${team1}`
    }

    if(team2){
        queryParams += `&team1=${team2}`
    }

    fetchMatchesData(queryParams) 

}


function fetchMatchesData(queryParams){
  fetch(`${url}?${queryParams}`)
  .then((res) => res.json())
  .then((data) => {
    let tbody = document.getElementById("tbody")

    tbody.innerHTML = "";

    data.data.forEach((match) => {

        let tr = document.createElement("tr");

            let competition = document.createElement("td");
            competition.innerText = match.competition;
           
            let year = document.createElement("td");
            year.innerText = match.year;

            let round = document.createElement("td");
            round.innerText = match.round;

            let team1 = document.createElement("td");
            team1.innerText = match.team1;

            let team2 = document.createElement("td");
            team2.innerText = match.team2;

            let team1goals = document.createElement("td");
            team1goals.innerText = match.team1goals;

            let team2goals = document.createElement("td");
            team2goals.innerText = match.team2goals;

            tr.append(competition, year, round,team1,team2,team1goals,team2goals)
            tbody.append(tr)
    })
  })
  .catch((err) => console.log(err))
}

applyFilter()
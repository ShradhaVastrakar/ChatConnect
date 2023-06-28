//add your js code here

let url = "https://jsonmock.hackerrank.com/api/football_matches"
let currPage = 1;


function goToFilterPage() {
    window.location.href = "filter.html"
}


function fetchMatchData(page){
    fetch(`${url}?year=2011&page=${page}`)
    .then((res) => res.json())
    .then((data) => {

        let tbody = document.getElementById("tbody");
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

        let prevBtn = document.getElementById("prev")
        let nextBtn = document.getElementById("next")

        if(data.page > 1){
            prevBtn.disabled = false;
        } else{
            prevBtn.disabled = true;
        }


        if(data.page < data.total_pages){
            nextBtn.disabled = false;
        } else{
            nextBtn.disabled = true;
        }


    })

    .catch((err) => console.log(err))
}

function getPreviousPage(){
    if(currPage > 1){
        currPage--;
        fetchMatchData(currPage)
    }
}

function getNextPage(){
    currPage++;
    fetchMatchData(currPage)
}

fetchMatchData(currPage);
const gamesContainer = document.querySelector('#games');
const btn = document.querySelector('#start');

function getGames() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f944ba5052mshac1e633fddc46dcp121407jsndbb168205b0a',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
        .then(
           ( response) => response.json()
        ).then((data) => {
          console.log(data);
          let output = '';
          
          data.forEach((game) => {
            output += `
            <div class="col-md-4">
              <div class="well text-center">
                <img class="img-thumbnail" src="${game.thumbnail}" alt="Games_Images" />
                <h5>${game.title}</h5>
                <a class="btn btn-primary mb-4" href="${game.freetogame_profile_url}" target="_blank">Game Details</a>
              </div>
            </div>
            `
            gamesContainer.innerHTML = output;
        })
    }).catch(
            err => console.error(err)
        );
}

btn.addEventListener('click', getGames);


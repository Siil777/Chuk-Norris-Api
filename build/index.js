async function ChuckNorris() {
    const container = document.getElementById('Chuck-container');
    container.innerHTML = '';

    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const ChuckNorrisJokes = await response.json();
        const Chuck = ChuckNorrisJokes.value;

        const GetPhotoFromJson = ChuckNorrisJokes.icon_url;
        const middleDiv = document.createElement('div');
        const Img = document.createElement('img');
        if(Img){
            Img.src = GetPhotoFromJson;

            middleDiv.appendChild(Img);
        }
        console.log(GetPhotoFromJson);
        const div = document.createElement('div');
        div.textContent = `Jokes from Chuck never extra! ${Chuck}`;

        container.appendChild(div);
        container.appendChild(middleDiv);
    }catch(e){
        console.error('error of fetching jokes from Chuck', e)
    }
}
window.onload = ChuckNorris;


function increaseScore(team){
    const scoreId = `score${team}`;
    const scoreElement = document.getElementById(scoreId);
    let score = Number(scoreElement.textContent);
    scoreElement.textContent = ++score;

}

function decreaseScore(team){
    const scoreId = `score${team}`;
    const scoreElement = document.getElementById(scoreId);
    let score = Number(scoreElement.textContent);
    if (score > 0) {
        score--;
        scoreElement.textContent = score;
    } else {
        alert("Skor nasıl eksiye düşsün");
    }
}

function resetScore(team) {
    const resetId = `score${team}`;
    const resetElement = document.getElementById(resetId);
    resetElement.textContent = 0
}

function setScorePrompt(team) {
    const setId = `score${team}`;
    const setElement = document.getElementById(setId);
    const scoreInput = prompt("Yeni gol sayısı: ");
    if (scoreInput >= 0) {
        setElement.textContent = Number(scoreInput);
    } else {
        alert("Lütfen bir sayı giriniz.");
    }
}

function setTeamNamePrompt(team){
    const setName = `name${team}`;
    const setNameElement = document.getElementById(setName);
    const nameInput = prompt("Lütfen bir takım ismi giriniz ");

    if(nameInput.trim() !== ""){
        setNameElement.textContent = nameInput
    } else {
        alert("Geçerli bir isim giriniz.")
    }

}

futbolIcon.addEventListener("click", function(){
    if (futbolAudioPlay.paused) {
        futbolAudioPlay.play()
        futbolIcon.className = "fa-solid fa-music"
    } else {
        futbolAudioPlay.pause()
        futbolIcon.className = "fa-solid fa-futbol"
    }


})
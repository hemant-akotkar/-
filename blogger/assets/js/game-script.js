document.addEventListener('DOMContentLoaded', function() {
    let GAMEID = "";

    function startTypingAnimation(text, gameIDElement) {
        let index = 0;
    
        const typingInterval = setInterval(function() {
            gameIDElement.textContent += text[index];
            index++;
            if (index >= text.length) {
                clearInterval(typingInterval);
                playNextGameSound();
            }
        }, 50); // Typing speed in milliseconds
    }

    function playSuccessSound() {
        const successSound = document.getElementById('success-sound');
        successSound.play();
    }

    function playNextGameSound() {
        const successSound = document.getElementById('next-game');
        successSound.play();
    }

    function getGameID(updatedGameID){
        const now = new Date();
        const currentMinute = now.getHours() * 60 + now.getMinutes() + 1;
        const gameID = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate()}01${currentMinute.toString().padStart(4, '0')}`;
        if (GAMEID !== gameID + updatedGameID){
            document.getElementById("prediction-result").style.display = 'none';
            var gameIDElem = document.getElementById("gameID")
            gameIDElem.textContent = ""
            startTypingAnimation(gameID, gameIDElem)
        }
        GAMEID = gameID + updatedGameID;
    }

    function delayedPrediction(gameID) {
        const currentMinute = (new Date()).getMinutes(); // Get the current minute
        let savedPrediction = localStorage.getItem('prediction_' + gameID); // Retrieve the saved prediction
        let savedMinute = localStorage.getItem('minute_' + gameID); // Retrieve the saved minute

        console.log(`delayedPrediction gameID: ${gameID}, savedPrediction: ${savedPrediction}, savedMinute: ${savedMinute}`);
    
        // Check if there's a saved prediction and it's from the same minute
        if (savedPrediction && savedMinute && parseInt(savedMinute) === currentMinute) {
            // Use the saved prediction
            document.getElementById("prediction").textContent = savedPrediction;
            console.log("Got saved prediction: " + savedPrediction);
        } else {
            // Generate a new prediction
            const predictions = ['Big', 'Small'];
            const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    
            // Save the new prediction and current minute
            localStorage.setItem('prediction_' + gameID, randomPrediction);
            localStorage.setItem('minute_' + gameID, currentMinute);
    
            // Display the new prediction
            document.getElementById("prediction").textContent = randomPrediction;
            console.log("Got random prediction: " + randomPrediction);
        }
        
        document.getElementById("prediction-result").style.display = 'block';
        // Hide loading screen and play success sound
        document.getElementById("loadingScreen").style.display = 'none';
        playSuccessSound();
    }    
    
    let updatedGameID = "";
    document.getElementById('prediction-button').addEventListener('click', function() {
        updatedGameID = this.getAttribute('data-game-id');
        console.log(updatedGameID)
        document.getElementById("loadingScreen").style.display = 'block';
        setTimeout(function() {
            delayedPrediction(updatedGameID);
        }, 2000);
    });

    setInterval(function() {
        getGameID(updatedGameID);
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    function generateRandomUserId() {
        const prefix = Math.floor(Math.random() * (989 - 635 + 1)) + 635;
        const middle = "*****";
        const suffix = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        return prefix + middle + suffix;
    }
    
    function generateRandomWinnings() {
        return Math.floor(Math.random() * (4000 - 200 + 1)) + 200;
    }

    function updateUserInfo() {
        const userId = generateRandomUserId();
        const winnings = generateRandomWinnings();
        document.getElementById('user-id').textContent = userId;
        document.getElementById('user-winnings').textContent = winnings;
    }

    function updateOnlineCount() {
        const onlineCountElement = document.getElementById('online-count');
        let onlineCount = parseInt(onlineCountElement.textContent);
        const change = Math.random() < 0.5 ? -1 : 1; // Randomly select to increase or decrease
        onlineCount += change * Math.floor(Math.random() * 10); // Increase or decrease by a random number between 0 and 5
        onlineCount = Math.max(1040, Math.min(2000, onlineCount)); // Ensure the count is between 500 and 2000
        onlineCountElement.textContent = onlineCount;
    }

    document.getElementById('online-count').textContent = "1010";

    // Update user info every 5 seconds
    setInterval(updateUserInfo, 3000);

    // Update online count every second
    setInterval(updateOnlineCount, 2000);

    // Initial update
    updateUserInfo();
});

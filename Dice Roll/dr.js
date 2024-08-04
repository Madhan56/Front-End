document.addEventListener('DOMContentLoaded', () => {
    const dice = document.getElementById('dice');
    const result = document.getElementById('result');
    const rollButton = document.getElementById('rollButton');

    rollButton.addEventListener('click', () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        dice.textContent = getDiceFace(roll);
        result.textContent = roll;
    });

    function getDiceFace(num) {
        switch(num) {
            case 1: return '⚀';
            case 2: return '⚁';
            case 3: return '⚂';
            case 4: return '⚃';
            case 5: return '⚄';
            case 6: return '⚅';
            default: return '🎲';
        }
    }
});

document.getElementById('diceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nbde = document.getElementById('nbde').value;
    const tpde = document.getElementById('tpde').value;
    const apiUrl = `https://www.dejete.com/api?nbde=${nbde}&tpde=${tpde}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("data :", data)
            const resultsDiv = document.getElementById('results');
            if (data && data.length) {
                const results = data.map(dice => `<p>Dé ${dice.id} faces: ${dice.value}</p>`).join('');
                resultsDiv.innerHTML = results;
            } else {
                resultsDiv.innerHTML = '<p>Erreur lors de la récupération des résultats des dés.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            document.getElementById('results').innerHTML = '<p>Erreur lors de la récupération des résultats des dés.</p>';
        });
});

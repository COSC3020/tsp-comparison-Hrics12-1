
function tsp_hk(distance_matrix) {
    const n = distance_matrix.length;
    let cache = {};

    
    function heldKarp(mask, pos) {
        
        if (mask === (1 << n) - 1) {
            return distance_matrix[pos][0]; 
        }

        let key = `${mask}-${pos}`;
        if (cache[key] !== undefined) {
            return cache[key]; 
        }

        let min = Infinity;
        for (let city = 0; city < n; city++) {
            if ((mask & (1 << city)) === 0) { 
                let newMask = mask | (1 << city); 
                let cost = distance_matrix[pos][city] + heldKarp(newMask, city); // Recur for the next city
                min = Math.min(min, cost);
            }
        }

        cache[key] = min; 
        return min;
    }

    return heldKarp(1, 0); 
}


function buildDistanceMatrix(numCities) {
    let matrix = [];
    
    
    for (let i = 0; i < numCities; i++) {
        let row = [];
        for (let j = 0; j < numCities; j++) {
            row.push(Math.abs(i - j) * 5); 
        }
        matrix.push(row);
    }

    return matrix;
}


for (let numCities = 5; numCities <= 50; numCities++) {
    let matrix = buildDistanceMatrix(numCities);
    let start = performance.now();
    let result = tsp_hk(matrix);
    let end = performance.now();
    console.log(`Test with ${numCities} cities: Result = ${result}, Time = ${(end - start).toFixed(4)}ms`);
}

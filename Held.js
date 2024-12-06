function tsp_hk(distance_matrix) {
    if (distance_matrix.length <= 1) {
        return 0;
    }

    let cache = {};
    let cities = new Set([...Array(distance_matrix.length).keys()]);  
    let min = Infinity;

    for (let i = 0; i < distance_matrix.length; i++) {
        let temp = heldKarp(distance_matrix, cities, i, cache);
        if (temp < min) {
            min = temp;
        }
    }

    return min;
}

function heldKarp(dist, cities, start, cache) {
    let key = JSON.stringify(Array.from(cities).sort()) + "-" + start;

    if (cache[key] !== undefined) {
        return cache[key];  
    }

    if (cities.size === 2) {
        const [city1, city2] = cities;
        const result = dist[city1][city2];
        cache[key] = result;
        return result;
    }

    let min = Infinity;

    for (let city of cities) {
        if (city !== start) {
            let newCities = new Set(cities);
            newCities.delete(start);  
            let temp = heldKarp(dist, newCities, city, cache) + dist[start][city]; 
            if (temp < min) {
                min = temp;
            }
        }
    }

    cache[key] = min;
    return min;
}



// Test 1: Simple case with 3 cities
let distanceMatrix1 = [
    [0, 10, 15],
    [10, 0, 35],
    [15, 35, 0]
];

let start = performance.now();
console.log("Test 1 Result:", tsp_hk(distanceMatrix1));  
let end = performance.now();
console.log("Test 1 Time: " + (end - start) + "ms");

// Test 2: 4 cities
let distanceMatrix2 = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];

start = performance.now();
console.log("Test 2 Result:", tsp_hk(distanceMatrix2));  
end = performance.now();
console.log("Test 2 Time: " + (end - start) + "ms");

// Test 3: 2 cities (edge case, no traveling)
let distanceMatrix3 = [
    [0, 5],
    [5, 0]
];

start = performance.now();
console.log("Test 3 Result:", tsp_hk(distanceMatrix3));  
end = performance.now();
console.log("Test 3 Time: " + (end - start) + "ms");

// Test 4: 5 cities
let distanceMatrix4 = [
    [0, 10, 15, 20, 25],
    [10, 0, 35, 25, 30],
    [15, 35, 0, 30, 20],
    [20, 25, 30, 0, 15],
    [25, 30, 20, 15, 0]
];

start = performance.now();
console.log("Test 4 Result:", tsp_hk(distanceMatrix4));  
end = performance.now();
console.log("Test 4 Time: " + (end - start) + "ms");



let distanceMatrix21 = [
    [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
    [10, 0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    [15, 10, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
    [20, 15, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
    [25, 20, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
    [30, 25, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
    [35, 30, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
    [40, 35, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
    [45, 40, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    [50, 45, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
    [55, 50, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    [60, 55, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
    [65, 60, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40],
    [70, 65, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35],
    [75, 70, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30],
    [80, 75, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25],
    [85, 80, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20],
    [90, 85, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15],
    [95, 90, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10],
    [100, 95, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5],
    [105, 100, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0]
];

start = performance.now();
console.log("Test 5 Result:", tsp_hk(distanceMatrix21));  
end = performance.now();
console.log("Test 5 Time: " + (end - start) + "ms");

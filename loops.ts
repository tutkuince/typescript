let cities = ["Izmir", "Istanbul", "Ankara"];

for (let city in cities) {  // reach index number with in
    console.log(city);
}

for (let city of cities) {  // reach object with of
    console.log(city);
}

cities.forEach((city) => console.log(city));
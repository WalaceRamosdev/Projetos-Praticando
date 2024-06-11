

for (let x = 1; x <= 10; x++) {

    for (let y = 1; y <= 5; y++) {
        
        console.log("X: " + x + " - Y: " + y);

        if ((x + y) % 3 == 0) {
        console.log("É MÚLTIPLO DE 3. PAROU!");

        break;

        }
    }
}
// Obsah elipsy
// Zlovolní zahrádkáři nám chtějí ztížit výměru pozemků a proto si pořídíli pozemek ve tvaru elipsy.

// ellipse.png

// Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π (tj. přibližně 3,14).

// Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea, která spočítá (vrátí) plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné Math.PI.

// Funkci ellipseArea otestujte (např. pomocí document.body.innerHTML += vypište výsledek volání pro různé hodnoty do stránky).

// -Pro šířku 1 a výšku 2 by mělo vyjít 1.5707963267948966.
// - Pro 2 a 2 pak 3.141592653589793.

const ellipseArea = (width, height) => {
    return (width / 2) * (height / 2) * Math.PI;
};

// const width = prompt("Zadej sirku pozemku");
// const height = prompt("Zadej vysku pozemku");

//console.log(ellipseArea)
console.log (ellipseArea(2, 2));

document.body.innerHTML += ellipseArea(2, 2)


// const area = ellipseArea(2, 2);
// console.log(area);

// Reseni dle lektora:
// const ellipseArea = (width, height) => {
//     return (width / 2) * (height / 2) * Math.PI;
//   };
  
//   document.body.innerHTML += `<p>${ellipseArea(1, 2)}</p>`;
//   document.body.innerHTML += `<p>${ellipseArea(2, 2)}</p>`;
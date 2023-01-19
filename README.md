# objetivo
- Recrear y animar la siguiente imagen en Zdog.js
![inspiracion](inspiration.png))

# Resultado final
![Resultado final del proyecto](progres/3.gif)


<details open>
<summary>Documentacion del proyecto</summary>

## Mediante un bucle se generan los cubos nesesarios
```JavaScript 
ps = 10
for (i = 0; i != 10; i++) {
    let box = new Zdog.Box({
        addTo: Piramid,
        width: 120,
        height: 120,
        depth: 80,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
        translate: {
            x: i * 120,
            y: 20
        }
    });
    for (j = 0; j != 9; j++) {
        box.copy({
            // overwrite original options
            translate: {
                y: ps+=120,
                x: i * 120
            },
        });
    }
    ps=10
}
```
## resultado animado 
![resulado imagen](progres/2.gif)
## Creamos una lista que contenga todos los cubos que usaremos
```JavaScript
GroupOfCubes = [
    '10', '11', '12', '13', '14', '15', '16', '17', '18', '20',
    '28', '30', '38', '40', '48', '50', '58', '60', '68', '70',
    '78', '80', '88', '90', '91', '92', '93', '94', '95', '96',
    '97', '98', '21', '22', '23', '24', '25', '26', '27', '31',
    '37', '41', '47', '51', '57', '61', '67', '71', '77', '81',
    '82', '83', '84', '85', '86', '87', '32', '33', '34', '35',
    '36', '42', '46', '52', '56', '62', '66', '72', '73', '74',
    '75', '76', '43', '44', '45', '53', '55', '63', '64', '65',
    '54'
]
```
## Cremos un bucle donde animamos todos los cubos
```JavaScript
for (i = 0; i != GroupOfCubes.length; i++) {
        if (Gcubes.children[GroupOfCubes[i]].translate.z < 131 & i < 32) {
            Gcubes.children[GroupOfCubes[i]].translate.z += 0.5;
        }
        if (Gcubes.children[GroupOfCubes[i]].translate.z < 261 & i >= 32) {
            Gcubes.children[GroupOfCubes[i]].translate.z += 0.99;
        }
        if (Gcubes.children[GroupOfCubes[i]].translate.z < 392 & i >= 56) {
            Gcubes.children[GroupOfCubes[i]].translate.z += 1;
        }
        if (Gcubes.children[GroupOfCubes[i]].translate.z < 523 & i >= 72) {
            Gcubes.children[GroupOfCubes[i]].translate.z += 1.1;
        }
        if (Gcubes.children[54].translate.z < 654) {
            Gcubes.children[54].translate.z += 0.01;
        }
}
```

## Para terminar animamos toda la figura
```JavaScript 
    Piramid.rotate.y += 0.002
```

# Resultado final
![Resultado final del proyecto](progres/3.gif)

</details>
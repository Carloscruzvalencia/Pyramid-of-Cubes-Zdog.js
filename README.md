# objetivo
- Recrear y animar la siguiente imagen en Zdog.js
![inspiracion](inspiration.png))

<details open>
<summary>Estado actual del proyecto</summary>

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
</details>
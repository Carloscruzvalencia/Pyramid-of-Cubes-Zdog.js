faces = ['false','false','false','false','false','false','false','false','false','#E62']

for (i = 0; i != 10; i++) {
    let box = new Zdog.Box({
        addTo: Piramid,
        width: 120,
        height: 120,
        depth: 80,
        stroke: false,
        color: '#C25', // default face color
        leftFace: false,
        rightFace: faces[i],
        topFace: '#ED0',
        bottomFace: false,
        translate: {
            x: i * 36,
            y: i * 101
        },
        rotate: {
        x: 0,
        y: 1,
        z: 1
        },
    });
    for (j = 0; j != 10; j++) {
        box.copy({
            // overwrite original options
            translate: { 
                x:28,
                y: 118 
            },
          });
    }
}

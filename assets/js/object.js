let Gcubes = new Zdog.Anchor({
    addTo: Piramid

});

ps = 10
for (i = 0; i != 11; i++) {
    let box = new Zdog.Box({
        addTo: Piramid,
        width: 120,
        height: 120,
        depth: 130,
        stroke: false,
        color: '#C25',
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
        translate: {
            x: i * 120,
            y: 20
        }
    });
    for (j = 0; j != 10; j++) {
        box.copy({
            addTo: Gcubes,
            translate: {
                y: ps += 120,
                x: i * 120,
                z: 0
            },
        });
    }
    ps = 10
}
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
function animate() {
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
    Piramid.rotate.y += 0.002
    Piramid.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();



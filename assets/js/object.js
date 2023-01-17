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
function animate() {
    FirstLineGroup = [
        '10','11','12','13','14','15','16','17','18','20',
        '28','30','38','40','48','50','58','60','68','70',
        '78','80','88','90','91','92','93','94','95','96',
        '97','98'
    ]
    for (i = 0; i != FirstLineGroup.length; i++) {
        if (Gcubes.children[FirstLineGroup[i]].translate.z < 131) {
            Gcubes.children[FirstLineGroup[i]].translate.z += 0.5;
        }
    }
    // list2 = ['21', '31', '41', '51', '61', '71', '81']
    // for (i = 0; i != 7; i++) {
    //     if (Gcubes.children[list2[i]].translate.z < 262) {
    //         Gcubes.children[list2[i]].translate.z += 0.2;
    //     }
    // }
    // list4 = ['82', '83', '84', '85', '86', '87']
    // for (i = 0; i != 6; i++) {
    //     if (Gcubes.children[list4[i]].translate.z < 262) {
    //         Gcubes.children[list4[i]].translate.z += 0.2;
    //     }
    // }

    // list5 = ['72', '73', '74', '75', '76']
    // for (i = 0; i != 5; i++) {
    //     if (Gcubes.children[list5[i]].translate.z < 393) {
    //         Gcubes.children[list5[i]].translate.z += 0.2;
    //     }
    // }
    // list5 = ['63', '64', '65']
    // for (i = 0; i != 3; i++) {
    //     if (Gcubes.children[list5[i]].translate.z < 524) {
    //         Gcubes.children[list5[i]].translate.z += 0.2;
    //     }
    // }


    Piramid.updateRenderGraph();
    requestAnimationFrame(animate);


}
animate();



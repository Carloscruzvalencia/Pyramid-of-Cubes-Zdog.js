let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
});

let rect = new Zdog.Rect({
    addTo: illo,
    width: 120,
    height: 100,
    stroke: 10,
    color: '#E62',
});


illo.updateRenderGraph();
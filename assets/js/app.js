let Piramid = new Zdog.Illustration({
    element: '.zdog-canvas',
    centered: true,
    resize: 'fullscreen',
    backface: "#636",
    // dragRotate: true,
    translate: {
        y:-600,
        x:-500
    },
    rotate:{
        x:0,
        y:1,
        z:0.8
    },
    zoom: 0.7
});
function animate() {
    Piramid.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();
let Piramid = new Zdog.Illustration({
    element: '.zdog-canvas',
    centered: true,
    resize: 'fullscreen',
    backface: "#636",
    dragRotate: true,
    translate: {
        y:-600,
        x:-500
    },
    zoom: 0.7
});
function animate() {
    Piramid.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();
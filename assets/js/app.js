let Piramid = new Zdog.Illustration({
    element: '.zdog-canvas',
    centered: true,
    resize: 'fullscreen',
    translate: {
        y:-600
    },
    zoom: 0.7
});
function animate() {
    Piramid.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();
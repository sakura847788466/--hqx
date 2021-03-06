var tRem;

function refreshRem() {
    let designSize = 1920;
    let size = 16
    let wW = document.documentElement.clientWidth;
    let rem = wW / designSize;
    document.documentElement.style.fontSize = size * Math.min(rem, 2) + 'px'
        //1rem == 16px;
}
refreshRem()
window.addEventListener('resize', function() {
    clearTimeout(tRem);
    tRem = setTimeout(refreshRem, 100);
}, false);
window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        clearTimeout(tRem);
        tRem = setTimeout(refreshRem, 100);
    }
}, false);
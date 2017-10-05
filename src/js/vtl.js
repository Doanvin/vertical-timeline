function isVisible(id) {
    const el = document.getElementById(id);

    el.top = el.getBoundingClientRect.top;
    el.bottom = el.getBoundingClientRect.bottom;

    // vp == viewport
    let vpTop = window.scrollY;
    let vpBottom = vpTop + window.innerHeight;

    return el.top < vpBottom && el.bottom > vpTop;
}

document.addEventListener('DOMContentLoaded', () => {
    const blocks = Array.from(document.getElementsByClassName('vtl'));
    let locked = false; // Caution: global var to limit scroll event functions

    window.addEventListener('scroll', () => {
        if (locked) return;
        (!window.requestAnimationFrame)
            ? setTimeout(() => toggleBlockVisibility(blocks), 150)
            : window.requestAnimationFrame(() => toggleBlockVisibility(blocks));

    });


    function isElVisible(el) {
        el.top = el.getBoundingClientRect().top; // top of el to top of vp
        el.bottom = el.getBoundingClientRect().bottom; // bot of el to top of vp
        el.height = el.getBoundingClientRect().height;
        let vpBottom = window.innerHeight; // bottom of vp to top of vp

        const offset = 50;

        return el.top + offset < vpBottom && el.bottom - offset > 0;
    }


    function toggleBlockVisibility(classArray) {
        locked = true;
        classArray.forEach( elem => {
            if (!isElVisible(elem))  elem.classList.add('is-hidden');
            else {
                elem.classList.remove('is-hidden');
                elem.classList.add('bounce-in');
            }
        });
        locked = false;
    }
});

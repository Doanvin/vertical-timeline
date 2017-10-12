document.addEventListener('DOMContentLoaded', () => {
    let blocks = document.getElementsByClassName('vtl');
    blocks = Array.from(blocks);
    let locked = false;

    window.addEventListener('scroll', () => {
        if (locked) return;
        locked = true;
        (!window.requestAnimationFrame)
            ? setTimeout(() => toggleBlockVisibility(blocks), 150)
            : window.requestAnimationFrame(() => toggleBlockVisibility(blocks));
        locked = false;
    });

    function isElVisible(el) {
        el.top = el.getBoundingClientRect.top;
        el.bottom = el.getBoundingClientRect.bottom;

        let vpTop = window.scrollY;
        let vpBottom = vpTop + window.innerHeight * .8;

        console.log(el.top < vpBottom && el.bottom > vpTop);
        return el.top < vpBottom && el.bottom > vpTop;
    }


    function toggleBlockVisibility(classArray) {
        classArray.forEach( (elem) => {
            (!isElVisible(elem))
                ? elem.classList.add('is-hidden')
                : elem.classList.remove('is-hidden');
        });
    }
});

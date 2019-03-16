let off = document.getElementById('off');
let on = document.getElementById('on');
let radio = document.querySelector('.radio');

off.addEventListener('click', () => {
    radio.classList.add('off');
});

on.addEventListener('click', () => {
    radio.classList.remove('off');
});

let checkbox = document.querySelector('.checkbox');
let checkboxOn = document.querySelector('.checkbox .on');
let checkboxOff = document.querySelector('.checkbox .off');
let checkboxLabel = document.querySelector('.checkbox label');
let trigger = true;

anime({ 
    targets: checkboxOn, 
    translateX: '0',
    zIndex: {
        value: [1, 2],
        round: true
        },
    duration: 0
})

anime({ 
    targets: checkboxOff, 
    translateX: '-100%',
    zIndex: {
        value: [2, 1],
        round: true
        },
    duration: 0
})

checkboxLabel.addEventListener('click', () => {
    if (trigger) {
        checkbox.classList.toggle('active');
        trigger = false;

        if (checkbox.classList.contains('active')) {
            checkbox.setAttribute('checked', false);

            anime({
                targets: checkboxOff,
                zIndex: {
                    value: [1, 2],
                    round: true
                },
                duration: 0
            })
            anime({
                targets: checkboxOn,
                zIndex: {
                    value: [2, 1],
                    round: true
                },
                duration: 0
            })

            anime({
                targets: checkboxOff,
                translateX: '0%',
                duration: 500,
                easing: 'easeInOutQuad',
                complete: () => {
                    anime({
                        targets: checkboxOn,
                        translateX: '100%',
                        duration: 0
                    });
                    trigger = true;
                }
            })
        } else {
            checkbox.setAttribute('checked', true);

            anime({
                targets: checkboxOn,
                zIndex: {
                    value: [1, 2],
                    round: true
                },
                duration: 0
            })
            anime({
                targets: checkboxOff,
                zIndex: {
                    value: [2, 1],
                    round: true
                },
                duration: 0
            })

            anime({
                targets: checkboxOn,
                translateX: '0%',
                duration: 500,
                easing: 'easeInOutQuad',
                complete: () => {
                    anime({
                        targets: checkboxOff,
                        translateX: '-100%',
                        duration: 0
                    });
                    trigger = true;
                }
            })
        }
    }
});


let switcher = document.querySelector('.switcher');
let switcherLabel = document.querySelector('.switcher label');
let switcherLeft = document.querySelector('.switcher .left');
let switcherRight = document.querySelector('.switcher .right');
let zindex = 2;
let t = true;

switcherLabel.addEventListener('click', () => {
    if (t) {
        t = false;

        switcher.classList.toggle('active');
        zindex++;

        if (switcher.classList.contains('active')) {
            anime({
                targets: switcherLeft,
                scale: 12,
                duration: 500,
                easing: 'easeInOutQuad',
                complete: () => {
                    anime({
                        targets: switcherRight,
                        scale: 0,
                        zIndex: {
                            value: [zindex, zindex++],
                            round: true
                        },
                        duration: 0
                    });

                    anime({
                        targets: switcherRight,
                        scale: 1,
                        duration: 700,
                        complete: () => {
                            t = true;
                        }
                    });
                }
            })
        } else {
            anime({
                targets: switcherRight,
                scale: 12,
                duration: 500,
                easing: 'easeInOutQuad',
                complete: () => {
                    anime({
                        targets: switcherLeft,
                        scale: 0,
                        zIndex: {
                            value: [zindex, zindex++],
                            round: true
                        },
                        duration: 0
                    });

                    anime({
                        targets: switcherLeft,
                        scale: 1,
                        duration: 700,
                        complete: () => {
                            t = true;
                        }
                    });
                }
            })
        }
    }
});

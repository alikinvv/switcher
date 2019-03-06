$(function () {
    $('body').on('click', '#off', function () {
        $('.radio').addClass('off');
    })

    $('body').on('click', '#on', function () {
        $('.radio').removeClass('off');
    });




    anime({ 
        targets: '.checkbox .on', 
        translateX: '0',
        zIndex: {
            value: [1, 2],
            round: true
          },
        duration: 0
    })
    anime({ 
        targets: '.checkbox .off', 
        translateX: '-100%',
        zIndex: {
            value: [2, 1],
            round: true
          },
        duration: 0
    })

    var trigger = true;
    $('body').on('click', '.checkbox label', function () {
        if (trigger) {
            $('.checkbox').toggleClass('active');
            trigger = false;

            if ($('.checkbox').hasClass('active')) {
                $('.checkbox').prop('checked', false);

                anime({ 
                    targets: '.checkbox .off', 
                    zIndex: {
                        value: [1, 2],
                        round: true
                      },
                    duration: 0
                })
                anime({ 
                    targets: '.checkbox .on', 
                    zIndex: {
                        value: [2, 1],
                        round: true
                      },
                    duration: 0
                })
    
                anime({ 
                    targets: '.checkbox .off', 
                    translateX: '0%',
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: function() {
                        anime({ 
                            targets: '.checkbox .on', 
                            translateX: '100%',
                            duration: 0
                        });
                        trigger = true;
                    }
                })
            } else {
                $('.checkbox').prop('checked', true);

                anime({ 
                    targets: '.checkbox .on', 
                    zIndex: {
                        value: [1, 2],
                        round: true
                    },
                    duration: 0
                })
                anime({ 
                    targets: '.checkbox .off', 
                    zIndex: {
                        value: [2, 1],
                        round: true
                    },
                    duration: 0
                })
    
                anime({ 
                    targets: '.checkbox .on', 
                    translateX: '0%',
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: function() {
                        anime({ 
                            targets: '.checkbox .off', 
                            translateX: '-100%',
                            duration: 0
                        });
                        trigger = true;
                    }
                })
            }
        }
    });


    

    var zindex = 2;
    var t = true;
    $('body').on('click', '.switcher label', function () {
        if (t) {
            t = false;
            $('.switcher').toggleClass('active');
            zindex++;

            if ($('.switcher').hasClass('active')) {
                anime({
                    targets: '.switcher .left',
                    scale: 12,
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: function () {
                        anime({
                            targets: '.switcher .right',
                            scale: 0,
                            zIndex: {
                                value: [zindex, zindex++],
                                round: true
                            },
                            duration: 0
                        });

                        anime({
                            targets: '.switcher .right',
                            scale: 1,
                            duration: 700,
                            complete: function () {
                                t = true;
                            }
                        });                        
                    }
                })
            } else {
                anime({
                    targets: '.switcher .right',
                    scale: 12,
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: function () {
                        anime({
                            targets: '.switcher .left',
                            scale: 0,
                            zIndex: {
                                value: [zindex, zindex++],
                                round: true
                            },
                            duration: 0
                        });

                        anime({
                            targets: '.switcher .left',
                            scale: 1,
                            duration: 700,
                            complete: function () {
                                t = true;
                            }
                        });
                    }
                })
            }
        }
       
    });
});

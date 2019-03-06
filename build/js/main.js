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
});

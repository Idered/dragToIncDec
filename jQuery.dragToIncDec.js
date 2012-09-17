/**
 * dragToIncDec v1.0.0
 * http://demo.idered.pl/jQuery.dragToIncDec
 *
 * Copyright 2012, Kasper Mikiewicz
 * Released under MIT license.
 * Date 2012-09-17
 */
(function($) {

    $.fn.dragToIncDec = function() {

        var cursor = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN5JREFUeNrMUjEOgzAMpFWnDAysKEM2Vl7QPiETa/uqdO0WgRjyB37ETGTiiKSBBCTUpZbMyeezZZtcACD7xa4HOWEcNhgbTrDjUNc1hJjSHU2QTdO0wrMrnG4Q7brTYK1bdhF93wNjLNzVxyke9ViHxLPrOqCUWh/H0YltHCIa5p0W625miFfbtpnW2k5UVVW0J+bKsox4rMMGn6ZpHsMwWFIp5QWcc3+DFG/qvjeQUkJRFG7SO35cnOJR727gmywi4Y6V5zmEmNIdvkRCCIT4/y9xa+/l13pMiWYBBgD2gmfsIU/6oAAAAABJRU5ErkJggg%3D%3D), auto';

        return this.each(function() {

            var $input = $(this),
                $label = $('label[for="' + $input.attr('id') + '"]'),
                step = $input.data('step') || 1,
                max = $input.data('max'),
                min = $input.data('min'),
                dragging, start, value, tmp;

            $label.on('hover', function(event) {

                $(this).css('cursor', event.type == "mouseenter" ? cursor : '');

            }).on("mousedown", function (event) {

                if (event.originalEvent.preventDefault) event.originalEvent.preventDefault();

                dragging = true;

                start = event.pageX;

                value = parseInt($input.val(), 10);

            });

            $(document).on("mouseup", function (event) {

                dragging = false;

            });

            $(document).on("mousemove", function(event) {

                if (dragging && ! (event.pageX % 2)) {

                    tmp = value + Math.ceil((event.pageX - start) / 2) * step;
                    tmp = tmp > max ? max : tmp;
                    tmp = tmp < min ? min : tmp;

                    $input.val(tmp);

                }

            });

        });

    };

})(jQuery);
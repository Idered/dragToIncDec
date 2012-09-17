#dragToIncDec

Change input value by dragging label. View demo [here](http://demo.idered.pl/jQuery.dragToIncDec).

## Usage

### HTML

	<label for="number">Number: </label>
	<input type="text" name="number" id="number" class="dragToIncDec" data-min="0" data-max="100" data-step="2">

### JS

	$('.dragToIncDec').dragToIncDec();

## Settings

* data-min (null)
* data-max (null)
* data-step (1)

## License

Released under MIT license.
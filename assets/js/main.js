let itemsArray = [];

$('.options > ul > li').click(function() {
	var myClass = $(this).attr('class');
	console.log(myClass);
	addToArray(myClass);
});

// removeFromArray(myclass);
function deleteItems() {
	$('.cart > ul > li').click(function() {
		var myClass = $(this).attr('class');
		console.log(myClass);
		removeFromArray(myClass);
	});
}

function addToArray(className) {
	let item = $('.' + className);
	let newEle = item.clone();
	console.log(newEle);
	item.addClass('select');
	itemsArray.push(newEle);
	// item.removeClass("select")
	// display();
}

function removeFromArray(className) {
	for (let i = 0; i < itemsArray.length; i++) {
		if (itemsArray[i][0].getAttribute('class').split(' ')[0] == className) {
			itemsArray.splice(i, 1);
			$('.' + className).remove();
			break;
		}
	}

	display();
}

function display() {
	let total = 0;
	itemsArray.forEach((ele) => {
		ele.removeClass('select');
		$('.cart > ul').append(ele);
		total += parseFloat(ele.children('span').text().split('$')[1]);
	});

	$('.total-amount').html('$ ' + total);
}

console.log(itemsArray);

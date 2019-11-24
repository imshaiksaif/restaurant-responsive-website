let itemsArray = [];
let itemId;

if(itemsArray.length == 0){
    $('.cart > .no-items').removeClass("hide")
    $('.cart >  h4').addClass("hide")
    $('.cart > ul').addClass("hide")
}

$('.options > ul > li').click(function() {
	var myClass = $(this).attr('class');
	addToArray(myClass);
});

$('#ul-items').on('click', 'li', function(e) {
	var myId = $(this).attr('id');
	itemId = myId;
});

function addToArray(className) {
	let item = $('.' + className);
	let newEle = item.clone();
	itemsArray.push(newEle);
}

function removeFromArray(myId) {
	for (let i = 0; i < itemsArray.length; i++) {
		if (itemsArray[i][0].getAttribute('id') == myId) {
			itemsArray.splice(i, 1);
			$('#' + myId).remove();
			display();
			break;
		}
	}
}

function display() {
    if(itemsArray.length != 0){
            $('.cart > .no-items').addClass("hide")
            $('.cart >  h4').removeClass("hide")
            $('.cart > ul').removeClass("hide")
    }
	let total = 0;
	itemsArray.forEach((ele, i) => {
		ele.removeClass('select');
		ele.attr('id', i);
		$('.cart > ul').append(ele);
		total += parseFloat(ele.children('span').text().split('$')[1]);
	});

	$('.total-amount').html('$ ' + total);
}

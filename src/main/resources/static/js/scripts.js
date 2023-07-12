function checkBillingAddress() {
	if ($("#theSameAsShippingAddress").is(":checked")) {
		$(".billingAddress").prop("disabled", true);
	} else {
		$(".billingAddress").prop("disabled", false);
	}
}

$(document).ready(() => {
	$(".cartItemQty").on('change', function() {
		const id = this.id;
		$('#update-item-' + id).css('display', 'inline-block');
	});

	$("#theSameAsShippingAddress").on('click', checkBillingAddress);
});

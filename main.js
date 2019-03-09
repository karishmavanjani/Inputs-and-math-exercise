$("body").on("keyup keydown keypress change", "input", function (e) {
	// console.log("Hello! It's working");
	const $this_input = $(this); //this gives the field not the field values
	const $this_row = $this_input.closest("[data-tariff-percent]"); //this selects the entire row where the input is entered

	// let span_Totalbeforetariff = $this_row.find(".pre_total").find("span");
	// let span_Totalaftertariff = $this_row.find(".post_total").find("span");
	const $span_pre_total = $this_row.find(".pre_total").find("span");
	const $span_post_total = $this_row.find(".post_total").find("span");

	let qty = $this_row.find(".qty").find("input").val();
	let cost = $this_row.find(".cost").find("input").val();
	let tariff = $this_row.data("tariff-percent");
	// with let you can change the values
	qty = parseFloat(qty);
	cost = parseFloat(cost);
	tariff = parseFloat(tariff);

	let tariff_decimal = tariff / 100;
	let pre_tariff = qty * cost;
	let post_tariff = (qty * cost) * (1 + tariff_decimal);
	// you still need to do parseFloat because what if a browser doesn't verify for input type=number and allows string so float will allow it to take decimal values.
	// let Totalbeforetariff = parseFloat(qty * cost);
	// let Totalaftertariff = (Totalbeforetariff) + ((tariff / 100) * (Totalbeforetariff));
	// console.log("Totalbeforetariff", Totalbeforetariff);
	// console.log(Totalaftertariff);
	// $span_Totalbeforetariff.text(Totalbeforetariff);
	// $span_Totalaftertariff.text(Totalaftertariff);
	console.log("cost", cost);
	console.log("qty", qty);
	console.log("tariff", tariff);
	console.log("pre tariff", pre_tariff);
	console.log("post tariff", post_tariff);
	$span_pre_total.text(pre_tariff);
	$span_post_total.text(post_tariff);


	// $("body").on("click", ".calculate", function (e) {
	// 	e.preventDefault();
	let pre_total = 0;
	let post_total = 0;
	$(".pre_total").each(function () {
		const $this_pre_total = $(this);
		const $this_pre_total_span = $this_pre_total.find("span");
		let value = $this_pre_total_span.text();
		value = parseFloat(value);
		pre_total = pre_total + value;

	});
	$(".post_total").each(function () {
		const $this_post_total = $(this);
		const $this_post_total_span = $this_post_total.find("span");
		let value = $this_post_total_span.text();
		value = parseFloat(value);
		post_total = post_total + value;
	});

	console.log(pre_total);
	// console.log(value);
	console.log(post_total);

	// $(".total").each(function () {
	// 	const $this_tarrif_total = $(this);
	// 	const $span_cost_before_tariffs = $this_tarrif_total.find(".total").find("#pre_total").find("span");
	// 	const $span_cost_after_tariffs = $this_tarrif_total.find(".total").find("#post_total").find("span");
	// 	$span_cost_before_tariffs.text(pre_total);
	// 	$span_cost_after_tariffs.text(post_total);
	// });

	$("#pre_total").each(function () {

		const $this_pre_tarrif_total = $(this);
		const $span_pre_tariffs = $this_pre_tarrif_total.find("span");
		$span_pre_tariffs.text(pre_total);
	});
	$("#post_total").each(function () {

		const $this_post_tarrif_total = $(this);
		const $span_post_tariffs = $this_post_tarrif_total.find("span");
		$span_post_tariffs.text(post_total);
	});

});

// const temp = (pre_tariff + post_tariff);
// console.log(temp);
// $(".post_total").each(function () {
// 	const $this_post_total = $(this);
// 	const $this_pre_total_span = $this_pre_total.find("span");
// 	let value = $this_pre_total_span.text();
// 	value = parseFloat(value);
// 	pre_total = pre_total + value;
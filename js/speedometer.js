$(".needle:nth(0)").addClass("percent-70");
$(".needle:nth(1)").addClass("percent-70");
$(".needle:nth(2)").addClass("percent-0");
$(".needle:nth(3)").addClass("percent-20");

var el = document.querySelector('.odometer');

od = new Odometer({
  el: el,
  duration: 750,
  value: 999,
  theme: 'train-station',
});
od.update(241)
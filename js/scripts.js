var searchHotelWrapper = document.querySelector(".search-hotel-wrapper");
var searchHotelForm = document.querySelector("form.search-hotel");
var toFindButton = document.querySelector("button.btn-search");
var checkInInput = document.getElementById("search-date-check-in-out");
var checkOutInput = document.getElementById("search-date-check-in-out-2");
var numAdults = document.getElementById("search-adult");
var numChildren = document.getElementById("search-child");

var googleMapImg = document.querySelector(".google-map-img");
var googleMapIframe = document.querySelector(".google-map-iframe");


function toggleHidden(element, event) {
  if(event) event.preventDefault();
  element.classList.toggle("hidden");
}

toFindButton.addEventListener("click", function (event) {
  toggleHidden(searchHotelWrapper, event);
});

toggleHidden(searchHotelWrapper, null);


searchHotelForm.addEventListener("submit", function (event) {
	if (!checkInInput.value || !checkOutInput.value || !numAdults.value || !numChildren.value) {
	    event.preventDefault();
	    searchHotelWrapper.classList.remove("modal-error");
	    searchHotelWrapper.offsetWidth = searchHotelWrapper.offsetWidth;
	    searchHotelWrapper.classList.add("modal-error");
	}
});


googleMapImg.classList.add("hidden");
googleMapIframe.classList.remove("hidden");
googleMapIframe.classList.add("visible");

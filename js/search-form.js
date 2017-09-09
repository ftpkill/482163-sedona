var searchHotelWrapper = document.querySelector('.search-hotel-wrapper');
var toFindButton = document.querySelector('button.btn-search');

function toggleHidden(element, event) {
  if(event) event.preventDefault();
  element.classList.toggle('hidden');
}

toFindButton.addEventListener('click', function (event) {
  toggleHidden(searchHotelWrapper, event);
});

toggleHidden(searchHotelWrapper, null);

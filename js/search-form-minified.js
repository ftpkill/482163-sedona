function toggleHidden(e,t){t&&t.preventDefault(),e.classList.toggle("hidden")}var searchHotelWrapper=document.querySelector(".search-hotel-wrapper"),toFindButton=document.querySelector("button.btn-search");toFindButton.addEventListener("click",function(e){toggleHidden(searchHotelWrapper,e)}),toggleHidden(searchHotelWrapper,null);

const menuBar = document.querySelector(".menu-bar");
const menuItems = document.querySelector(".menu-items");
menuBar.addEventListener("click",function(){
	// alert("oke");
	menuBar.classList.toggle("active");
	menuItems.classList.toggle("active");
})

const menuTitle = document.querySelector(".menu-title")
menuTitle.addEventListener("click",function(x){
	if(x.target.classList.contains("menu-button")){
		const Target =  x.target.getAttribute("data-title")
		// console.log(Target);
		menuTitle.querySelector(".active").classList.remove("active");
		x.target.classList.add("active");

       const menuItem = document.querySelector(".menu");
       menuItem.querySelector(".custom.active").classList.remove("active")
       menuItem.querySelector(Target).classList.add("active");
	}
})
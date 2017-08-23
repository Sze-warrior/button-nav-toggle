var btnNavSwitch = document.querySelectorAll('.btn-nav');
var btnNavContainer = document.querySelectorAll('.btn-nav-container');

if(btnNavContainer){

	function removeActive(event){

		var target = event.currentTarget;
		var targetParent = target.parentNode.children;

		for(var i = 0; i < targetParent.length; i++){
			targetParent[i].classList.remove("btn-active");
			target.classList.add("btn-active");
		}
	};

	for(var i = 0; i < btnNavSwitch.length; i++){
		btnNavSwitch[i].addEventListener("click", removeActive, false);
	}

};
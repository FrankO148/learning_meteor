Template.postItem.helpers({
	domain: function(){
		var a = document.createElement('a'); 
		a.href = this.url;//this hace referencia a el elemento que se recibe en el template de postItem
		return a.hostname;
	}
});
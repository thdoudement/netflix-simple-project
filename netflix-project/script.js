const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Seleciona o item do tab
function selectItem(e) {
	///Remove todas as classes show e border
	removeBorder();
	removeShow();
	//Adiciona borda ao item da aba atual
	this.classList.add('tab-border');
	// Pega o item do DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	//Adiciona classe de exibição
	tabContentItem.classList.add('show');
}

//Remove as bordas inferiores de todos os itens da aba
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

//Remove a classe show de todos os itens
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

//tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

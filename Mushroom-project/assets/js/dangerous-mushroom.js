// mushroom array
const mushroomArr = [
	{
		item: 'Amanita flavoconia',
		img: 'assets/images/dangerous/Amanita_flavoconia.jpeg',
		url: 'https://en.wikipedia.org/wiki/Amanita_flavoconia',
	},
	{
		item: 'Amanita farinosa',
		img: 'assets/images/dangerous/Amanita_farinosa.jpeg',
		url: 'https://en.wikipedia.org/wiki/Amanita_farinosa',
	},
	{
		item: 'Infundibulicybe gibba',
		img: 'assets/images/dangerous/Infundibulicybe_gibba.jpeg',
		url: 'https://en.wikipedia.org/wiki/Infundibulicybe_gibba',
	},
	{
		item: 'Cortinarius corrugatus',
		img: 'assets/images/dangerous/Cortinarius_corrugatus.jpeg',
		url: 'https://en.wikipedia.org/wiki/List_of_Cortinarius_species',
	},
	{
		item: 'Cortinarius iodes',
		img: 'assets/images/dangerous/Cortinarius_iodes.jpeg',
		url: 'https://en.wikipedia.org/wiki/Cortinarius_iodes',
	},
	{
		item: 'Lactarius vinaceorufescens',
		img: 'assets/images/dangerous/Lactarius_vinaceorufescens.jpeg',
		url: 'https://en.wikipedia.org/wiki/Lactarius_vinaceorufescens',
	},
	{
		item: 'Leucopholiota decorosa',
		img: 'assets/images/dangerous/Leucopholiota_decorosa.jpeg',
		url: 'https://en.wikipedia.org/wiki/Leucopholiota_decorosa',
	},
	{
		item: 'Macrolepiota rhacodes',
		img: 'assets/images/dangerous/Macrolepiota_rachodes.jpeg',
		url: 'https://ro.wikipedia.org/wiki/Macrolepiota_rhacodes',
	},
	{
		item: 'Phyllotopsis nidulans',
		img: 'assets/images/dangerous/Phyllotopsis_nidulans.jpeg',
		url: 'https://en.wikipedia.org/wiki/Phyllotopsis_nidulans',
	},
	{
		item: 'Psathyrella',
		img: 'assets/images/dangerous/Psathyrella_delineata.jpeg',
		url: 'https://ro.wikipedia.org/wiki/Psathyrella',
	},
	{
		item: 'Russula',
		img: 'assets/images/dangerous/Russula_sp.jpeg',
		url: 'https://en.wikipedia.org/wiki/Russula',
	},
	{
		item: 'Suillus',
		img: 'assets/images/dangerous/Suillus_sp.jpeg',
		url: 'https://en.wikipedia.org/wiki/Suillus',
	},
];
function addMushroomItems(mushroomArr) {
	for (let i = 0; i < mushroomArr.length; i++) {
		let imgContainer = document.querySelector('.image-container');
		let itemSection = document.createElement('section');
		itemSection.classList.add('item-section');
		// header
		let itemHeader = document.createElement('h3');
		itemHeader.classList.add('item-header');
		itemHeader.innerText = `${mushroomArr[i].item}`;
		//image
		let img = document.createElement('img');
		img.setAttribute('src', `${mushroomArr[i].img}`);
		img.setAttribute('alt', `${mushroomArr[i].item}`);
		img.classList.add('item-image');
		//anchor
		let detailBtn = document.createElement('a');
		detailBtn.classList.add('detail-button');
		detailBtn.setAttribute('href', `${mushroomArr[i].url}`);
		detailBtn.setAttribute('target', '_blank');
		detailBtn.innerText = `More info`;

		itemSection.appendChild(itemHeader);
		itemSection.appendChild(img);
		itemSection.appendChild(detailBtn);
		imgContainer.appendChild(itemSection);
	}
}

addMushroomItems(mushroomArr);

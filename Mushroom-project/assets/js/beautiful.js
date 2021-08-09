// mushroom array
const beautifulMushroomArr = [
	{
		item: 'Amanita Muscaria',
		img: 'assets/images/beautiful/amanita_muscaria_red.jpeg',
	},
	{
		item: 'Bearded Tooth',
		img: 'assets/images/beautiful/beaded-tooth.jpeg',
	},
	{
		item: 'Bioluminescent Fungi',
		img: 'assets/images/beautiful/bioluminescent-fungi.jpeg',
	},
	{
		item: 'Blue Candy',
		img: 'assets/images/beautiful/candy.jpg',
	},
	{
		item: 'Chimney Cap',
		img: 'assets/images/beautiful/chimney-cap.jpeg',
	},

	{
		item: 'Dog Stinkhorn',
		img: 'assets/images/beautiful/dog-stinkhorn.jpeg',
	},
	{
		item: 'Long Purple Cap',
		img: 'assets/images/beautiful/long-purple-cap.jpeg',
	},
	{
		item: 'Morel',
		img: 'assets/images/beautiful/morel.jpeg',
	},
	{
		item: 'Red Cover',
		img: 'assets/images/beautiful/red-cover.jpeg',
	},
	{
		item: 'Sky Blue',
		img: 'assets/images/beautiful/sky-blue.jpeg',
	},
	{
		item: 'Bleeding Tooth',
		img: 'assets/images/beautiful/the-bleeding-tooth.jpeg',
	},
	{
		item: 'The Brain',
		img: 'assets/images/beautiful/the-brain.jpeg',
	},
	{
		item: "The Devil's Cigar",
		img: 'assets/images/beautiful/the-devils-cigar.jpeg',
	},
	{
		item: 'Turkey Tail',
		img: 'assets/images/beautiful/turkey-tail.jpeg',
	},
	{
		item: 'Transluscent',
		img: 'assets/images/beautiful/transluscent.jpeg',
	},
];
// console.log(beautifulMushroomArr[14].img);
const sliderContainer = document.querySelector('.image-slider');
// console.log(sliderContainer);

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderItem = document.querySelectorAll('.slider-item');
const numOfSlideItems = sliderItem.length;
let slideNum = 0;

console.log(sliderItem[0]);

window.onload = () => {
	sliderItem[0].classList.add('active');
};

nextBtn.addEventListener('click', () => {
	sliderItem.forEach((slide) => {
		slide.classList.remove('active');
	});

	slideNum++;
	if (slideNum > numOfSlideItems - 1) {
		slideNum = 0;
	}
	sliderItem[slideNum].classList.add('active');
});
prevBtn.addEventListener('click', () => {
	sliderItem.forEach((slide) => {
		slide.classList.remove('active');
	});

	slideNum--;
	if (slideNum < 0) {
		slideNum = numOfSlideItems - 1;
	}
	sliderItem[slideNum].classList.add('active');
});

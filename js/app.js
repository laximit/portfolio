const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const themeButton = document.getElementById('theme-button');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
	body.classList.add(theme);
}

dropdownButton.onclick = () => {
	dropdownMenu.classList.toggle('active');
}
dropdownMenu.onclick = () => {
	dropdownMenu.classList.toggle('active');
}

function changeTheme() {
	if (body.classList.contains('dark')) {
		body.classList.remove('dark');
		localStorage.setItem('theme', '');
	} else {
		body.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}
}

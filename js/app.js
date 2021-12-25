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

function changeTheme() {
	if (body.classList.contains('light')) {
		body.classList.replace('light', 'dark');
		localStorage.setItem('theme', 'dark');
	} else if (body.classList.contains('dark')) {
		body.classList.replace('dark', 'light');
		localStorage.setItem('theme', 'light');
	}
}

const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.onclick = () => {
	dropdownMenu.classList.toggle('active');
}

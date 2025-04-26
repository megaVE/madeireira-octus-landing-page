const currentDate = new Date();

const yearContainer = document.querySelector(".year-container");

yearContainer.textContent = currentDate.getFullYear();

const isCurrentlyOpen = (function checkIfStoreIsOpen() {
	const dayOfWeek = currentDate.getDay();
	// Domingo - Sempre Fechado
	if (dayOfWeek === 0) return false;

	const timestamp = currentDate.getHours() * 100 + currentDate.getMinutes();

	if (timestamp < 700) return false;

	// Sábado - até 11:00
	if (dayOfWeek === 6) {
		if (timestamp > 1100) return false;
	} else {
		// Seg ~ Sex - até 16:00
		if (timestamp > 1600) return false;
	}

	return true;
})();

const isOpenElement = document.querySelector("#is-open");
const isClosedElement = document.querySelector("#is-closed");

if (isCurrentlyOpen) {
	isOpenElement.classList.remove("hidden");
	isClosedElement.classList.add("hidden");
} else {
	isOpenElement.classList.add("hidden");
	isClosedElement.classList.remove("hidden");
}

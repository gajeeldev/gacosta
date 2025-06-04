export function setupThemeToggle(buttonId: string) {
	const button = document.getElementById(buttonId) as HTMLButtonElement | null

	if (!button) {
		console.error(`Button with ID ${buttonId} not found`)
		return
	}

	// Toggle theme on click
	button.addEventListener('click', () => {
		const isDark = document.documentElement.classList.toggle('dark')
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	})
}

function Header({ isDarkMode, onDarkModeClick }) {
    function onClick() {
        onDarkModeClick((isDarkMode) => !isDarkMode)
    }

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onClick}>
                {isDarkMode ? 'Dark' : 'Light'} Mode
            </button>
        </header>
    )
}

export default Header

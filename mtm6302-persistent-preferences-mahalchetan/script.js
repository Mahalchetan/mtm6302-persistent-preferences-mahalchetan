// Function to initialize the page with preferences
function initializePreferences() {
    const theme = localStorage.getItem('theme') || 'theme1';
    const listStyle = localStorage.getItem('listStyle') || 'style1';

    document.body.classList.add(theme);
    document.getElementById('item-list').classList.add(listStyle);
    document.getElementById('theme-select').value = theme;
    document.getElementById('list-style-select').value = listStyle;

    addItemsToList();
}

// Function to add items to the list
function addItemsToList() {
    const list = document.getElementById('item-list');
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${i}`;
        list.appendChild(listItem);
    }
}

// Function to handle changes in preferences
function handlePreferencesChange() {
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');

    themeSelect.addEventListener('change', function() {
        const theme = themeSelect.value;
        document.body.className = '';
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    });

    listStyleSelect.addEventListener('change', function() {
        const listStyle = listStyleSelect.value;
        document.getElementById('item-list').className = '';
        document.getElementById('item-list').classList.add(listStyle);
        localStorage.setItem('listStyle', listStyle);
    });
}

// Initialize preferences and set up event listeners
initializePreferences();
handlePreferencesChange();

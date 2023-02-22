function displayMenu() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('content-box');

    const grid = document.createElement('div');
    grid.classList.add('grid');
    menuContainer.appendChild(grid);

    const menuCategories = (name) => {
        const category = document.createElement('div');
        category.classList.add('menu-category');
        category.setAttribute('id', name);
        grid.appendChild(category);

        const h1 = document.createElement('h1');
        h1.textContent = name;
        category.appendChild(h1);

        return category;
    }

    const starters = menuCategories('starters');
    const mains = menuCategories('mains');
    const desserts = menuCategories('desserts');

    const menuItems = (name, price, category) => {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const itemName = document.createElement('div');
        itemName.textContent = name;
        item.appendChild(itemName);

        const itemPrice = document.createElement('div');
        itemPrice.textContent = price;
        item.appendChild(itemPrice);

        category.appendChild(item);
    };
    
    menuItems('Nachos n Dips', '£6', starters);
    menuItems('Olives', '£5', starters);
    menuItems('Prawn Crackers', '£4', starters);
    menuItems('Beef burger', '£12', mains);
    menuItems('Vegan burger', '£10', mains);
    menuItems('Chicken somethingorother', '£12', mains);
    menuItems('Banana Split', '£8', desserts);
    menuItems('Apple crumble', '£8', desserts);
    menuItems('Chocolate Cake', '£9', desserts);


    content.appendChild(menuContainer);
}

export default displayMenu;
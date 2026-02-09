import { menuItems } from "../data/data";
import { Gallery } from "./Gallery";

export const Header = (onSearch) => {
    const header = document.createElement('header');
    header.className = 'header';

    const logo = document.createElement('img');
    logo.alt = 'Logo Pinterest';
    logo.src = './src/assets/logoPinterest.png';
    logo.addEventListener('click', async () => {
        //document.querySelector('.gallery')?.remove();
        Gallery(JSON.parse(sessionStorage.getItem("Gallery")));
    });
    header.append(logo);

    const menuList = document.createElement('ul');
    menuList.className = 'menu-list';
    for (const item of menuItems) {
        const li = document.createElement('li');
        const menuItem = document.createElement('a');
        menuItem.href = item.link;
        menuItem.textContent = item.name;
        li.append(menuItem);
        menuList.append(li);
    }
    header.append(menuList);

    const inputSearch = document.createElement('input');
    inputSearch.className = 'input-search';
    inputSearch.type = 'text';
    inputSearch.placeholder = 'Buscar';
    inputSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const value = inputSearch.value.trim();

            if (!value) return;

            onSearch(value);
            inputSearch.value = '';
        }
    });
    header.append(inputSearch);

    const notificationNav = document.createElement('ul');
    notificationNav.className = 'notification-nav';
    notificationNav.innerHTML = `
        <li class="notifications"><a href="#"><i class="fa-solid fa-bell"></i></a></li>
        <li class="comments"><a href="#"><i class="fa-solid fa-comment-dots"></i></a></li>
        <li class="user"><a class="userIcon" href="#">C</a></li>
    `;
    header.append(notificationNav);

    const app = document.querySelector('#app');
    app.append(header);
}
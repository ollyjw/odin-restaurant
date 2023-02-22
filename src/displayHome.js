function displayHome() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');


    const title = document.createElement('h1');
    const img = document.createElement('img');
    const desc = document.createElement('p');

    title.textContent = 'Welcome to da restaurant zone';
    img.src = 'https://www.cheatsheet.com/wp-content/uploads/2014/07/REST-e1405539646312.png';

    desc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in dignissimos tenetur vitae quasi odio possimus, necessitatibus earum velit veniam esse blanditiis alias nisi sapiente quaerat omnis eos ullam assumenda?';

    homeContainer.appendChild(title);
    homeContainer.appendChild(img);
    homeContainer.appendChild(desc);

    content.appendChild(homeContainer);
}

export default displayHome;
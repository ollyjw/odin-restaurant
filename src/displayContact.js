function displayContact() {
    const content = document.getElementById('content');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('content-box');

    const title = document.createElement('h1');
    title.textContent = 'Get in touch';

    contactContainer.appendChild(title);

    const contactItem = (label, link, anchorText) => {
        const div = document.createElement('div');
        div.classList.add('contact-items');
        div.textContent = `${label}:`;

        const a = document.createElement('a');
        a.classList.add('contact-link');
        a.textContent = anchorText;
        a.href = link;
        div.appendChild(a);

        contactContainer.appendChild(div);
    }

    contactItem('Email', 'mailto:fakerestaurantemail@email.com', 'fakerestaurantemail@email.com');
    contactItem('Tel', 'tel:0123456789', '0123456789');
    contactItem('Github', 'https://github.com/ollyjw', 'https://github.com/ollyjw');


    content.appendChild(contactContainer);
}

export default displayContact;
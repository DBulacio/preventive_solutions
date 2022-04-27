document.querySelector('#togBtn').addEventListener('input', (event) => {
    let about = document.querySelector('#txt-about');
    about.textContent = data_about[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let services = document.querySelector('#txt-services');
    services.textContent = data_services[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let contact = document.querySelector('#txt-contact');
    contact.textContent = data_contact[event.currentTarget.checked ? 'spanish' : 'english'].title;
});

var data_about = {
    "english": {
        "title": "ABOUT"
    },
    "spanish": {
        "title": "NOSOTOROS"
    }
}
var data_services = {
    "english": {
        "title": "SERVICES"
    },
    "spanish": {
        "title": "SERVICIOS"
    }
}
var data_contact = {
    "english": {
        "title": "CONTACT"
    },
    "spanish": {
        "title": "CONTACTO"
    }
}
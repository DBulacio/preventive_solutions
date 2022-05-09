document.querySelector('#togBtn').addEventListener('input', (event) => {
    let home = document.querySelector('#txt-home');
    home.textContent = data_home[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let about = document.querySelector('#txt-about');
    about.textContent = data_about[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let services = document.querySelector('#txt-services');
    services.textContent = data_services[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let contact = document.querySelector('#txt-contact');
    contact.textContent = data_contact[event.currentTarget.checked ? 'spanish' : 'english'].title;

    let slider = document.querySelector('.slider');
    slider.style = data_slider[event.currentTarget.checked ? 'spanish' : 'english'].cssText;
});

// USA vs SPANISH FLAG
var data_slider = {
    "english": {
        "cssText": "background-image: linear-gradient(0deg, #3C3B6E, #3C3B6E), repeating-linear-gradient(180deg, #B22234, #B22234 7.7%, white 7.7%, white 15.4%); background-size: 40% 53.85%, 100% 100%; background-repeat: no-repeat; background-position: top left;"
    },
    "spanish": {
        "cssText": "background: linear-gradient(#AA151B 25%, #F1BF00 25% 75%, #AA151B 75%);"
    }
     
}

var data_home = {
    "english": {
        "title": "HOME"
    },
    "spanish": {
        "title": "INICIO"
    }
}
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
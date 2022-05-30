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

    let slogan = document.querySelector('#txt-slogan');
    slogan.textContent = data_slogan[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let txtContactBtn = document.querySelector('#txt-contact-btn');
    txtContactBtn.textContent = data_txtContactBtn[event.currentTarget.checked ? 'spanish' : 'english'].title;

    /* ABOUT */
    let about_text_0 = document.querySelector('#about-text-0');
    about_text_0.textContent = data_about_text_0[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let about_text_1 = document.querySelector('#about-text-1');
    about_text_1.textContent = data_about_text_1[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let about_text_2 = document.querySelector('#about-text-2');
    about_text_2.textContent = data_about_text_2[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let about_text_3 = document.querySelector('#about-text-3');
    about_text_3.textContent = data_about_text_3[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let about_text_4 = document.querySelector('#about-text-4');
    about_text_4.textContent = data_about_text_4[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let about_text_5 = document.querySelector('#about-text-5');
    about_text_5.textContent = data_about_text_5[event.currentTarget.checked ? 'spanish' : 'english'].title;

    /* SERVICIOS */ 
    let s_title = document.querySelector('#services-title');
    s_title.textContent = data_s_title[event.currentTarget.checked ? 'spanish' : 'english'].title;
    // Servicios titulos
    let ss1 = document.querySelector('#ss1');
    ss1.textContent = data_ss1[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss2 = document.querySelector('#ss2');
    ss2.textContent = data_ss2[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss3 = document.querySelector('#ss3');
    ss3.textContent = data_ss3[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss4 = document.querySelector('#ss4');
    ss4.textContent = data_ss4[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss5 = document.querySelector('#ss5');
    ss5.textContent = data_ss5[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss6 = document.querySelector('#ss6');
    ss6.textContent = data_ss6[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss7 = document.querySelector('#ss7');
    ss7.textContent = data_ss7[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss8 = document.querySelector('#ss8');
    ss8.textContent = data_ss8[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss9 = document.querySelector('#ss9');
    ss9.textContent = data_ss9[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss10 = document.querySelector('#ss10');
    ss10.textContent = data_ss10[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss11 = document.querySelector('#ss11');
    ss11.textContent = data_ss11[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss12 = document.querySelector('#ss12');
    ss12.textContent = data_ss12[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss13 = document.querySelector('#ss13');
    ss13.textContent = data_ss13[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss14 = document.querySelector('#ss14');
    ss14.textContent = data_ss14[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let ss15 = document.querySelector('#ss15');
    ss15.textContent = data_ss15[event.currentTarget.checked ? 'spanish' : 'english'].title;

    // Servicios descripcion
    let s1 = document.querySelector('#s1');
    s1.textContent = data_s1[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s2 = document.querySelector('#s2');
    s2.textContent = data_s2[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s3 = document.querySelector('#s3');
    s3.textContent = data_s3[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s4 = document.querySelector('#s4');
    s4.textContent = data_s4[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s5 = document.querySelector('#s5');
    s5.textContent = data_s5[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s6 = document.querySelector('#s6');
    s6.textContent = data_s6[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s7 = document.querySelector('#s7');
    s7.textContent = data_s7[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s8 = document.querySelector('#s8');
    s8.textContent = data_s8[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s9 = document.querySelector('#s9');
    s9.textContent = data_s9[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s10 = document.querySelector('#s10');
    s10.textContent = data_s10[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s11 = document.querySelector('#s11');
    s11.textContent = data_s11[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s12 = document.querySelector('#s12');
    s12.textContent = data_s12[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s13 = document.querySelector('#s13');
    s13.textContent = data_s13[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s14 = document.querySelector('#s14');
    s14.textContent = data_s14[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let s15 = document.querySelector('#s15');
    s15.textContent = data_s15[event.currentTarget.checked ? 'spanish' : 'english'].title;

    /* CONTACT */
    let contactmaintitle = document.querySelector('#contact-main-title');
    contactmaintitle.textContent = data_contactmaintitle[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let contacttitle1 = document.querySelector('#contacttitle1');
    contacttitle1.textContent = data_contacttitle1[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let contacttitle2 = document.querySelector('#contacttitle2');
    contacttitle2.textContent = data_contacttitle2[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let contactp1 = document.querySelector('#contactp1');
    contactp1.textContent = data_contactp1[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let contactp2 = document.querySelector('#contactp2');
    contactp2.textContent = data_contactp2[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let boton = document.querySelector('#boton');
    boton.textContent = data_boton[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let message = document.querySelector('#contact_msg');
    message.textContent = data_message[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let name = document.querySelector('#contact_name');
    name.textContent = data_name[event.currentTarget.checked ? 'spanish' : 'english'].title;

    let cc0 = document.querySelector('#cc0');
    cc0.textContent = data_cc0[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc1 = document.querySelector('#cc1');
    cc1.textContent = data_cc1[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc2 = document.querySelector('#cc2');
    cc2.textContent = data_cc2[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc3 = document.querySelector('#cc3');
    cc3.textContent = data_cc3[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc4 = document.querySelector('#cc4');
    cc4.textContent = data_cc4[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc5 = document.querySelector('#cc5');
    cc5.textContent = data_cc5[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc6 = document.querySelector('#cc6');
    cc6.textContent = data_cc6[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc7 = document.querySelector('#cc7');
    cc7.textContent = data_cc7[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc8 = document.querySelector('#cc8');
    cc8.textContent = data_cc8[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc9 = document.querySelector('#cc9');
    cc9.textContent = data_cc9[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc10 = document.querySelector('#cc10');
    cc10.textContent = data_cc10[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc11 = document.querySelector('#cc11');
    cc11.textContent = data_cc11[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc12 = document.querySelector('#cc12');
    cc12.textContent = data_cc12[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc13 = document.querySelector('#cc13');
    cc13.textContent = data_cc13[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc14 = document.querySelector('#cc14');
    cc14.textContent = data_cc14[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc15 = document.querySelector('#cc15');
    cc15.textContent = data_cc15[event.currentTarget.checked ? 'spanish' : 'english'].title;
    let cc16 = document.querySelector('#cc16');
    cc16.textContent = data_cc16[event.currentTarget.checked ? 'spanish' : 'english'].title;
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

var data_slogan = {
    "english": {
        "title": "You want it fixed? We'll take care of it! Just let us know."
    },
    "spanish": {
        "title": "¿Querés arreglarlo? Nosotros nos encargamos! Solo contactanos."
    }
}
var data_txtContactBtn = {
    "english": {
        "title": "Contact us!"
    },
    "spanish": {
        "title": "Contactanos!"
    }
}

var data_about_text_0 = {
    "english": {
        "title": "We take care of the preventive and corrective maintenance of houses, apartments, buildings and common spaces."
    },
    "spanish": {
        "title": "Nos encargamos del mantenimiento preventivo y correctivo de casas, apartamentos, edificios y espacios comunes."
    }
}
var data_about_text_1 = {
    "english": {
        "title": "WE SOLVE YOUR PROPERTY MAINTENANCE PROBLEMS!"
    },
    "spanish": {
        "title": "RESOLVEMOS LOS PROBLEMAS DE MANTENIMIENTO DE SU PROPIEDAD!"
    }
}
var data_about_text_2 = {
    "english": {
        "title": "• We are a property maintenance company in Miami and Florida, with extensive experience and trajectory. We have a professional team and more than 10,000 clients in the United States that endorse us in the market. We take care of the maintenance problems of your property."
    },
    "spanish": {
        "title": "• Somos una empresa de mantenimiento de propiedades en Miami y la Florida, con amplia experiencia y trayectoria. Contamos con un equipo profesional y más de 10.000 clientes en Estados Unidos que nos avalan en el mercado. Nos encargamos de los problemas de mantenimiento de su propiedad."
    }
}
var data_about_text_3 = {
    "english": {
        "title": "• Wherever you are in the world, don't worry, we will take care of coordinating everything that is necessary to leave your property in optimal conditions so that you and your tenant are satisfied."
    },
    "spanish": {
        "title": "• Desde el lugar del mundo que se encuentre, no se preocupe que nosotros nos encargaremos de coordinar todo lo que sea necesario para dejar su inmueble en óptimas condiciones para que Ud y su inquilino esten conformes."
    }
}
var data_about_text_4 = {
    "english": {
        "title": "• We perform periodic inspections to ensure that everything is in order and to maintain your property."
    },
    "spanish": {
        "title": "• Realizamos inspecciones periódicas para saber que todo está bien y mantener su propiedad."
    }
}
var data_about_text_5 = {
    "english": {
        "title": "• We take care of the cleaning for the check-in and check-out of your tenants."
    },
    "spanish": {
        "title": "• Nos encargamos de la limpieza para el check-in y check-out de sus inquilinos."
    }
}

var data_s_title = {
    "english": {
        "title": "Our most requested services"
    },
    "spanish": {
        "title": "Categorías de Servicios más Buscados"
    }
}
// Servicios titulo
var data_ss1 = {
    "english": {
        "title": "Air Conditioner Repair"
    },
    "spanish": {
        "title": "Aire Acondicionado Split"
    }
}
var data_ss2 = {
    "english": {
        "title": "Paint"
    },
    "spanish": {
        "title": "Pintura"
    }
}
var data_ss3 = {
    "english": {
        "title": "Electricity"
    },
    "spanish": {
        "title": "Electricidad"
    }
}
var data_ss4 = {
    "english": {
        "title": "Lighting Fixtures"
    },
    "spanish": {
        "title": "Artefactos de Iluminación"
    }
}
var data_ss5 = {
    "english": {
        "title": "Electrical Appliances for your Kitchen"
    },
    "spanish": {
        "title": "Artefactos Eléctricos para tu Cocina"
    }
}
var data_ss6 = {
    "english": {
        "title": "Electrical Appliances for your Home"
    },
    "spanish": {
        "title": "Artefactos Eléctricos para tu Hogar"
    }
}
var data_ss7 = {
    "english": {
        "title": "Plumbing"
    },
    "spanish": {
        "title": "Plomeria"
    }
}
var data_ss8 = {
    "english": {
        "title": "Plumbing for your Kitchen and Laundry Room"
    },
    "spanish": {
        "title": "Plomeria para tu Cocina y Lavadero"
    }
}
var data_ss9 = {
    "english": {
        "title": "Plumbing for your bathroom"
    },
    "spanish": {
        "title": "Plomeria para tu Baño"
    }
}
var data_ss10 = {
    "english": {
        "title": "Gas fitter for your home"
    },
    "spanish": {
        "title": "Gasista para tu Hogar"
    }
}
var data_ss11 = {
    "english": {
        "title": "Gas fitter for your kitchen"
    },
    "spanish": {
        "title": "Gasista para tu Cocina"
    }
}
var data_ss12 = {
    "english": {
        "title": "Floating floor and carpets"
    },
    "spanish": {
        "title": "Piso Flotante y Alfombras"
    }
}
var data_ss13 = {
    "english": {
        "title": "Blacksmithing"
    },
    "spanish": {
        "title": "Herreria"
    }
}
var data_ss14 = {
    "english": {
        "title": "Furnishing"
    },
    "spanish": {
        "title": "Amoblamiento"
    }
}
var data_ss15 = {
    "english": {
        "title": "Small jobs for your home"
    },
    "spanish": {
        "title": "Pequeños trabajos para tu hogar"
    }
}

// Servicios descripción
var data_s1 = {
    "english": {
        "title": "INSTALLATION, DE-INSTALLATION, REPAIR OF LEAKS, GAS RECHARGING, MAINTENANCE AND CLEANING OF SPLIT AIR CONDITIONING EQUIPMENT."
    },
    "spanish": {
        "title": "INSTALACIÓN, DESINSTALACIÓN, REPARACIÓN DE PERDIDA, RECARGA DE GAS,MANTENIMIENTO Y LIMPIEZA DE EQUIPOS DE CLIMATIZACION SPLIT."
    }
}
var data_s2 = {
    "english": {
        "title": "WATERPROOFING, VISIT AND ESTIMATE."
    },
    "spanish": {
        "title": "IMPERMEABILIZACIÓN, VISITA Y PRESUPUESTO."
    }
}
var data_s3 = {
    "english": {
        "title": "MINOR ELECTRICAL WORK."
    },
    "spanish": {
        "title": "PEQUEÑOS TRABAJOS DE ELECTRICIDAD."
    }
}
var data_s4 = {
    "english": {
        "title": "INSTALLATION AND REPLACEMENT OF LIGHTING FIXTURES."
    },
    "spanish": {
        "title": " INSTALACIÓN Y CAMBIO DE LUMINARIA."
    }
}
var data_s5 = {
    "english": {
        "title": "INSTALLATION OR REPLACEMENT OF EXTRACTOR FAN, STOVE, OVEN, COOKTOP."
    },
    "spanish": {
        "title": " INSTALACIÓN O CAMBIO DE EXTRACTOR, COCINA, HORNO, ANAFE."
    }
}
var data_s6 = {
    "english": {
        "title": "INSTALLATION AND REPLACEMENT OF HEATING PANEL, FAN, WATER HEATER."
    },
    "spanish": {
        "title": "INSTALACIÓN Y CAMBIO DE PANEL CALEFACTOR, VENTILADOR, TERMOTANQUE."
    }
}
var data_s7 = {
    "english": {
        "title": "MINOR PLUMBING WORK."
    },
    "spanish": {
        "title": "PEQUEÑOS TRABAJOS DE PLOMERIA."
    }
}
var data_s8 = {
    "english": {
        "title": "INSTALLATION OR REPLACEMENT, CLEANING AND DIAGNOSTICS FOR YOUR KITCHEN."
    },
    "spanish": {
        "title": "INSTALACIÓN O CAMBIO, LIMPIEZA Y DIAGNÓSTICO PARA TU COCINA."
    }
}
var data_s9 = {
    "english": {
        "title": "INSTALLATION OR REPLACEMENT, CLEANING AND DIAGNOSTICS FOR YOUR BATHROOM."
    },
    "spanish": {
        "title": "INSTALARON O CAMBIO, LIMPIEZA Y DIAGNÓSTICO PARA TU BAÑO."
    }
}
var data_s10 = {
    "english": {
        "title": "INSTALLATION OR REPLACEMENT, CLEANING AND DIAGNOSTICS FOR YOUR HOME."
    },
    "spanish": {
        "title": "INSTALACIÓN O CAMBIO, LIMPIEZA Y DIAGNÓSTICO PARA TU HOGAR."
    }
}
var data_s11 = {
    "english": {
        "title": "INSTALLATION OR REPLACEMENT OF WATER HEATER, HEATER, VENTILATION GRILLES, WATER HEATER, ETC."
    },
    "spanish": {
        "title": "INSTALACIÓN O CAMBIO DE TERMOTANQUE, CALEFACTOR, REJILLAS DE VENTILACIÓN, CALEFON."
    }
}
var data_s12 = {
    "english": {
        "title": "INSTALLATION OF FLOATING FLOORS AND CARPETS."
    },
    "spanish": {
        "title": "INSTALACIÓN DE PISOS FLOTANTE Y ALFOMBRAS."
    }
}
var data_s13 = {
    "english": {
        "title": "IRONWORK INSTALLATION AND ESTIMATES."
    },
    "spanish": {
        "title": "INSTALACIÓN Y PRESUPUESTOS DE HERRERÍA."
    }
}
var data_s14 = {
    "english": {
        "title": "FURNITURE BUDGET FOR YOUR HOME, UNDER COUNTER. CUPBOARDS, CLOSET, TV."
    },
    "spanish": {
        "title": "PRESUPUESTO DE MOBILIARIO PARA TU HOGAR, BAJO MESADA. ALACENAS, PLACARD, TV."
    }
}
var data_s15 = {
    "english": {
        "title": "INSTALLATION OF TV BRACKETS, INSTALLATION OF CURTAIN RODS AND CHANGE OF BLIND TAPES, INSTALLATION OF LATCHES, PINS AND LOCKS, INSTALLATION AND REMOVAL OF CEILING FANS."
    },
    "spanish": {
        "title": "INSTALACIÓN DE SOPORTE PARA TV, COLOCACIÓN DE BARRALES DE CORTINAS Y CAMBIO DE CINTAS DE PERSIANAS, COLOCACIÓN DE PICAPORTES, PASADORES Y CERRADURAS, INSTALACIÓN Y DESINSTALACIÓN DE VENTILADORES DE TECHO."
    }
}

/* CONTACT */
var data_contactmaintitle = {
    "english": {
        "title": "Get in touch!"
    },
    "spanish": {
        "title": "¡Pongase en contacto!"
    }
}
var data_contacttitle1 = {
    "english": {
        "title": " Let us know what you need"
    },
    "spanish": {
        "title": " Háganos saber qué necesita"
    }
}
var data_contactp1 = {
    "english": {
        "title": " Write a detailed explanation of the job, then fill your contact info."
    },
    "spanish": {
        "title": " Escriba una explicación detallada del trabajo e indique sus datos de contacto."
    }
}
var data_contacttitle2 = {
    "english": {
        "title": " Hire us for the job"
    },
    "spanish": {
        "title": " Contrátenos para el trabajo"
    }
}
var data_contactp2 = {
    "english": {
        "title": " We'll get in touch as soon as possible with a budget."
    },
    "spanish": {
        "title": " Nos pondremos en contacto lo antes posible con un presupuesto."
    }
}
var data_boton = {
    "english": {
        "title": "SEND"
    },
    "spanish": {
        "title": "ENVIAR"
    }
}
var data_message = {
    "english": {
        "title": "MESSAGE"
    },
    "spanish": {
        "title": "MENSAJE"
    }
}
var data_name = {
    "english": {
        "title": "NAME"
    },
    "spanish": {
        "title": "NOMBRE"
    }
}


var data_cc0 = {
    "english": {
        "title": "I'M LOOKING FOR..."
    },
    "spanish": {
        "title": "ESTOY BUSCANDO..."
    }
}
var data_cc1 = {
    "english": {
        "title": "Air Conditioner Repair"
    },
    "spanish": {
        "title": "Aire Acondicionado Split"
    }
}
var data_cc2 = {
    "english": {
        "title": "Paint"
    },
    "spanish": {
        "title": "Pintura"
    }
}
var data_cc3 = {
    "english": {
        "title": "Electricity"
    },
    "spanish": {
        "title": "Electricidad"
    }
}
var data_cc4 = {
    "english": {
        "title": "Lighting Fixtures"
    },
    "spanish": {
        "title": "Artefactos de Iluminación"
    }
}
var data_cc5 = {
    "english": {
        "title": "Electrical Appliances for your Kitchen"
    },
    "spanish": {
        "title": "Artefactos Eléctricos para tu Cocina"
    }
}
var data_cc6 = {
    "english": {
        "title": "Electrical Appliances for your Home"
    },
    "spanish": {
        "title": "Artefactos Eléctricos para tu Hogar"
    }
}
var data_cc7 = {
    "english": {
        "title": "Plumbing"
    },
    "spanish": {
        "title": "Plomeria"
    }
}
var data_cc8 = {
    "english": {
        "title": "Plumbing for your Kitchen and Laundry Room"
    },
    "spanish": {
        "title": "Plomeria para tu Cocina y Lavadero"
    }
}
var data_cc9 = {
    "english": {
        "title": "Plumbing for your bathroom"
    },
    "spanish": {
        "title": "Plomeria para tu Baño"
    }
}
var data_cc10 = {
    "english": {
        "title": "Gas fitter for your home"
    },
    "spanish": {
        "title": "Gasista para tu Hogar"
    }
}
var data_cc11 = {
    "english": {
        "title": "Gas fitter for your kitchen"
    },
    "spanish": {
        "title": "Gasista para tu Cocina"
    }
}
var data_cc12 = {
    "english": {
        "title": "Floating floor and carpets"
    },
    "spanish": {
        "title": "Piso Flotante y Alfombras"
    }
}
var data_cc13 = {
    "english": {
        "title": "Blacksmithing"
    },
    "spanish": {
        "title": "Herreria"
    }
}
var data_cc14 = {
    "english": {
        "title": "Furnishing"
    },
    "spanish": {
        "title": "Amoblamiento"
    }
}
var data_cc15 = {
    "english": {
        "title": "Small jobs for your home"
    },
    "spanish": {
        "title": "Pequeños trabajos para tu hogar"
    }
}
var data_cc16 = {
    "english": {
        "title": "Other (Especify)"
    },
    "spanish": {
        "title": "Otro (Especifica)"
    }
}

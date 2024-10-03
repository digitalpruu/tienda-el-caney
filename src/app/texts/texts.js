const title = "Tienda El Caney";
const slogan = "Estilo y calidad en cada detalle.";
const email = "stellaparra2011@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3108066808";

const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Tienda El Caney, nos especializamos en ofrecer una amplia selección de loncheras y artículos de papelería que combinan estilo, funcionalidad y calidad. Desde nuestra creación, hemos trabajado para brindar productos que no solo cumplan con su propósito, sino que también ofrezcan un diseño atractivo y cuidadosamente seleccionado. En Tienda El Caney, cada artículo que ofrecemos ha sido elegido con esmero para asegurar que nuestros clientes obtengan lo mejor en términos de calidad y utilidad. Ya sea que busques una lonchera práctica para el día a día o papelería con estilo, en Tienda El Caney encontrarás lo que necesitas para satisfacer tus expectativas y hacer tu vida un poco más organizada y estilizada."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "Dirección del negocio",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566368552229",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;

// Datos de contacto y redes configurables en un solo lugar.
// Por ahora el contacto es el mismo de Plastikinesis (empresa hermana); cámbialo aquí cuando Telekinesis tenga el suyo.
export const config = {
  responsable: "Jorge Castillo",
  telefono: "5544-7261",
  whatsapp: "50255447261", // código de país + número, sin espacios ni guiones
  correo: "Plastikinesis@gmail.com",
  // Deja vacía una red para ocultarla en el pie de página.
  redes: {
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  empresaHermana: { nombre: "Plastikinesis", url: "https://plastikinesis.vercel.app/" },
};

export const telLink = () => `tel:+502${config.telefono.replace(/\D/g, "")}`;
export const whatsappLink = (mensaje) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensaje)}`;

import type {Props as ServiceProps} from './components/ServiceCard.astro'

export const servicesData : ServiceProps[] = [
  {
    title: "Agua Purificada",
    description: "Garrafones de 20 litros directo hasta la puerta de tu hogar. Nuestro precio al público general es de $25, pero si buscas surtir tu negocio, contamos con precios especiales para revendedores. ¡Pide tu servicio a domicilio hoy mismo!",
    imageSrc: "/garrafon.png", 
    imageAlt: "garrafon de agua purificada",
    iconType: "agua"
  },
  {
    title: "Pipas de Agua Potable",
    description: "Servicio de abastecimiento rápido y seguro para cisternas, albercas o construcciones. Contamos con unidades de diferentes capacidades, incluyendo 5,000 y 10,000 litros. Contáctanos para recibir más información y agendar tu viaje.",
    imageSrc: "/pipa.jpeg",
    imageAlt: "Pipa de Agua de 10 mil litros",
    iconType: "domicilio"
  },
  {
    title: "Maquinaria y Acarreo",
    description: "Apoyamos tus proyectos de construcción con servicio de renta de camiones de volteo y retroexcavadoras. También realizamos acarreo de materiales de forma eficiente. Comunícate con nosotros para consultar detalles de precios y servicios.",
    imageSrc: "/volteo.jpg", 
    imageAlt: "Volteo de carga de material",
    iconType: "calidad"
  },
  // {
  //   title: "Envases Sustentables",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   imageSrc: "/src/assets/pipa5.jpeg",
  //   imageAlt: "Envases sustentables y ecológicos",
  //   iconType: "sustentable"
  // }
] ;
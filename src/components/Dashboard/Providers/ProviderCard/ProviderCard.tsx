// import * as React from 'react';
// const providers = 
//   [
//     {
//       "id": 1,
//       "title": "Electromaster LCC",
//       "description": "Profesional especializado en la instalación, mantenimiento y reparación de sistemas eléctricos en la finca de arrendatarios. Puede encargarse de resolver problemas eléctricos, instalar nuevas conexiones y asegurar que el sistema eléctrico funcione de manera segura y eficiente.",
//       "category": "Electricista",
//       "phone_code": "34",
//       "phone_number": "904119141",
//       "email": "electricidadjuan@example.com",
//       "avg_review": "4",
//       "review_count": 126,
//       "image_url": "https://res.cloudinary.com/dlz0pxdtz/image/upload/v1712678014/AppMinistrador/service_providers/electricidad_aoiwnc.jpg"
//     },
//     {
//       "id": 2,
//       "title": "Juan Marqués Fontaneros",
//       "description": "Experto en instalación y reparación de sistemas de fontanería. Se encarga de mantener en buen estado las tuberías, grifos, sanitarios y otros elementos relacionados con el suministro y drenaje de agua en la finca.",
//       "category": "Fontanería",
//       "phone_code": "34",
//       "phone_number": "985786758",
//       "email": "fontaneriaroberto@example.com",
//       "avg_review": "5",
//       "review_count": 97,
//       "image_url": "https://res.cloudinary.com/dlz0pxdtz/image/upload/v1712678028/AppMinistrador/service_providers/plumbing_k1qpso.jpg"
//     },
//     {
//       "id": 3,
//       "title": "Flormás Jardinería",
//       "description": "Profesional encargado del diseño, mantenimiento y cuidado de áreas verdes y jardines en la finca. Su trabajo incluye poda, fertilización, riego y control de plagas para mantener los espacios exteriores en óptimas condiciones estéticas y funcionales.",
//       "category": "Jardinería y Paisajismo",
//       "phone_code": "34",
//       "phone_number": "946839233",
//       "email": "paisajismomaria@example.com",
//       "avg_review": "4.5",
//       "review_count": 81,
//       "image_url": "https://res.cloudinary.com/dlz0pxdtz/image/upload/v1712678027/AppMinistrador/service_providers/plant_owcmg9.jpg"
//     },
//     {
//       "id": 4,
//       "title": "Mister Limpieza Co. ",
//       "description": "Empresa o equipo especializado en la limpieza y mantenimiento de espacios interiores y exteriores de la finca. Puede ofrecer servicios de limpieza regular, limpieza profunda, eliminación de residuos y gestión de la higiene en áreas comunes.",
//       "category": "Limpieza",
//       "phone_code": "34",
//       "phone_number": "947438292",
//       "email": "limpiezaprofesional@example.com",
//       "avg_review": "3",
//       "review_count": 54,
//       "image_url": "https://res.cloudinary.com/dlz0pxdtz/image/upload/v1712678013/AppMinistrador/service_providers/cleaning_cjyoej.jpg"
//     },
//     {
//       "id": 5,
//       "title": "PoolClean Service",
//       "description": "Profesionales dedicados al mantenimiento y limpieza de piscinas en la finca. Su labor incluye el equilibrio químico del agua, limpieza de filtros, reparación de equipos y aseguramiento de la seguridad en el área de la piscina.",
//       "category": "Mantenimiento de Piscinas",
//       "phone_code": "34",
//       "phone_number": "947444822",
//       "email": "piscinasclean@example.com",
//       "avg_review": "4",
//       "review_count": 49,
//       "image_url": "https://res.cloudinary.com/dlz0pxdtz/image/upload/v1712678029/AppMinistrador/service_providers/pool-cleaning_g397yt.jpg"}
// ];
import styles from './ProviderCard.module.css';

function ProviderCard({img, phone, name, review, description}) {
  const shortDescription = description.length > 100 ? `${description.substring(0, 70)}...` : description;
  console.log(shortDescription);
  
  return <div className={styles.cardContainer}>
    <img className={styles.img} src={img}></img>
    <p>{name}</p>
    {/* <p>{shortDescription}</p> */}
    <p>{review}</p>
    <p>{phone}</p>
  </div>;
}

export default ProviderCard;

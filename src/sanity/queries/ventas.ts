export const ARTICULOS_DESTACADOS_QUERY = `
  *[_type == "articuloVenta" && destacado == true && estado != "vendido"] | order(_createdAt desc) [0...$limit] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    titulo,
    slug,
    descripcionCorto,
    precio,
    moneda,
    estado,
    categoria,
    destacado,
    kilometraje,
    anio,
    imagen,
    "imagenUrl": imagen.asset->url
  }
`;

export const TODOS_LOS_ARTICULOS_QUERY = `
  *[_type == "articuloVenta"] | order(_createdAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    titulo,
    slug,
    descripcionCorto,
    precio,
    moneda,
    estado,
    categoria,
    destacado,
    kilometraje,
    anio,
    imagen,
    "imagenUrl": imagen.asset->url
  }
`;

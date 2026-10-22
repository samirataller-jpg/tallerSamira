const ARTICULO_PROJECTION = `
  _id,
  _type,
  _createdAt,
  _updatedAt,
  titulo,
  slug,
  descripcionCorto,
  descripcionLarga,
  precio,
  moneda,
  estado,
  categoria,
  destacado,
  kilometraje,
  anio,
  combustible,
  transmision,
  color,
  imagen,
  galeria,
  "imagenUrl": imagen.asset->url
`;

/** Catálogo completo: documentos publicados con slug, sin tope de cantidad. */
export const TODOS_LOS_ARTICULOS_QUERY = `
  *[_type == "articuloVenta" && defined(slug.current)] | order(_createdAt desc) {
    ${ARTICULO_PROJECTION}
  }
`;

/** Destacados de la home: todos los marcados, sin slice fijo. */
export const ARTICULOS_DESTACADOS_QUERY = `
  *[_type == "articuloVenta" && defined(slug.current) && destacado == true && estado != "vendido"] | order(_createdAt desc) {
    ${ARTICULO_PROJECTION}
  }
`;

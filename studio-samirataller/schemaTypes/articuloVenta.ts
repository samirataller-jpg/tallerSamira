import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const articuloVenta = defineType({
  name: "articuloVenta",
  title: "Artículo en venta",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titulo" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "descripcionCorto",
      title: "Descripción corta",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(300),
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: "precio",
      title: "Precio",
      type: "number",
      validation: (r) => r.required().positive(),
    }),
    defineField({
      name: "moneda",
      title: "Moneda",
      type: "string",
      options: {
        list: [
          { title: "Pesos (ARS)", value: "ARS" },
          { title: "Dólares (USD)", value: "USD" },
        ],
        layout: "radio",
      },
      initialValue: "ARS",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "estado",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "Disponible", value: "disponible" },
          { title: "Reservado", value: "reservado" },
          { title: "Vendido", value: "vendido" },
        ],
        layout: "radio",
      },
      initialValue: "disponible",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categoria",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Vehículo", value: "vehiculo" },
          { title: "Repuesto", value: "repuesto" },
          { title: "Herramienta", value: "herramienta" },
          { title: "Accesorio", value: "accesorio" },
        ],
      },
    }),
    defineField({
      name: "destacado",
      title: "Destacado en la home",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "anio",
      title: "Año",
      type: "number",
      description: "Solo para vehículos",
    }),
    defineField({
      name: "kilometraje",
      title: "Kilometraje",
      type: "number",
      description: "Solo para vehículos",
    }),
  ],
  preview: {
    select: {
      title: "titulo",
      subtitle: "estado",
      media: "imagen",
    },
    prepare({ title, subtitle, media }) {
      const labels: Record<string, string> = {
        disponible: "✅ Disponible",
        reservado: "🟡 Reservado",
        vendido: "🔴 Vendido",
      };
      return {
        title,
        subtitle: labels[subtitle] ?? subtitle,
        media,
      };
    },
  },
});

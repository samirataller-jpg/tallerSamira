import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    "Faltan NEXT_PUBLIC_SANITY_PROJECT_ID o NEXT_PUBLIC_SANITY_DATASET.",
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-06-10",
  /** false = API directa, sin retraso del CDN (mejor para ver cambios de Studio). */
  useCdn: false,
  perspective: "published",
});

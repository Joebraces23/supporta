import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "awq727x1",
  dataset: "production",
  apiVersion: "2024-01-10",
  useCdn: true,
});

import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "qywa00ng",
  dataset: "production",
  apiVersion: "2024-06-26",
  useCdn: true,
});

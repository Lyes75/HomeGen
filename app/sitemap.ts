import type { MetadataRoute } from "next";
import statesData from "@/data/states.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const statePages = statesData.map((s) => ({
    url: `https://homegen.co/generator-installation/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://homegen.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://homegen.co/get-quotes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://homegen.co/states",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...statePages,
  ];
}

import type { MetadataRoute } from "next";
import statesData from "@/data/states.json";
import citiesFullData from "@/data/cities-full.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const statePages = statesData.map((s) => ({
    url: `https://homegen.co/generator-installation/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages = citiesFullData.map((c) => ({
    url: `https://homegen.co/generator-installation/${c.stateSlug}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://homegen.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://homegen.co/calculator",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
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
    {
      url: "https://homegen.co/guides/generator-installation-cost",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://homegen.co/guides/generac-vs-kohler",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://homegen.co/guides/generator-size-calculator",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...statePages,
    ...cityPages,
  ];
}

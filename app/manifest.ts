import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SaverPe — E-Gift Cards",
    short_name: "SaverPe",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fffcf3",
    theme_color: "#ffb800",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

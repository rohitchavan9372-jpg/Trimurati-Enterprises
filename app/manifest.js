export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Trimurti Enterprise",
    short_name: "Trimurti",
    description: "Infrastructure services, blasting expertise, transport logistics, and aggregate supply.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8ff",
    theme_color: "#465b9e",
    icons: [
      {
        src: "/TE.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/TE.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/TE.png",
        sizes: "any",
        type: "image/png"
      }
    ]
  };
}

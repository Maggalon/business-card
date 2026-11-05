import { ImageResponse } from "next/og";
import { hero, person } from "@/content/cv";

export const alt = `${person.name}, резюме`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const headline = hero.lines.join(" ");

// Satori needs a TTF with Cyrillic glyphs, so only the characters used here are requested.
async function loadGeist(text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Geist:wght@600&text=${encodeURIComponent(text)}`,
  ).then((response) => response.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error("Geist font file was not found in the Google Fonts response.");
  return fetch(url).then((response) => response.arrayBuffer());
}

export default async function Image() {
  const font = await loadGeist(`${headline}${person.name}${person.role}${hero.proof}`);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: "#f3ecdd",
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, color: "#2b4a9e" }}>{person.role}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 72,
          lineHeight: 1.1,
          color: "#15224d",
        }}
      >
        {hero.lines.map((line) => (
          <div key={line} style={{ display: "flex" }}>
            {line}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#4c5676" }}>
        <div style={{ display: "flex" }}>{person.name}</div>
        <div style={{ display: "flex" }}>{hero.proof}</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Geist", data: font, weight: 600, style: "normal" }],
    },
  );
}

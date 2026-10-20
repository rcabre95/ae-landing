import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "ArchTech Enterprises: your bridge to better practices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse can't read CSS variables, so these mirror the tokens in globals.css.
const colors = {
  background: "#F8F4EC",
  primary: "#143865",
  accent: "#D39F10",
};

const logoData = await readFile(
  join(process.cwd(), "public/ae-logo.svg"),
  "base64",
);
const logoSrc = `data:image/svg+xml;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: colors.background,
          borderBottom: `16px solid ${colors.accent}`,
        }}
      >
        <img src={logoSrc} width={754} height={440} alt="" />
        <div
          style={{
            marginTop: 8,
            fontSize: 40,
            fontWeight: 600,
            color: colors.primary,
          }}
        >
          Your bridge to better practices.
        </div>
      </div>
    ),
    size,
  );
}

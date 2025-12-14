import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "";
  const fontData = await fetch(
    new URL(
      "../../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: 200,
          paddingRight: 200,
          justifyContent: "center",
          backgroundColor: "rgb(244 63 94)",
        }}
      >
        {title && (
          <div
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: "white",
              marginBottom: 80,
            }}
          >
            {title}
          </div>
        )}
        <div style={{ fontSize: 48, color: "white", fontWeight: 700 }}>
          Keystatic’s
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, color: "white" }}>
          Puppy Owners Hub
        </div>
      </div>
    ),
    {
      width: 1801,
      height: 945,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}

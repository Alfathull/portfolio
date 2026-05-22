import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F7F4EF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "24px",
            fontSize: "14px",
            color: "#1A56A0",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: "32px",
              height: "2px",
              backgroundColor: "#1A56A0",
            }}
          />
          Full Stack Developer & QA Engineer
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#0D1B2A",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          Miftah Alfathul Rizky
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#8B96A5",
            lineHeight: 1.6,
            maxWidth: "700px",
          }}
        >
          Building enterprise-grade web systems end-to-end — from database
          architecture to pixel-perfect UI.
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "48px",
          }}
        >
          {[
            { num: "6+", label: "Client Products" },
            { num: "2+", label: "Years Experience" },
            { num: "7+", label: "Websites Shipped" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "36px", fontWeight: 700, color: "#0D1B2A" }}>
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#8B96A5",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "13px",
            color: "#1A56A0",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          alfat.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

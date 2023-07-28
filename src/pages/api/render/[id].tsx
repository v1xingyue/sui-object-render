import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const OG = (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <p>{id}</p>
        <h1>Hello sui object world</h1>
      </div>
    ),
    {
      width: 600,
      height: 600,
    }
  );
};

export default OG;

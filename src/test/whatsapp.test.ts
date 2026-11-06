import { describe, expect, it } from "vitest";
import { MSG, waLink } from "@/lib/whatsapp";

describe("WhatsApp links", () => {
  it("use the ATR commercial number", () => {
    expect(waLink()).toBe("https://wa.me/5547991748185");
  });
  it("encode the product message", () => {
    const url = new URL(waLink(MSG.c6));
    expect(url.searchParams.get("text")).toBe(MSG.c6);
    expect(MSG.c6).toContain("6 metros");
  });
});

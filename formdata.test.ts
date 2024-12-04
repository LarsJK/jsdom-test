import { test, expect } from "vitest";

test("form data file", () => {
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  const formData = new FormData();
  formData.append("file", file);
  expect(formData.get("file")).toBeDefined();
});

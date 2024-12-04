// @vitest-environment jsdom

import { test, expect } from "vitest";

test("form data file", async () => {
  const file = new File(["{}"], "hello.json", { type: "application/json" });
  const formData = new FormData();
  formData.append("file", file);

  const request = new Request("http://localhost:3000", {
    method: "POST",
    body: formData,
  });

  const text = await request.text();

  console.log(text);

  expect(formData.get("file")).toBeDefined();
});

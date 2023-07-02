import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
import App from "@/components/App.vue";

function setup() {
  render(App);
}

it("says hello world", () => {
  setup();
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});

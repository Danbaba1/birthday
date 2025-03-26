import { it, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../src/features/MembersArea/sidebar";
import React from "react";

it("should render Sidebar Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
  });
});

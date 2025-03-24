import { expect, it, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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

it("should confirm menu icon being clicked and the contents of the sidebar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    const menuIcon = screen.getByTestId("menu-icon");
    expect(screen.queryByText("Home")).not.toBeDefined();
    fireEvent.click(menuIcon);

    expect(screen.getByText("Home")).toBeDefined();

    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("Profile")).toBeDefined();
    expect(screen.getByText("Search")).toBeDefined();
    expect(screen.getByText("Notifications")).toBeDefined();
    expect(screen.getByText("Explore")).toBeDefined();
    expect(screen.getByText("Log Out")).toBeDefined();
  });
});

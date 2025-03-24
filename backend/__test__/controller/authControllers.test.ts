import request from "supertest";
import app from "../../src/app";
import { addUser } from "../../src/services/userService";
// import User from "../../src/models/userModel";

jest.mock("../../src/services/userService",()=>({
  addUser: jest.fn(),
}));

const validData: any = {
  username: "johndoe",
  email: "johndoe@example.com",
  password: "password123",
};


describe("User Registration API", () => {
  it("should register a user successfully", async () => {
    (addUser as jest.Mock).mockResolvedValue({ success: true });

    const response = await request(app).post("/register").send(validData);

    expect(response.status).toBe(201);
    expect(response.text).toBe("User registered successfully");
  });

  it("should return 400 if username already exists", async () => {
    (addUser as jest.Mock).mockResolvedValue({
      success: false,
      error: "Username already exists"});

    const response = await request(app).post("/register").send(validData);

    expect(response.status).toBe(400);
    expect(response.text).toEqual( "Username already exists");
  });

  it("should return 500 for unexpected errors", async () => {
    // Mock addUser to throw an error
    (addUser as jest.Mock).mockRejectedValue(new Error("Database error"));

    const response = await request(app).post("/register").send(validData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Database error");
  });
});
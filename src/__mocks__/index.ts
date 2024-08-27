import { Request, Response } from "express-serve-static-core";

export const mockRequest = {} as Request;
export const mockResponse = {
  send: jest.fn(),
} as unknown as Response;

export const mockUsers = [
  {
    _id: "66bfa27e9db3d66e047460e0",
    username: "chember",
    email: "chember@gmail.com",
    password: "$2b$10$RgNJkurH8c4mi/drM9gileeBn.DCHvDMZ7Xu5JjsnwZKcRwnyras6",
    __v: 0,
  },
  {
    _id: "66bfa59906ce4b540bd5d270",
    username: "johns",
    email: "john@gmail.com",
    password: "$2b$10$1XvA1zxEkPvVbVLKmh9qYuZSyOmCTTcfJiZbirsT3X3r.8B/cb1pq",
    __v: 0,
  },
  {
    _id: "66c22acf2890a058ed922d6b",
    username: "johns1",
    email: "john1@gmail.com",
    password: "$2b$10$giMg1j2XunfDoWtfCl1E4.MADq/0onEfdNmd7jOxoykUDMcXip/j6",
    __v: 0,
  },
  {
    _id: "66c22aff1e9738619db15bc6",
    username: "john2",
    email: "john2@gmail.com",
    password: "$2b$10$AKtcYBY8yAjci10QIBQ49OIqoiAFOQQxyZk52yymSmj0uWYEdCGa2",
    __v: 0,
  },
  {
    _id: "66cd5f1a76dc618abca190e4",
    username: "docker",
    email: "docker@gmail.com",
    password: "$2b$10$zdImJbPM3kqEh2hJKuslQuGQ9oFH6jr5YBAksTaB3kmWleVCTa.qi",
    __v: 0,
  },
];

import { Router } from "express";
import { AuthService } from "./auth.service";

const AuthController = Router();

AuthController.get("/sign-in", (req, res) => {
  AuthService.signIn(req, res);
});

AuthController.get("/sign-up", (req, res) => {
  AuthService.signUp(req, res);
});

AuthController.get("/sign-out", (req, res) => {
  AuthService.signOut(req, res);
});

export { AuthController };

import express from "express";
import UserController from "../controllers/user.controller";
import AuthController from "../controllers/auth.controller";

const router = express.Router();

router.route("/api/users").get(UserController.list).post(UserController.create);

router
  .route("/api/users/:userId")
  .get(AuthController.requireSignin, UserController.read)
  .put(
    AuthController.requireSignin,
    AuthController.hasAuthorization,
    UserController.update
  )
  .delete(
    AuthController.requireSignin,
    AuthController.hasAuthorization,
    UserController.remove
  );

router.param("userId", UserController.userByID);

export default router;

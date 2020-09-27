import express from "express";
import ExpenseController from "../controllers/expense.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router
  .route("/api/expenses/current/preview")
  .get(authCtrl.requireSignin, ExpenseController.currentMonthPreview);

router
  .route("/api/expenses/by/category")
  .get(authCtrl.requireSignin, ExpenseController.expenseByCategory);

router
  .route("/api/expenses/plot")
  .get(authCtrl.requireSignin, ExpenseController.plotExpenses);

router
  .route("/api/expenses/category/averages")
  .get(authCtrl.requireSignin, ExpenseController.averageCategories);

router
  .route("/api/expenses/yearly")
  .get(authCtrl.requireSignin, ExpenseController.yearlyExpenses);

router
  .route("/api/expenses")
  .post(authCtrl.requireSignin, ExpenseController.create)
  .get(authCtrl.requireSignin, ExpenseController.listByUser);

router
  .route("/api/expenses/:expenseId")
  .put(
    authCtrl.requireSignin,
    ExpenseController.hasAuthorization,
    ExpenseController.update
  )
  .delete(
    authCtrl.requireSignin,
    ExpenseController.hasAuthorization,
    ExpenseController.remove
  );

router.param("expenseId", ExpenseController.expenseByID);

export default router;

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    `mongodb+srv://superadmin:B1FQSI9lIZfzc9Ru@cluster0.ml2ox.mongodb.net/expense_tracker?retryWrites=true&w=majority`,
};

export default config;

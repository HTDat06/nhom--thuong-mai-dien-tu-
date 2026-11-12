require("dotenv").config();

module.exports = {
  development: {
    dialect: "mssql",
    dialectModulePath: "msnodesqlv8/lib/sequelize",

    dialectOptions: {
      options: {
        connectionString:
          "Driver={ODBC Driver 17 for SQL Server};Server=localhost,1433;Database=ecommerce;Trusted_Connection=Yes;TrustServerCertificate=Yes;",
        trustedConnection: true,
      },
    },

    logging: console.log,
  },
};
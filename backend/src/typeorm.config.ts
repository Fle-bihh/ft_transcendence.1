// typeorm.config.ts

const config = {
    type: "postgres",
    host: "localhost",
    port: 5001,
    username: "postgres",
    password: "password",
    database: "chat_app",
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    cli: {
      migrationsDir: "src/migration"
    }
  };
  
  export default config;
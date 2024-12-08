
// declare namespace Express {
//     interface Request {
//       user:JWTContent;
//     }
//   }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      ADMIN_EMAIL: string;
      ADMIN_PASSWORD: string;
    }
  }
}
import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "jz3svh3y1gxz4vli5tbf",
  password: "pscale_pw_QUmyRWf90FJ4p8z14QWFSlUeNadINQOL68DHM1XK2Az",
  database: "prueba",
  ssl: {
    rejectUnauthorized: false,
  },
});

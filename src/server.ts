import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running at the address: http://localhost:${PORT}`);
});

import { app } from "./app";
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at the address: http://localhost:${PORT}`);
});

import { app } from './app';
import config from './config/custom-environment-variables'

const PORT = config.port || 7000;
app.listen(PORT, () => {
  console.log(`Server running at the address: http://localhost:${PORT}`);
});

import app from "./src/server/app";
const port = 3300;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

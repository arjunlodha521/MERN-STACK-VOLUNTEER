

import app from "./index.js";

//i made changes due to unwanted error of the nodemon
// app.listen(process.env.PORT, () => {
//   console.log(`Server Listening At Port ${process.env.PORT}`);
// });

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


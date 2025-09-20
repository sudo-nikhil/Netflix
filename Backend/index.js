const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/success", (req, res) => {
  console.log(req.body);

  let valid = false;

  req.body.userdata.forEach((data) => {
    if (
      data.username === req.body.eusername &&
      data.password == req.body.epassword
    ) {
      valid = true;
    }
  });

  if (valid) {
    res.send(true);
  } else {
    res.send(false);
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

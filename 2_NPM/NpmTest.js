const figlet = require("figlet");
figlet("I am Anvi", function (err, data) {
  if (err) {
    console.log("Something went wrong");
    console.dir(err);
    return;
  }
  console.log(data);
});

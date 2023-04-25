const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({}),

  fileFilter: (req, file, cb) => {
    console.log("yash varshney");
    let ext = path.extname(file.originalname);
    if (ext !== ".jpeg" && ext !== ".jpg" && ext !== ".png") {
      cb(new Error("File is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
module.exports = upload;

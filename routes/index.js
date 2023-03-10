const express = require("express");
const router = express.Router();

const { createRichMenuUser } = require("../services/richmenu/create-richmenu-user");
const { deleteRichMenuUser } = require("../services/richmenu/delete-richmenu-user");

const { createRichMenuRepairman } = require("../services/richmenu/create-richmenu-repairman");
const { deleteRichMenuRepairman } = require("../services/richmenu/delete-richmenu-repairman");
const { unlinkRichMenuRepairman } = require("../services/richmenu/unlink-richmenu-repairman");



// localhost:4000/create/richmenu/user
router.get("/create/richmenu/user", async function (req, res, next) {
  await createRichMenuUser();
  return res.status(200).json({ message: "สร้างเมนูสำเร็จ" });
});

// localhost:4000/delete/richmenu/user
router.get("/delete/richmenu/user", async function (req, res, next) {
  await deleteRichMenuUser();
  return res.status(200).json({ message: "ลบเมนูสำเร็จ" });
});



//repairman
router.get("/create/richmenu/repairman/:userId", async function (req, res, next) {
  await createRichMenuRepairman(req.params.userId);
  return res.status(200).json({ message: "สร้างเมนูสำเร็จ" });
});

router.get("/delete/richmenu/repairman", async function (req, res, next) {
  await deleteRichMenuRepairman();
  return res.status(200).json({ message: "ลบเมนูสำเร็จ" });
});

//unlink repairman

router.get("/unlink/richmenu/repairman/:userId", async function (req, res, next) {
  await unlinkRichMenuRepairman(req.params.userId);
  return res.status(200).json({ message: "สร้างเมนูสำเร็จ" });
});


module.exports = router;

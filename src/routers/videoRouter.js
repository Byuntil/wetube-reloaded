import express from "express";
import { see, edit, upload, deleteVideo } from "../Controllers/videoContoller";

const videoRouter = express.Router();

videoRouter.get("/upload", upload); //:id보다 위에 있어야 express가 오해를 안함(upload를 id로 착각)
videoRouter.get("/:id(\\d+)", see); //정규식 사용 조건을 걸어놔서 여기는 숫자만 사용가능 => 이제 upload가 밑에 있어도 상관 없음
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;

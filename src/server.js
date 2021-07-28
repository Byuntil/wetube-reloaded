import express from "express"; //const express = require("express"); 더 최신 문법으로 바꾸기 가능
import morgan from "morgan"; // middleware 더욱 상세한 정보를 포함하고 있음 / 아까 만들었던 middleware와 같은 기능 Method, route, status code, second....을 포함함(dev인 경우)
import globalRouter from "./routers/globlaRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 5000;
const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening); //4000의 포트를 열어 서버가 보게 만듬

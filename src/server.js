import express from "express"; //const express = require("express"); 더 최신 문법으로 바꾸기 가능
import morgan from "morgan"; // middleware 더욱 상세한 정보를 포함하고 있음 / 아까 만들었던 middleware와 같은 기능 Method, route, status code, second....을 포함함(dev인 경우)
import globalRouter from "./routers/globlaRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 10000;
const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
//console.log(process.cwd()); // =>nodejs를 시작하는 곧이 current working directory임
//express는 view를 찾을 때 현재 작업 디렉토리 + /view로 찾기 때문에 우리가 원하는 src/view/home을 찾지 못함
//그래서 해결책 👇🏻
app.set("views", process.cwd() + "/src/views");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening); //4000의 포트를 열어 서버가 보게 만듬

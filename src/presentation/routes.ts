import express from "express";
import { getAllVideosEndpoint } from "./endpoints/videos/getAllVideosEndpoint";
import { getVideoDetailsEndpoint } from "./endpoints/videos/getVideoDetailsEndpoint";
import { loginEndpoint } from "./endpoints/user/loginEndpoint";
import signupEndpoint from "./endpoints/user/signupEndpoint";
import changePasswordEndpoint from "./endpoints/user/changePasswordEndpoint";
import uploadVideoEndpoint from "./endpoints/videos/uploadVideoEndpoint";
import deleteVideoEndpoint from "./endpoints/videos/deleteVideoEndpoint";
import getUserVideosEndpoint from "./endpoints/videos/getUserVideosEndpoint";
import editVideoEndpoint from "./endpoints/videos/editVideoEndpoint";

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/user/signup", signupEndpoint);
app.post("/user/login", loginEndpoint);
app.post("/user/change-password", changePasswordEndpoint);

// app.get("/videos", getAllVideosEndpoint)

app.post("/videos/upload", uploadVideoEndpoint);
app.get("/videos/all", getAllVideosEndpoint);
app.get("/videos/details", getVideoDetailsEndpoint);
app.get("/videos/user-videos", getUserVideosEndpoint);
app.put("/videos/edit", editVideoEndpoint)
app.delete("/videos/:videoId", deleteVideoEndpoint);

export default app;
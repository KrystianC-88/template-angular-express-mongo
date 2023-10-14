import express from "express";
// import logger from "morgan";
import * as path from "path";

// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "../public")));


// Routes
import index  from "./routes/index";
import todo   from "./routes/todo";
app.use("/", index);
app.use("/api/todo", todo);


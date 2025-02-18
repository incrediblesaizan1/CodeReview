import express from "express";
import cors from "cors";
import { getData } from "./services/ai.services.js";

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "https://incrediblesaizan1-code-review.vercel.app",
];

app.use(express.json());

// Debugging CORS middleware
app.use(
    cors({
        origin: function (origin, callback) {
            console.log("Request Origin:", origin);  // Debug log
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                console.error("Blocked by CORS: ", origin);
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Handle preflight requests
app.options("*", cors());

// Manually add CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Routes
app.get("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("hello");
});

app.post("/", async (req, res) => {
    const question = req.body.code;
    const data = await getData(question);
    res.send(data);
});

export default app;

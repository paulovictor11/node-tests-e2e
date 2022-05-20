import express from "express";
import { PrismaLessonsRepository } from "./repositories/prisma/PrismaLessonsRepository";
import { CreateLesson } from "./services/CreateLesson";

export const app = express();

app.use(express.json());

app.post("/lessons", async (req, res) => {
    const { title, description } = req.body;

    const prismaLessonsRepository = new PrismaLessonsRepository();
    const createLesson = new CreateLesson(prismaLessonsRepository);

    try {
        await createLesson.execute({ title, description });
        return res.status(201).send();
    } catch (err: any) {
        return res.status(400).json({
            error: err.message,
        });
    }
});

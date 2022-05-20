import crypto from "crypto";
import { Lesson } from "@prisma/client";
import {
    ICreateLessonData,
    ILessonsRepository,
} from "../../src/repositories/LessonsRepository";

export class InMemoryLessonsRepository implements ILessonsRepository {
    public items: Lesson[] = [];

    async create(data: ICreateLessonData): Promise<void> {
        this.items.push({
            id: crypto.randomUUID(),
            title: data.title,
            description: data.description ?? null,
        });
    }
}

import { prisma } from "../../prisma";
import { ICreateLessonData, ILessonsRepository } from "../LessonsRepository";

export class PrismaLessonsRepository implements ILessonsRepository {
    async create(data: ICreateLessonData): Promise<void> {
        await prisma.lesson.create({ data });
    }
}

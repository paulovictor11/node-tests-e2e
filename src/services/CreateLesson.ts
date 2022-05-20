import { ILessonsRepository } from "../repositories/LessonsRepository";

interface ICreateLessonRequest {
    title: string;
    description?: string;
}

export class CreateLesson {
    constructor(private lessonsRepository: ILessonsRepository) {}

    async execute({ title, description }: ICreateLessonRequest) {
        // Verificar se já existe uma lesson com o mesmo título

        if (!title) {
            throw new Error("Title is required");
        }

        await this.lessonsRepository.create({ title, description });
    }
}

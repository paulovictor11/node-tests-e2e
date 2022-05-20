export interface ICreateLessonData {
    title: string;
    description?: string;
}

export interface ILessonsRepository {
    create(data: ICreateLessonData): Promise<void>;
}

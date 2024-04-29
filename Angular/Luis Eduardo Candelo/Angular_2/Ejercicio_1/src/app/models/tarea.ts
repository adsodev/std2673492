export interface TareaModel {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean;
    edited?: boolean;
}

export type FilterTypeTarea = 'all' | 'active' | 'completed';
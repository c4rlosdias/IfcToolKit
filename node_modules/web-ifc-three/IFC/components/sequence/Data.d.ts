import { IfcState } from '../../BaseDefinitions';
export declare class Data {
    state: IfcState;
    is_loaded: boolean;
    work_plans: {
        [key: number]: any;
    };
    workSchedules: {
        [key: number]: any;
    };
    work_calendars: {
        [key: number]: any;
    };
    work_times: {
        [key: number]: any;
    };
    recurrence_patterns: {
        [key: number]: any;
    };
    time_periods: {
        [key: number]: any;
    };
    tasks: {
        [key: number]: any;
    };
    task_times: {
        [key: number]: any;
    };
    lag_times: {
        [key: number]: any;
    };
    sequences: {
        [key: number]: any;
    };
    utils: any;
    constructor(state: IfcState);
    load(modelID: number): Promise<void>;
    loadWorkSchedules(modelID: number): Promise<void>;
    loadWorkScheduleRelatedObjects(modelID: number): Promise<void>;
    loadTasks(modelID: number): Promise<void>;
    loadTaskSequence(modelID: number): Promise<void>;
    loadTaskOutputs(modelID: number): Promise<void>;
    loadTaskNesting(modelID: number): Promise<void>;
    loadTaskOperations(modelID: number): Promise<void>;
}

export interface ApiProgrssInterface<T> {
    isError: boolean;
    isLoading: boolean;
    isFulfilled: boolean;
    data: T;
    errorMessage?: string | ApiErrorOutputInterface;
}

export interface ApiErrorOutputInterface {
    status: number;
    timestamp: string;
    message: string;
    debugMessage: string;
}
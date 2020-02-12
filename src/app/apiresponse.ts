import { Client } from './client';

export class ApiResponse {
    timestamp: string;
    status: number;
    code: string;
    message: string;
    response: Client[];
}
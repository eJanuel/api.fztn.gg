import { QueryService } from './query.service';
export declare class QueryController {
    private service;
    constructor(service: QueryService);
    getStatus(): Promise<String | any>;
}

import { ContextClass } from "./context-class";
import { Properties } from "./properties";

export interface Weather {
    "@context": Array<ContextClass | string>;
    type:       string,
    properties: Properties
}

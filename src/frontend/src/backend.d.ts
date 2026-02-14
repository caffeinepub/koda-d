import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CreatorForm {
    bio: string;
    portfolio: string;
    name: string;
    contactEmail: string;
}
export type Time = bigint;
export interface Submission {
    creator?: Creator;
    timestamp: Time;
    submissionType: SubmissionType;
    brand?: Brand;
}
export interface Brand {
    name: string;
    description: string;
    website: string;
    contactEmail: string;
}
export interface BrandForm {
    name: string;
    description: string;
    website: string;
    contactEmail: string;
}
export interface Creator {
    bio: string;
    portfolio: string;
    name: string;
    contactEmail: string;
}
export enum SubmissionType {
    creator = "creator",
    brand = "brand"
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    getSubmission(email: string): Promise<Submission>;
    submitBrand(form: BrandForm): Promise<string>;
    submitCreator(form: CreatorForm): Promise<string>;
}

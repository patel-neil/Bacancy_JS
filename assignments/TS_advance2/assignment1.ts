// Assignment 1: 
// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.

type ISNumber<T> = T extends number ? true : false;

type ExtractEmail<T> = T extends { email: infer E } ? E : never;
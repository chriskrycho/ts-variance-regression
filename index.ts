import { Maybe } from "true-myth";

type Person = { age: number; name?: string };
let me: Person = { age: 31, name: "Chris" };

let wrapped: Maybe<Partial<Person>> = Maybe.of(me);

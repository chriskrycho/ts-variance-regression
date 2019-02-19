# Regression in Variance?

In TS <=3.3.3, the assignment in `index.ts` works fine. In TS `3.4.0-dev.20190216`, it fails to compile with the following error output:

```
index.ts:6:5 - error TS2322: Type 'Maybe<Person>' is not assignable to type 'Maybe<Partial<Person>>'.
  Type 'Just<Person>' is not assignable to type 'Maybe<Partial<Person>>'.
    Type 'Just<Person>' is not assignable to type 'Just<Partial<Person>>'.
      Types of property 'isJust' are incompatible.
        Type '(this: Maybe<Person>) => this is Just<Person>' is not assignable to type '(this: Maybe<Partial<Person>>) => this is Just<Partial<Person>>'.
          The 'this' types of each signature are incompatible.
            Type 'Maybe<Partial<Person>>' is not assignable to type 'Maybe<Person>'.
              Type 'Just<Partial<Person>>' is not assignable to type 'Maybe<Person>'.
                Type 'Just<Partial<Person>>' is not assignable to type 'Just<Person>'.
                  Types of property 'value' are incompatible.
                    Type 'Partial<Person>' is not assignable to type 'Person'.

6 let wrapped: Maybe<Partial<Person>> = Maybe.of(me);
      ~~~~~~~
```

Possibly of interest: the direction that assignment is said not to satisfy the type requirements *flips* after the statement that `The 'this' types of each signature are incompatible.`: from the original `Type 'Maybe<Person>' is not assignable to type 'Maybe<Partial<Person>>'` to `Type 'Maybe<Partial<Person>>' is not assignable to type 'Maybe<Person>'`. This seems backwards.
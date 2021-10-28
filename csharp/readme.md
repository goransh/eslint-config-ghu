# C# clean code settings

This directory contains two configuration files for clean code in C# project. Most of these configurations depend on [Resharper](https://www.jetbrains.com/resharper/) to work. If you are using [Rider](https://www.jetbrains.com/rider/), Resharper is included by default.

The configuration contains a lot of auto-fix rules that will automatically add spacings and newlines where needed.

## Setup

1. The `.editorconfig` file can be copied as-is to the top-level directory of your project (same level as the `<SolutionName>.sln` file).
2. The `Resharper.DotSettings` should be copied to the same directory as the `.editorconfig` and `<SolutionName>.sln` file and then renamed to `<SolutionName>.sln.DotSettings`. So for instance if your solution file is called `CleanCode.sln`, then this file should be called `CleanCode.sln.DotSettings` and be placed at the same directory.
3. Both of these files should be committed to git.

## Rules

### 1. Curly braces at the end of line 

This configuration prefers curly braces at the end of line like this:

```csharp
public MyClass MyMethod(int value) {
    if (value == 0) {
        throw new ArgumentException(...);
    }
    
    return new MyClass {
        Value = value,
    };
}
```

instead of the default C# style:

```csharp
public MyClass MyMethod(int value)
{
    if (value == 0)
    {
        throw new ArgumentException(...);
    }
    
    return new MyClass
    {
        Value = value,
    };
}
```

#### Reasoning

1. Curly braces aren't _that_ important. I often find myself reading code more than I'm writing code. When I'm reading code, I read from top to bottom, from left to right. In code bases where open curly braces are placed on their own lines, the curly braces feel like unnecessary noise that I just skip over. In my opinion, opening curly braces aren't important enough to warrant their own lines, and it takes focus away from the actual important lines.
2. The code is already indented. When opening a new code block with curly braces, we also indent the code in that block. This also helps signal to the reader where the code block starts and ends, making the opening curly brace on a new line redundant.
3. Most other languages that I work with (like TypeScript, Kotlin and Java) use the end of line convention, and it's nice to have a consistent convention between languages where it makes sense.
4. Some common concerns I've seen people talk about when using end of line opening braces are addressed in the next two rules.

### 2. Treat parenthesis `()` as you would curly braces `{}`

In parameter lists or any other scenario where there's a multiline expression or statement within parenthesis, the closing parenthesis `)` should be placed on a new line just as if it was a curly brace `}`. This improves consistency in the code base and also improves readability in many cases.

Do this:

```csharp
public static async Task<IEnumerable<MyClass>> MethodWithAVeryLongSignature(
    IReadonlyDictionary<string, DateTimeOffset> dictionary
) {
    ...
}
```

instead of this:

```csharp
public static async Task<IEnumerable<MyClass>> MethodWithAVeryLongSignature(
    IReadonlyDictionary<string, DateTimeOffset> dictionary) {
    ...
}
```

Do this:
```csharp
_logger.LogInformation(
    "Starting processing of file {FileName} at {TimeStamp}",
    fileName,
    DateTime.UtcNow.ToString("O")
);
```

instead of this:

```csharp
_logger.LogInformation(
    "Starting processing of file {FileName} at {TimeStamp}",
    fileName,
    DateTime.UtcNow.ToString("O"));
```

### 3. Always use curly braces for if, for and while statements

Do this:
```csharp
if (something) {
    return somethingElse;
}
```

or this (only for if-statements):

```csharp
if (something) return somethingElse;
```

but never do this:

```csharp
if (something)
    return somethingElse;
```


**Do not** mix styles within a single if-else.

Do this:

```csharp
if (something) {
    return somethingElse;  
} else {
    ...
}
```

instead of this:

```csharp
if (something) return somethingElse;
else {
    ...
}
```

### 4. Put all parameters/arguments/elements either on one line or each on a separate line

Do this:

```
public static async Task<IEnumerable<MyClass>> MyMethodAsync(
    string name,
    IReadonlyDictionary<string, DateTimeOffset> dateTimes,
    CancellationToken cancellationToken = default
) {
    ...
}
```

instead of this:

```
public static async Task<IEnumerable<MyClass>> MyMethodAsync(string name,
    IReadonlyDictionary<string, DateTimeOffset> dateTimes, CancellationToken cancellationToken = default
) {
    ...
}
```

Do this:

```csharp
new MyClass {
    Property0 = value0,
    Property1 = value1.ToString(),
    Property2 = enumerable.Select(value => value / 2).ToList(),
}
```

instead of this:

```csharp
new MyClass {
    Property0 = value0, Property1 = value1.ToString(),
    Property2 = enumerable.Select(value => value / 2).ToList(),
}
```

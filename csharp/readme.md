# C# code style

This repo contains configuration files I use for my C# projects. See the _Setup_ instructions below. Most of these configurations depend on [Resharper](https://www.jetbrains.com/resharper/) to work. If you are using [Rider](https://www.jetbrains.com/rider/), Resharper is included by default.

## Setup

1. The `.editorconfig` file can be copied as-is to the top-level directory of your project (same level as the `<SolutionName>.sln` file).
2. The `SolutionName.sln.DotSettings` should be copied to the same directory as the `.editorconfig` and `<SolutionName>.sln` file and then renamed to `<SolutionName>.sln.DotSettings`. So for instance if your solution file is called `CleanCode.sln`, then this file should be called `CleanCode.sln.DotSettings` and be placed at the same directory.
3. Both of these files should be committed to git.

### Other files I recommend including in your repos

* `.gitignore`
  * Generate on [gitignore.io](https://www.toptal.com/developers/gitignore/).
* `.gitattributes`
  * Used to set attributes to the files that are committed to git
  * Can be used to set line separator used for code pushed to git, regardless of the line separator used by the developer's OS. Use this if you have trouble with line separator diffs in git.
  * See [example file](../.gitattributes) (for .ts, .tsx).
* `NuGet.Config`
  * If you use any private/custom NuGet sources in your project, include the sources in a `NuGet.Config` file so that developers don't have to set it up on their own.
* `readme.md`
  * If nothing else, explain how to set up the project for local development.

### Auto-format code

The `.DotSettings` file includes configuration for how Rider/Resharper should reformat your code. You can try this configuration by clicking `Code` => `Reformat Code` (`Ctrl+Alt+L` by default).

![Rider_reformat_code.png](images%2FRider_reformat_code.png)

The "Reformat" action adds or removes spaces and line breaks based on the configuration.

In Resharper, a "Cleanup" action is a more powerful tool that can also make small changes to your code, such as applying a consistent `var` style, adding braces to `if`-statements, ordering imports etc. This configuration contains a custom Cleanup action called "Ghu Code Style". This style is also configured as the default style for "silent cleanup".

![Rider_Code_Cleanup_settings.png](images%2FRider_Code_Cleanup_settings.png)

To run this cleanup, you can click the "Silent Reformat and Cleanup" button. This will run the "Ghu Code Style" clean up on the current file. This cleanup action will also run the "Reformat" action, so there is no need to do both.

If you want to run this cleanup on multiple files, you can click "Format and Cleanup..." and follow the dialog.

I recommend either overriding the `Ctrl+Alt+L` keybinding to run "Silent cleanup" instead of just formatting or configuring Rider to run "Reformat and Cleanup Code" on save. Keep in mind this configuration must be set per project. Also, the action will only execute on explicit save (`Ctrl+S`), not when Rider saves files automatically.

![Rider_actions_on_save.png](images%2FRider_actions_on_save.png)

### Override the configuration

To configure the styles used by the "Reformat" action, go to `Editor` => `Code Style` => `C#` in Rider settings.

![Rider_code_style_settings.png](images%2FRider_code_style_settings.png)

If you make any changes and want to apply those to your `.editorconfig` file, you can export the settings from the `Code Style` section.

![Rider_code_style_export_editorconfig.png](images%2FRider_code_style_export_editorconfig.png)

If you want to make any changes to the Code Cleanup settings, you can either modify the `Ghu Code Style` or make your own (remember to set that style as the default for silent cleanup). You can then click the arrow button next to the _Save_ button and save the configuration to the `.sln.DotSettings` file so that everyone on your team gets the updated configuration.

![Rider_code_style_settings_with_export.png](images%2FRider_code_style_settings_with_export.png)

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

1. **Noise**: I spend more time reading code than writing code. When I'm reading code, I read from top to bottom, from left to right. In code bases where open curly braces are placed on their own lines, the curly braces feel like unnecessary noise that I just skip over. In my opinion, opening curly braces aren't important enough to warrant their own lines, and it takes focus away from the actual important lines.
2. **Redundant**: The code is already indented. When opening a new code block with curly braces, we also indent the code in that block. This also helps signal to the reader where the code block starts and ends, making the opening curly brace on a new line redundant.
3. **Consistency**: Most other languages that I work with (TypeScript and Kotlin for instance) use the end of line convention, and it's nice to have a consistent convention between languages. 
 
Some common concerns I've seen people talk about when using end of line opening braces are addressed in the next two rules.

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

Not this:

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

Not this:

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

Not this:

```csharp
if (something)
    return somethingElse;
```

And not this:

```csharp
if (something) return somethingElse;
```

### 4. Put all parameters/arguments/elements either on one line or each on a separate line

Do this:

```csharp
public static async Task<IEnumerable<MyClass>> MyMethodAsync(
    string name,
    IReadonlyDictionary<string, DateTimeOffset> dateTimes,
    CancellationToken cancellationToken = default
) {
    ...
}
```

Not this:

```csharp
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

Not this:

```csharp
new MyClass {
    Property0 = value0, Property1 = value1.ToString(),
    Property2 = enumerable.Select(value => value / 2).ToList(),
}
```

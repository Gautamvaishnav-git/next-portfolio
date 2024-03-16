---
layout: ../../layouts/BlogPostLayout.astro
title: Enhancing Error Handling
description: "Enhancing Error Handling: 🚀Leveraging Logging and Effective Error Management in Your Codebase"
date: "2021-08-01"
tags:
  [
    "javascript",
    "typescript",
    "nodejs",
    "error-handling",
    "logging",
    "error-management",
  ]
---

## Enhancing Error Handling: 🚀Leveraging Logging and Effective Error Management in Your Codebase

Good error handling can give you an advantage in bug fixing. You might be thinking, how?

Let's suppose you are working on a codebase with hundreds of files. One day, you get an error in a particular file, and your API fails due to some unknown reason.

Now, you don't know what exactly the error is because you didn't handle it properly in your codebase. So, you might be bothered, and you will start checking your code. After hours of digging, you will find the exact issue, or it might take some days or minutes, depending on the situation.

So, what is the good approach to handle this situation? 🤔

- First, you should maintain an **_error.log_** file in your codebase or store logs in a database.
- Implement proper error handling in your codebase.

Here, I am giving a basic overview of error handling and logging.

```tsx
import fs from "fs";

class Logger {
  public message: string;
  public statusCode: number;

  constructor(
    private error: unknown,
    private fileName: string,
    private method?: string
  ) {
    this.error = error;
    this.fileName = fileName;
    this.method = method;
    this.message = "";
    this.getErrorMessage();

    if (this.message === "") {
      this.message = "Internal server error!";
    }

    this.log();
  }

  private getErrorMessage() {
    if (this.error instanceof AxiosError) {
      this.message = this.error.response?.data?.message ?? this.error.message;
      console.log(this.error.response?.data?.message);
    } else if (this.error instanceof Error) {
      this.message = this.error.message;
    }
  }

  private log() {
    const currentDate = new Date().toLocaleString();
    // [date] [fileName] [method] [error]
    const message = `\n\n\n [${currentDate}] [${this.fileName}] [${
      this.method
    }] [${this.message}] [${JSON.stringify(this.error)}]] \n`;

    console.log("\n", this.message, `at ${this.fileName} - ${this?.method}`);

    if (!fs.existsSync("error.log")) {
      fs.writeFileSync("error.log", message);
    } else {
      fs.appendFileSync("error.log", message);
    }
  }
}

export const getLoggerInstance = (
  error: unknown,
  fileName: string,
  method?: string
) => new Logger(error, fileName, method);
```

I created a Logger class that takes three arguments: error, filename, and method. It checks the error type and sets a message to **`errorMessage`**. Then, I call the **`log`** method, which logs the error message into the **`error.log`** file and also logs the error message to the console.

**Use case**

```tsx
const login = async (req: Request, res: Response) => {
  try {
    /**
     * Login user
     * ....
     * ....
     * ...........
     */
  } catch (error) {
    const { message } = getLoggerInstance(
      error,
      __filename,
      "UserController - login"
    );
    return res.json({ message });
  }
};
```

Output in console

```powershell
"app is running on port 4000"

cannot set undefined to email! at D:\user\dist\controller\user.controller.js - UserController - login

```

Thank you for reading 😊.

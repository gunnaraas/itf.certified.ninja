---
id: "ch06-softwaredev"
title: "Ch. 06 - Software Development"
---
# Exploring Programming Languages
There are a wide variety of programming languages available for software developers to use. Languages vary on how they accomplish a task, but all accomplish the same goal, telling the computer what to we need it to do. Software developers usually specialize in one or two languages but have a basic foundational understanding of most popular languages. 

Every language has it's own specific **syntax** which describes how the code must be written in order to be understood by the computer. The syntax can be the most challenging part of leraning a new programming languge, but the logic of how we solve problems is similar throughout all of them. 

## Notational Systems 
Understanding Notational Systems is a set of rules guiding the organization and use of certain character or symbols.
- **Binary** notational System is everything a computer understands, which is includes two values 1s and 0s.
- **Decimal** notational System is the system that humans understand, which is base 10 meaning we count numbers 0 through 9.
- **Hexadecimal** notational System (hex) is the system commonly used in programming which is base 16 meaning number are counted from 0 through 9 and a through f.
- **American Standard Code for Information Interchange (ASCII)** is the system used in programming, this notation that is used to represent text and special characters on computers and telecommunications equipment. This system supports 128 characters.
- **Unicode** is the system used in programming, that supports 136,755 different characters across 139 languages and several character sets. Unicode was developed to include other languages that would not be represented by ASCII.

## Categories of Programming Languages
### Assembly Language
**Assembly** is the lowest level of code in which people can write. It allows the developer to provide instructions directly to the hardware. Assembly language requires an assembler to translate assembly written code into executable machine code. Assembly code is specific to processor architecture meaning that a program written for a 32-bit Intel chip will look different than one written for an ARM chip, even if the functionality is identical.

Assembly language is quicker than other languages, because it provides direct access to the hardware such as system BIOS, drivers and custom embedded systems. Another advantage for this language is that it can be used for reverse engineering code meaning the process of disassemble code into a higher-level language.

- Working with Assembly code is not easy, you need to know the version specific to the processor’s platform, how memory segmentation works and how processor codes will respond in protected and unprotected memory environments (not easy!).

### Compiled Languages
Compiled Languages have replaced assembly as the most commonly used ones in software development today. A Compiled Programming language is on that requires the use of a compiler to translate it into machine code one time, after which it can be read an unlimited number of times. 
- Compiler translates source code into machine code.
- Source Code is the code that is written in a programming language such as C++, Java, etc, during the process of building an application.

### Interpreted Languages
When reading an interpreted programming language, the computer uses an interpreter to read each line of code, line by line, every time the program is executed. An Interpreter and a compiler do the same thing, they take High-Level source code and translate it into Low-Level machine code. (Memorize Table 6.3 on page 335)
- **Markup** Language is a language that programmers can use to annotate- or markup- text to tell the computer how to process or manipulate the text. Meaning
    - **HTML** (Hypertext Markup Language) is the language in which most web pages are created.
- **Scripting** Languages are used to execute a list of tasks, before the earliest operating system used to execute one task at a time. (Remember examples of scripting Languages)
- **Scripted** Languages doesn’t operate on its own as scripting languages do, instead it needs a command interpreter to be built into the program. i.e. scripted languages are use to modify video games, to add functionality above and beyond what the initial developers created a term commonly referred to as MODS.

### Query Languages
A query language is specifically designed to retrieve data from databases. The term "query" is synonymous with "question", so a query language is how we ask a computer (or a database) questions. **Structured Query Language (SQL)** and **Lightweight Directory Access Protocol (LDAP)** are the two most popular query languages 

# Understanding Programming Concepts and Techniques
A programmer’s goal is to get a computer to do what he or she wants it to do by writing lines of code. One method that programmers can simplify their work is to reuse sections of code, instead of rewriting the same code again. There are a few skills that programmers use to make their live easier, first they look at what the program does and include topics such as logic components, data type and identifiers referred to as programming logic. Lastly, they keep themselves organized by using flowcharts, pseudocode, containers, functions and objects.

## Programming Logic
Programs are made up of logic and arithmetic meaning processors compute data in a mathematical and logical manner. 

**Branching logic** uses a “if... then, else” statements to make decisions. 

For example: If you’re driving a car, your brain probably follows a simple process when it comes to traffic lights. If the light is red, you stop.

In Pseudocode, this looks like: 
```jsx 
if light = red, stop 
    else if light = green, go
    else if light = amber, slow_down
```
The code asks each question line by line. For the first one that the line is true, it goes with that action and the program ends. 

**Looping logic** instead uses a "While... then, else" statement to make these decisions. 

For example: While driving a car, you come to a red light. If you only follow the branching logic, you stay stopped after the light turns green. Looping logic constantly asks "Is the light still red?"

In Pseudocode, this looks like: 
```jsx
while light = red, stay_stopped
    else go
```
In this example, the code is constantly checking the color of the light. When the light is not red, it goes with the else action (go). 

Another example of looping logic is that of an alarm clock. 
```jsx 
alarm_time = 07:00 
while time =/= alarm_time, be_quiet 
    else ring_alarm 
```
In this example, the computer is always checking the time. When the time is 07:00, the statment "The time is not 07:00" is now false, so the else statement runs. 

## Data Types 
There can be some overlap between the definitions of data types, meaning that some data could appear to be multiple data types. Regardless of what it looks like, the data type is what it was defined to be within a program.
- **String** is an integer, a whole number with no decimal point. i.e. 5 or 50001
- **Char** is one character, such as a UTF-16 or UTF-32(Unicode Transformation Format) character i.e. A or a
- **Floats** are any numbers with a decimal place i.e. 5.2 or 5.00001
- **Boolean** is a true or false conditions, usually represented by a 1 (true) or 0 (false)
- **Constant** is a set or predefined number meaning it doesn’t change.
- **Variable** any other type of identifier meaning that it can be changed.

| Type | Explanation | Examples |
| ---- | ----------- | -------- | 
| Char | One character (number, letter, symbol) | A or a | 
| String | Zero or more characters | "This is a string" and "S0 is th1$." | 
| Integer | Whole number with no decimal point | 5 or 500000 | 
| Floats | Any number with a decimal place | 5.2 or 5.000001 | 
| Boolean | A true (1) or false (0) condition | 0 or 1 |  

## Organizing Code
When programmer sit down to write code, they think about it in terms of the tasks to be done and what it takes to accomplish those tasks. This compartmentalization is on e of the key organizing principles that developer follow. Organizing the code is important for the developer to be organized outside of the code, that is, to lay out a blueprint of how the program will function so the developer can construct it or to have people on the team build various parts of it.

- A **flowchart** is visual representation of a program that uses boxes to represent the logic. It shows the sequence of operations within a program, including where data input is need as well as decisions to be made and the logic choices. Different shapes are used to indicate different components. 

[An example of a flowchart](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/LampFlowchart.svg/1200px-LampFlowchart.svg.png)

- **Pseudocode** is also known as *FAKE CODE*, meaning it’s not read by the processor and has no effect on the functioning of the program. It is code meant to make it easy for people to read and understand. 
- **Containers** hold temporary information in computer code, they do the same thing. Since variables can changed based on different input or conditions within a program, developers are tasked with defining the variable with a value. Using containers, multiple values of similar types can be grouped together at the same time. There are two container types which values can be entered arrays and vectors:
    - **Array** is a container that holds a list of values. All the elements in an array must be of the same data type, the size is predefined and does not change.
    - **Vector** is a container that holds a list of values. All the elements in a vector do not have to be of the same data type, the size is dynamic meaning it can be adjusted from big to small and or/ shrunk or expanded as the program requires. Because vectors are dynamically sized, they are more versatile than arrays and are the preferred container type.
- **Functions** are often sections of reusable code. Functions are linear in nature, they take input, process it, and then deliver out. In other words, they start the beginning of the code block and finish at the end, handling off to another process.
- **Objects** are collections of attributes, properties and methods that can be queried or called upon to perform a task. An object can be a variable, function, method or data structure that can be referenced.
- **Properties** describes the characteristics of the object
   - Attributes refers to the additional information about an object.
   - A property can be different data types, such as a string, integer or Boolean.
- **Methods** are like functions that can be used to modify an object. (These are very complicated, it's unlikely you'll see questions about this on the exam.)

# Summary
People have been telling computers what to do for a very long time. That is the essence of programming. This lesson gave the user an overview to foundational understanding of software development concepts, the basics of different programming languages as well as some concepts and techniques that programmers use to make their jobs easier.

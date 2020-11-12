---
id: "ch06-softwaredev"
title: "Ch. 06 - Software Development"
---
# Exploring Programming Languages
In the market there is a wide variety of programming languages, what differentiates on language from another is the fact that each language has its own grammar and syntax, just like the rules are different from the rules of Spanish. Software developers typically specialize in one or two languages but have a basic foundational understanding of the popular ones in the marketplace.

## Assembly Language
Assembly Language is the lowest level of code in which people can write. It allows the developer 	to provide instructions directly to the hardware. Assembly language requires an assembler to 		translate assembly written code into executable machine code. Assembly code is specific to 		processor architecture meaning that a program written for a 32-bit Intel chip will look different		than one written for an ARM chip, even if the functionality is identical.

Assembly language is quicker than other languages, because it provides direct access to the 		hardware such as system BIOS, drivers and custom embedded systems. Another advantage for 		this language is that it can be used for reverse engineering code meaning the process of 			dis-assemble code into a higher-level language.
-	Understanding Notational Systems is a set of rules guiding the organization and use of certain character or symbols.
  -	Binary notational System is everything a computer understands, which is includes two values 1s and 0s.
  -	Decimal notational System is the system that humans understand, which is base 10 meaning we count numbers 0 through 9.
  -	Hexadecimal notational System (hex) is the system commonly used in programming which is base 16 meaning number are counted from 0 through 9 and a through f.
-	American Standard Code for Information Interchange (ASCII) is the system used in programming, this notation that is used to represent text and special characters on computers and telecommunications equipment. This system supports 128 characters.
-	Unicode is the system used in programming, that supports 136 755 different characters across 139 languages and several character sets. Unicode was developed to include other languages that would not be represented by ASCII.
-	Working with Assembly code is not easy, you need to know the version specific to the processor’s platform, how memory segmentation works and how processor codes will respond in protected and unprotected memory environments. YEAH NOT EASY AT ALL.

## Compiled Languages
Compiled Languages have replaced assembly as the most commonly used ones in software development today. A Compiled Programming language is on that requires the use of a compiler to translate it into machine code.
-	Compiler translates source code into machine code.
-	Source Code is the code that is written in a programming language such as C++, Java, etc, during the process of building an application.

## Interpreted Languages
Interpreted Programming Language has each line of code read by an interpreter every time the program is executed. An Interpreter and a compiler do the same thing, they take High-Level source code and translate it into Low-Level machine code. (Look at Table 6.3 page 335 memorize)
-	Markup Language is a language that programmers can use to annotate- or markup- text to tell the computer how to process or manipulate the text. Meaning
-	Hypertext Markup Language (HTML) is the language in which most web pages are created.
-	Scripting Languages are used to execute a list of tasks, before the earliest operating system used to execute one task at a time. (Remember examples of scripting Languages)
-	Scripted Languages doesn’t operate on its own as scripting languages do, instead it needs a command interpreter to be built into the program. i.e. scripted languages are use to modify video games, to add functionality above and beyond what the initial developers created a term commonly referred to as MODS.

## Query Languages
Query Language is specifically designed to retrieve data from databases. The term query is synonymous with question and a query language is specialized to ask questions. Examples include Structured Query Language (SQL), Lightweight Directory Access Protocol (LDAP), etc.

# Understanding Programming Concepts and Techniques
A programmer’s goal is to get a computer to do what he or she wants it to do by writing lines of code. One method that programmers can simplify their work is to reuse sections of code, instead of rewriting the same code again. There are a few skills that programmers use to make their live easier, first they look at what the program does and include topics such as logic components, data type and identifiers referred to as programming logic. Lastly, they keep themselves organized by using flowcharts, pseudocode, containers, functions and objects.

## Programming Logic
Programs are made up of logic and arithmetic meaning processors compute data in a mathematical and logical manner.
-	Branching logic uses “if… then, else” statements for their logic. i.e. If you’re driving a car, your brain probably follows a simple process when it comes to traffic lights. If the light is red, you stop.
```
If light = red, then stop
    Else if light = green, then go  
    Else if light = amber, then slow down
```

-	Common data types (Review Table 6.4 page 342) There can be some overlap between the definitions of data types, meaning that some data could appear to be multiple data types. Regardless of what it looks like, the data type is what it was defined to be within a program.
-	String is an integer, a whole number with no decimal point. i.e. 5 or 50001
-	Char is one character, such as a UTF-16 or UTF-32(Unicode Transformation Format) character i.e. A or a
-	Floats are any numbers with a decimal place i.e. 5.2 or 5.00001
- Boolean Data Types are true or false conditions, usually represented by a 1 (true) or 0 (False) i.e. 1 or 0
-	Constant is a set or predefined number meaning it doesn’t change.
-	Variable any other type of identifier meaning that it can be changed.
-	Looping is circular rather than linear like branching logic. At the center of looping is the “While” statement, this is useful for monitoring a stat within a program, and then invoking an action when the state changes. i.e. In human terms, the logic can basically be, “While the stoplight is red, stop; otherwise, go.” While the light is red, you keep repeating the loop until the condition changes, and once it changes, you take a different action.

## Organizing Code
When programmer sit down to write code, they think about it in terms of the tasks to be done and what it takes to accomplish those tasks. This compartmentalization is on e of the key organizing principles that developer follow. Organizing the code is important for the developer		to be organized outside of the code, that is, to lay out a blueprint of how the program will function so the developer can construct it or to have people on the team build various parts of it.
-	Flowchart is visual representation of a program that uses boxes to represent the logic. It shows the sequence of operations within a program, including where data input is need as well as decisions to be made and the logic choices. Different shapes are used to indicate different components. (Figure 6.4 pg. 344 flowchart)
-	Pseudocode is also known as FAKE CODE, meaning it’s not read by the processor and has no effect on the functioning of the program. It is code meant to make it easy for people to read and understand. (I call it People code)
-	Containers hold things (In general)- inn computer programming, they do the same thing. Since variables can changed based on different input or conditions within a program, developers are tasked with defining the variable with a value. Using containers, multiple values of similar types can be grouped together at the same time. There are two container types which values can be entered arrays and vectors:
  - Array is a container that holds a list of values. All the elements in an array must be of the same data type, the size is predefined and does not change.
  - Vector is a container that holds a list of values. All the elements in a vector do not have to be of the same data type, the size is dynamic meaning it can be adjusted from big to small and or/ shrunk or expanded as the program requires. Because vectors are dynamically sized, they are more versatile than arrays and are the preferred container type.
-	Functions are often sections of reusable code. Functions are linear in nature, they take input, process it, and then deliver out. In other words, they start the beginning of the code block and finish at the end, handling off to another process.
-	Objects are collections of attributes, properties and methods that can be queried or called upon to perform a task. An object can be a variable, function, method or data structure that can be referenced.
-	Properties describes the characteristics of the object
  -	Attributes refers to the additional information about an object.
A property can be different data types, such as a string, integer or Boolean.
-	Methods are like functions for objects (These are very difficult to explain.)

# Summary
People have been telling computers what to do for a very long time. That is the essence of programming. This lesson gave the user an overview to foundational understanding of software development concepts, the basics of different programming languages as well as some concepts and techniques that programmers use to make their jobs easier.

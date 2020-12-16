---
id: "ch07-databases"
title: "Ch. 07 - Database Fundamentals"
---
# Understanding Databases
Databases are used to store and organize large amounts of data, and present it in useful ways to users and applications. There are many different types of databases and database software. An IT professional chooses the right type of database for their use case depending on the type of data stored. 

## Exploring Databases Concepts and Structures 
- A database is organized into smaller "pages" of data, known as tables. Tables look similar to spreadsheets, consisting of records (rows) and fields (columns) of text and numbers. 
- A flat file is another word for a spreadsheet. It stores information in a 2D format, where all information is organized within one page that does not rely on or connect to other pages inside the spreadsheet. 

### When to Use Databases
- Databases are useful in situations where you might want multiple users to access and interact with the information at one time.
    - Flat files can quickly be broken when multiple users are working in the document at one time. It is also very difficult to merge changes when two users are working on a separate spreadsheet file. This is less of an issue now due to online collaborative workspaces like Google Drive and Excel Online where all changes are automatically saved and shared with other users. 

- **Scalability** refers to the ability of a technology to handle a large increase of information or users without performance issues. Databases are extremely scalable, allowing tens of thousands of users to interact with the data at one time. 
    - Databases can store an unlimited number of records without any significant performance issues. Compared to flat files, which slow down significantly after a few thousand lines of data, databases are usually the right choice for storing business data will grow over time. 
    - The speed of a database depends on the hardware installed in the server hosting it. Fast databases generally require large amounts of RAM, and fast SSD storage.

- In traditional spreadsheet software, **Data Persistence** is an issue. When auto-save is not enabled, if the spreadsheet software crashes or the computer loses power, all changes are lost. Databases solve this issue by saving each record as it's updated, allowing minimal data loss if there are hardware issues. 

- Databases have strong security controls, making them ideal for multi-user applications. In a flat file, any user with access to the spreadsheet can view and edit any information. In a database, users permissions define their ability to view or edit specific tables or records only. 

## Types of Databases 
All databases are managed by database management system (DBMS). This is software that controls how and where data is stored and accessed from the database. This prevents duplicate data from being stored, information from being accidentally overwritten, and information from being saved that does not follow the rules set in the schema. 

### Relational Databases 
- Relational Databases are predictable and organized, with tables containing columns and rows of text or numerical data. Relational databases typically do not store other types of information, like photos and videos.  and relational databases are managed by a relational database management system (RDBMS).

#### Schemas 
- Relational databases rely heavily on the schema. The schema defines the rules and structure of the database, including what tables are available, which data can be written in each field (column), and how different tables connect together. 
    - The **Logical Schema** exists outside of the database software (usually on paper or in visual diagramming software), and maps out the database tables, fields, and connections between tables. 
    - The **Physical Schema** refers to the actual implementation of the schema inside the database. 

#### Keys 
- Every database record (row) is identified with a specific key. There are two types of keys used in relational databases, Primary and Foreign keys. 
   - **Primary keys** are one or more fields whose data is used to identify a record (row in a table) uniquely. Because tables are stored in an index, primary keys of each record have to be unique. Every record in a database is required to have a primary key. 
   - **Foreign Key** is one or more columns in a table that refers to the primary key in another table. Foreign keys are not required, and they don’t need to be officially designated in the RDBMS. Foreign keys can contain duplicate values and null values, and there are no limits to the number of foreign keys in a table. 

![A logical schema with primary and foreign keys](/assets/images/ch07-logicalschema-withkeys.png "A logical schema showing the connection between primary and foreign keys.")

#### Constraints 
- **Constraints** are limitations or rules set that prevent someone from taking an action that would cause major problems within the database. Some examples of database constraints include:
   - Entering a value that isn’t found in the linked tables primary key.
   - Changing the foreign key value that doesn’t exist in the linked table’s Primary Key.
   - Deleting rows from the primary key table, which would create an orphan record (A record that has no relation to another record).

#### Forms 
- Forms are how data is often entered into and viewed into a database by non-technical users. You don’t need forms to have a database, but they make database management a lot easier. 
   - For example: A database form allows customer service agents enter new client information, while another form lets a manager review all new clients entered in the last week.

#### Queries 
- Another word for a query is a "search", and it is a large part of what make databases so powerful and useful. Queries allow you search your data to find the specific information that you need and filter out unnecessary information. If you have a database with millions of records, it would take a lot of time to search through specific tables to find the information you need. Instead, you can run a query for information that fits into your specific criteria. 

#### Reports
- Reports also known as preformatted queries; they are generated to answer specific questions that are set up by a database administrator. These will usually provide the information in an easy to read, printable document. For example, a manager could have an automatic report that generates the list of new clients in the last week, as opposed to viewing the list in a form.

#### Macros and Modules 
- Macros and Modules add additional functionality to your database. For example, if you want to do a monthly cleanup of all records older than a certain date, you can automate that by creating a module. For anything that you would have to run manually, you can probably create a macro to make the process faster.

### Non-Relational Databases
- Non-relational Databases are meant for data that doesn’t fit into a structured data of rows and columns (anything that's not letters and numbers).
   - Non-structured Data already has structure within its self, it’s called unstructured because it doesn’t fit neatly into a database.  Examples include: pictures, videos, web pages, emails, documents, texts, and social media.
   - Semi-structured Data fits somewhere in between structured and non-structured data, it is generally thought of as unstructured data that has been tagged with metadata. I.e. email data that can be tagged by listing the sender the recipient, time, and date. (The fact that meta data has been added such as recipient, time and date, it has resulted given the data some structure.)

- Document Databases, each record and its associated data is considered a document. Meaning i.e. a picture and the 15 keywords used to described it, along with the data it was taken, location, and photographer, can all be combined into the same document.
   - A cool feature of document databases is the that each document is considered to be a completely independent unit, and documents don’t all need to have exactly the same types of information. If one document has a picture associated with it and another doesn’t, they can still reside in the same document database.

- Key/Value Databases stores values as Blobs, meaning that they don’t confirm to a schema. A key/value database is represented as a collection of key/value pairs, which is stored in a database known as a dictionary.
   - Dictionary a collection of objects or records. This can also be thought of as a map of the database, allowing information to be easily located.

## Working with Databases 
Databases exist to store large quantities of data and to make it relatively easy for administrators or users to access.
- **Manual Access** is directly going into the tables of a database to view or change data, either through the command line or a graphical interface provided by the Database Management Software.
- **Direct Access** is similar to Manual Access except, it can also be accessed through a network connection. This feat is done with an Application Programming Interface (API), open database connection (ODBC), or Java database connection (JDBC) link. The computer would establish a link between itself and the table with one of these methods and then has direct access to the databases. 
- **Programmatic Access** meaning accessing the data through a program (i.e. SQL) or a programming method. For example, a program might use an ODBC connection to connect to a database and then retrieve data from the database using SQL.

- **User Interface** and **Utility Access** allows users to access the database through a graphical interface or utility, which could be built into the database program or specifically developed to access the data, instead of accessing the database manually. For example, a developer could create a web-based user interface to allow a customer to sign up for information. The data would be entered into a database by the user interface.

## Understanding Database Permissions
Databases can contain critical information, including personally identifiable information (PII) and critical business data, that needs to be protected. Leaving a database open to potential bad actors is not good policy. 

- There are 3 different classifications of permissions (privileges) that a database administrator will implement.
   - **Server permissions** also known as Global permissions are permissions that affect the entire server. (It’s kind of like an Administrator account on a computer, which can affect the entire computer.)
   - **Databases permissions** apply to one database and all objects within the database. If they are applied to all databases on the server, they become global as well. (By global we mean that these permissions were to be placed on connected databases then those same rules will affect the whole database.)
   - **Object permissions** will affect database objects, such as tables, views, forms, indexes and macros or modules.

## Creating and Managing a Database
- Creating and managing a database requires that the foundations of the database are solid. First step is to create the database, then creating the various tables within the database, objects such as indexes, forms, macros and queries come in last to provide the structure in which your database works in.

- Creating a Database requires using the SQL command CREATE. This is used to create both a table or an entire database.

- Importing and Inputting Data can either be done manually or imported into the database. This can easily be done if there is a DBMS in place because of its ease to navigate around.

- Dropping Databases and Tables comes in handy if you want to delete tables or databases. Typically, the SQL command that is used to delete or drop tables or databases is DROP.

- Manipulating Data in a relational database can be done by using one of the four commands: **UPDATE**, **INSERT**, **DELETE** and **SELECT**.
   - **INSERT** is used to insert records into an existing database.
   - **SELECT** is used to identify and display the data that the user needs.
   - **UPDATE** is used to update existing data in the database.
   - **DELETE** is used to delete the records or the data in the table.

- Extracting Data from a database isn’t complicated when there is very little data to search from. It only gets really complicated when the database is massive. There are two methods of navigating a database: queries and reports. Queries for the less complicated Database and Reports for the more complicated database.

The benefits of generating reports is because of how clean the data is presented when requested. Rather than obtaining all of the data raw, reports would generate the right amount of data requested, while omitting the unnecessary data.

- Backing Up Databases comes in two ways: performing a database dump and running a backup.
- Database dump: is a one-time logical backup of a database meaning, in exports the schema, tables, views and the data.
- Running a backup: is simply running a backup program for the database, the benefits of the backup program is that, it updates all of the data in real time and it backs up everything that a Database dump would have. This Database Backup would minimize the need to recreate the whole database along with all of the data that has been collected past the Database dump period.

# Important SQL Commands 
|Command|Definition                                                           |
|-------|---------------------------------------------------------------------|
|SELECT | Used to query a specific piece of information from a table or field |
|INSERT | Used to insert a **new** record into an existing database table     |
|CREATE | Used to create a new database, or a new table inside a database     | 
|ALTER  | Used to add, remove, or modify a field in a table                   |
|UPDATE | Used to modify an existing record in a table                        |
|DELETE | Used to remove a record                                             |
|DROP   | Used to delete an entire database or table                          |

# Summary
In today’s world data is the new oil. Companies have so much data that they often employ data scientist and analysts to mine data, in hopes of finding insight to unleashing their company’s growth and all of this data is stored in a database. This lesson helps you obtain a fundamental understanding of why databases are used, the different types of databases, and how to work with databases.

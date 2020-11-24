---
id: "ch07-databases"
title: "Ch. 07 - Database Fundamentals"
---
# Understanding Databases
Databases store data, the differences between different databases depends on the different situations that they are in, how these databases store data and how user’s extract data from the database.

## Exploring Databases Concepts and Structures 
-	A table is similar to a spreadsheet, but is not called a spreadsheet, it is called a table.
-	Flat file is also known as a spreadsheet, because it is 2D, it only has rows and columns.

### When to Use Databases
-	Multiple Concurrent Users you want multiple users to access the data in the database.
-	Scalability is performance effects that increase of users or data points has on a set of data. Databases are extremely scalable, allowing access to hundreds or tens of thousands of users at a time.
-	Speed will depend on the type of hardware that is installed on the machine, in particular RAM and Hard Drive storage. For example, if you had an SSD installed on your database and had adequate RAM then your machine would function much faster and have better performance.
-	A wide variety of data can be stored within a database, making it readily available and quick when searching for it.
-	Number of Records meaning that a database has no limit to the amount of data that can be stored on Its table (spreadsheet). The only limitation that could limit this would be the size of the storage capacity.
-	Data Persistence is the ability for the database to keep the data, even when power is lost or when you are making changes in real time. The data “log” system will allow, data to be retrieved even when the data gets corrupted.
-	Security is improved on a database, on a spreadsheet, if a user were to obtain the entire spreadsheet, they would be able to see all the data within that spread sheet. In a database, users maybe able to access specific columns or rows of data but not see anything else.
-	Relational Databases are predictable and organized, with tables containing columns and rows of text or numerical data. All databases are managed by database management system (DBMS) and relational databases are managed by a relational database management system (RDBMS).
-	Database Management System (DBMS): manages any other database that is not relational.
-	Relational Database Management System (RDBMS): manages databases that are relational by nature.
The importance of these management systems is to keep the integrity of the data within the system intact. These management systems perform tasks such as, not allowing duplicates, preventing column values from being arrays or repeating groups of data and if there are areas in which data is not represented, null values are used.
-	Schema are the rules and structure of the database. These defines tables, forms, reports, queries, data types allowed and pretty much everything else about the database.
-	Logical Schema outlines the structure of the database, such as the tables and their fields (columns), and relationships between tables.
-	Physical Schema is the actual tables, columns and relationships created in the Relational Database Management System (RDBMS).
-	Tables look like spreadsheet and contain data. One database can have multiple tables. Each row in a table is called a RECORD.
-	Fields are the columns in a table, they contain a single data type for all records. i.e. a field could contain a phone number, cost, or other numerical data, or a name, product description, or other text data.
-	Primary Key is one or more fields whose data is used to identify a record (row in a table) uniquely. Because tables are stored in an index, primary keys of each record have to be unique.
-	Foreign Key is one or more columns in a table that refers to the primary key I another table. Foreign keys are not required, and they don’t need to be officially designated in the RDBMS. Foreign keys can contain duplicate values and null values, and there are no limits to the number of foreign keys in a table. (Figure 7.4 pg. 363)
-	Constraints are basically limitations that prevent someone from taking an action that would cause major problems within the database.
-	Entering a value that isn’t found in the linked tables primary key.
-	Changing the foreign key value that doesn’t exist in the linked table’s Primary Key.
-	Deleting rows from the primary key table, which would create an orphan record (A record that has no relation to another record).
-	Forms are how data is entered into and often viewed from your database. You don’t need forms to have a database, but they make database management a lot easier. I.e. you have one form that lets customer service agents enter new client information, while another form lets a manager review all new clients entered in the last week.
-	Queries let you mine your data to find the specific information that you need. I.e. If you have a database with millions of records, queries are the only realistic way that you will find anything useful.
-	Reports also known as preformed queries; they are generated to answer specific questions. i.e.  A manager could have an automatic report that generates the list of new clients in the last week, as opposed to viewing the list in a form.
-	Macros and Modules let you add functionality to your database. I.e. if you want to do a monthly cleanup of all records older than a certain date, you can automate that by creating a module. For anything that you would have to run manually, you can probably create a macro to make the process faster.
-	Non-relational Databases are meant for data that doesn’t fit into a structured data of rows and columns, this meant for other types of data.
-	Non-structured Data already has structure within its self, it’s called unstructured because it doesn’t fit neatly into a database.  Examples include: pictures, videos, web pages, emails, documents, texts, and social media.
-	Semi-structured Data fits somewhere in between structured and non-structured data, it is generally thought of as unstructured data that has been tagged with metadata. I.e. email data that can be tagged by listing the sender the recipient, time, and date. (The fact that meta data has been added such as recipient, time and date, it has resulted given the data some structure.)
-	Document Databases, each record and its associated data is considered a document. Meaning i.e. a picture and the 15 keywords used to described it, along with the data it was taken, location, and photographer, can all be combined into the same document.

A cool feature of document databases is the that each document is considered to be a completely independent unit, and documents don’t all need to have exactly the same types of information. If one document has a picture associated with it and another doesn’t, they can still reside in the same document database.
-	Key/Value Databases stores values as Blobs, meaning that they don’t confirm to a schema. A key/value database is represented as a collection of key/value pairs.
-	Dictionary a collection of objects or records.

## Working with Databases 
Databases exist to store large quantities of data and to make it relatively easy for administrators or users to access.
-	Manual Access is directly going into the tables of a database to view or change data.
-	Direct Access is similar to Manual Access except, it can also be accessed through a network connection. This feat is done with an Application Programming Interface (API), open database connection (ODBC), or Java database connection (JDBC) link. The computer would establish a link between itself and the table with one of these methods and then has direct access to the databases.
-	Programmatic Access meaning accessing the data through a program (i.e. SQL) or a programming method. For example, a program might use an ODBC connection to connect to a database and then retrieve data from the database using SQL.
-	User Interface and Utility Access allows users to access the database through a graphical interface or utility, which could be built into the database program or specifically developed to access the data, instead of accessing the database manually. i.e. A developer could create a web-based user interface to allow a customer to sign up for information. The data would be entered into a database by the user interface.
-	Understanding Database Permissions (Exam as Data definition) Databases can contain critical information – personally identifiable information (PII) or critical business data – that needs to be protected. Leaving a database open to potential attackers is not good policy. There are 3 different classifications of permissions (privileges) that DBMSs will implement.
-	Server permissions also known as Global permissions are permissions that affect the entire server. (It’s kind of like an Administrator account on a computer, which can affect the entire computer.)
-	Databases permissions apply to one database and all objects within the database. If they are applied to all databases on the server, they become global as well. (By global we mean that these permissions were to be placed on connected databases then those same rules will affect the whole database.)
-	Object permissions will affect database objects, such as tables, views, forms, indexes and macros or modules.
-	Creating and Managing a Database requires that the foundations of the database are solid. First step is to create the database, then next is creating the carious tables within the database, objects such as indexes, forms, macros and queries come in last to provide the structure in which your database works in.
-	Creating a Database requires using the SQL command CREATE. This is used to create both a TABLE or DATABASE.
-	Importing and Inputting Data can either be done manually or imported into the database. This can easily be done if there is a DBMS in place because of its ease to navigate around.
-	Dropping Databases and Tables comes in handy if you want to delete tables or databases. Typically, the SQL command that is used to delete or drop tables or databases is DROP.
-	Manipulating Data in a relational database can be done by using one of the four commands: **UPDATE**, **INSERT**, **DELETE** and **SELECT**.
-	**INSERT** is used to insert records into an existing database.
-	**SELECT** is used to identify and display the data that the user needs.
-	**UPDATE** is used to update existing data in the database.
-	**DELETE** is used to delete the records or the data in the table.
-	Extracting Data from a database isn’t complicated when there is very little data to search from. It only gets really complicated when the database is massive. There are two methods of navigating a database: queries and reports. Queries for the less complicated Database and Reports for the more complicated database.

The benefits of generating reports is because of how clean the data is presented when requested. Rather than obtaining all of the data raw, reports would generate the right amount of data requested, while omitting the unnecessary data.

Queries however, show all of the data in the database which would simply take a large amount of time clean up.
-	Backing Up Databases comes in two ways: performing a database dump and running a backup.
- Database dump: is a one-time logical backup of a database meaning, in exports the schema, tables, views and the data.
-	Running a backup: is simply running a backup program for the database, the benefits of the backup program is that, it updates all of the data in real time and it backs up everything that a Database dump would have. This Database Backup would minimize the need to recreate the whole database along with all of the data that has been collected past the Database dump period.

# Summary
In today’s world data is the new oil. Companies have so much data that they often employ data scientist and analysts to mine data, in hopes of finding insight to unleashing their company’s growth and all of this data is stored in a database. THIS lesson helped users obtain a fundamental understanding of why databases are used, the different types of databases, and how to work with databases.

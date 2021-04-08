# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Rails uses MVC to seperate ui, app data, and control logic. Rails seperates these files in an app in their own folders and in their own directeries.

  Researched answer: Rails has an application directory called app/ with three subdirectories: models, views, and controllers. This is the model-view-controller (MVC) architectural pattern, which enforces a separation between business logic from the input and presentation logic associated with a graphical user interface (GUI).



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD makes up storage management and are the required functions for an application to have persistent storage. Create, Read, Update, Delete. 

  Researched answer: CRUD is an acronym for the four basic types of SQL commands: Create , Read , Update , Delete. A CRUD application is one that uses forms to get data into and out of a database.



3. What is a relational database? Are there other kinds of databases?

  Your answer: Relational databases are able to store data in tables, and can form relationships between multiple tables.

  Researched answer: A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the database.



4. What are the 5 HTTP verbs? What are they important?

  Your answer: Post, get, put, patch, and delete. They correspond to each CRUD function for HTTP based web clients.

  Researched answer: The HTTP protocol is a request/response protocol based on the client/server based architecture where web browsers, robots and search engines, etc. act like HTTP clients, and the Web server acts as a server.



5. What is object-relational mapping?

  Your answer: ORM allows queries to be written for SQL databses using object-oriented languages, such as ruby

  Researched answer: Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.



6. What is a gem?

  Your answer: a gem, is a ruby attribute that allows libraries and formats to be easily installed by containing them in packages called gems.

  Researched answer:A gem is a library, packaged in a single file that Ruby knows how to open and use. The “gem” command that comes with Ruby allows you to download libraries from the official repository for Ruby (you are allowed to have custom repos) 



7. What are primary keys? Why are they important?

  Your answer: A primary key is the main identifier in database tables that allow secondary tables to create a relationship for an attribute between the primary table and the secondary table.

Primary keys - By default, Active Record will use an integer column named id as the table's primary key (bigint for PostgreSQL and MySQL, integer for SQLite). When using Active Record Migrations to create your tables, this column will be automatically created.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
REST is an architecture that helps provide deifinitions that can map HTTP routes and CRUD functionalities. The routes are codes, such as CRUD methods, that analyze requests and make decisions on the necessary functionality for a request.
- JSON
JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.
- Validations
Used in rubyonrails to ensure only valid data is saved into a database. The best-use is through validations at the model-level.
- Strong params
It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.

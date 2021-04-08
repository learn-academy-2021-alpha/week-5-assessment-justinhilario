# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

First we need to create a new rails app ->

$ rails new rails_app -d postgresql -T
$ cd rails_app
$ rails db:create
$ rails server

2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

Foreign keys are done to add an association between two tables. To make an association between table1 and table2, we assign the foreign key to table2.
In this case, the foreign key is a column in table2 called table1_id.

To create the association between the Person and the Email table we had to assign a foreign key to Email. The foreign key always goes on the belongs_to side. By convention the foreign key should always be the modelname_id and the data type should be integer. The has_many model is singular, the belongs_to model is plural. A Person (singular) has_many emails (plural).

3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails generate model Person shirt:string pants:string shoes:string

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

Model class - singular and PascalCase

Database table - plural and snake_case

5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

The Book model will contain the foreign key. and the foreign key column name would be library_id.



6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

a schema file logs the current status of a database and to see the active record attributes. It is not best practice to edit the schema directly, one should edit a database through migrations as it allows a structure for all changes to the databaseand overtime this version history may be useful.

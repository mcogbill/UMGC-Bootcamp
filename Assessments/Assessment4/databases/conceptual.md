### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL? PostgreSQL is an open-source relational database management system (RDBMS)

- What is the difference between SQL and PostgreSQL? SQL is a language used for interacting with relational databases, while PostgreSQL is one specific database management system that implements SQL along with additional features specific to PostgreSQL

- In `psql`, how do you connect to a database? psql -d your_database_name -U your_username

- What is the difference between `HAVING` and `WHERE`?  WHERE filters individual rows before any grouping occurs, while HAVING filters groups of rows after they have been grouped by a GROUP BY clause.

- What is the difference between an `INNER` and `OUTER` join? INNER JOINs return only the matching rows between tables, while OUTER JOINs return all rows from at least one of the tables, even if there are no matches in the other table.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join? The direction in which they preserve rows from the tables being joined: LEFT JOIN preserves all rows from the left table, while RIGHT JOIN preserves all rows from the right table.

- What is an ORM? What do they do? ORM stands for Object-Relational Mapping. It is a programming technique used to convert data between incompatible type systems, specifically between object-oriented programming languages and relational databases. The main purpose of an ORM is to bridge the gap between the relational world of databases and the object-oriented world of application code.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`? Both AJAX and server-side HTTP requests involve making HTTP requests, they serve different purposes, are executed in different contexts, and are suitable for different types of tasks in web development.

- What is CSRF? What is the purpose of the CSRF token? CSRF stands for Cross-Site Request Forgery. It is a type of web security vulnerability where an attacker tricks a user into unknowingly executing actions on a web application in which the user is authenticated. CSRF attacks exploit the trust that a web application has in a user's browser by executing unauthorized commands or transactions on behalf of the victim user.

- What is the purpose of `form.hidden_tag()`?  form.hidden_tag() is a function used to generate a hidden input field within HTML forms. This function is typically used in conjunction with Flask-WTF (Flask-WebForms) for generating CSRF tokens.

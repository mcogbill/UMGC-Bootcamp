### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

JavaScript focuses on ECMAScript standards, and is used more for front-end web development. Python conforms to code readability and compact syntax, and is used more for back-end software development.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

print (d['c'])

- What is a unit test?

A test of individual functions or methods.

- What is an integration test?

When multiple functions, tools, and variables are tested together.

- What is the role of web application framework, like Flask?

Flask and other frameworks help organize a web application into routes while also allowing us to start a server and accept GET\POST requests.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

/foods/pretzel would usually be predefined or categorical as /foods/X could be any possible food. Foods?Type is probably more for search based routing.

- How do you collect data from a URL placeholder parameter using Flask?

request.args ??

- How do you collect data from the query string using Flask?

request.url ??

- How do you collect data from the body of the request using Flask?

request.args.get ??

- What is a cookie and what kinds of things are they commonly used for?

Cookies are pieces of data that are tied to a user\computer that will be accessed when visiting a website.

- What is the session object in Flask?

A session stores information on a users computer and is used while browsing.

- What does Flask's `jsonify()` do?

jsonify() returns flask variable data to be turned into JSON format for front-end API use.

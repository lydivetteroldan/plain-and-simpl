
# plain-and-simpl
This is the Git repository for Plain and Simpl, a blog posting single-page application. When a user signs up for a new account, they can sign in with their chosen email and password to create, update or delete their blog posts.

### ERD
- [ERD images](https://imgur.com/a/oVoGR)

### Wireframes
- [Wireframe images](https://imgur.com/a/4DSD7)

### User Stories
- As _a new user_, I want to be able to sign up for an account with my credentials so that I can sign in.
- As _a signed up user_, I want to see a message confirming that my account was created successfully so that I can sign in.
- As _a user_, I want to sign in with my account credentials at any time so that I can create, update or delete my posts.
- As _a signed in user_, I want to see a confirmation showing that I’m signed in.
- As _a signed in user_, I want to be able to sign out of my account at any time.
- As _a signed in user_, I want to see a menu of my user options so that I can manage my posts.
- As _a signed in user who chooses to create a post_, I want to see input fields so that I can provide the title and content of the post.
- As _a signed in user_, I want to save a post so that it can be created.

### Technologies Used
- HTML
- CSS
- JavaScript
- jQuery
- AJAX
- JSON
- Ruby on Rails
- PostgreSQL
- Git
- Github
- Github Pages
- Heroku

### Dependencies
Install with `bundle install`.

-   [`rails-api`](https://github.com/rails-api/rails-api)
-   [`rails`](https://github.com/rails/rails)
-   [`active_model_serializers`](https://github.com/rails-api/active_model_serializers)
-   [`ruby`](https://www.ruby-lang.org/en/)
-   [`postgres`](http://www.postgresql.org)

### Unsolved Issues for Future Iterations
- Scaffold Post resource
- Test Post's end points with curl scripts
- Update Post controller to inherit from Protected or OpenRead controller
- Test Post's end points with curl scripts
- Add the relationship to a User
- Add User ownership to Post controller

### Additional Resources
- http://guides.rubyonrails.org/api_app.html
- https://blog.codeship.com/building-a-json-api-with-rails-5/

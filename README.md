| Path                       | METHOD | Description                   |
| -------------------------- | ------ | ----------------------------- |
| /                          | GET    | Home                          |
| /auth/login                | GET    | Log in Form                   |
| /auth/logout               | GET    | log out                       |
| /auth/signup               | GET    | Sign up form                  |
| /auth/signup               | POST   | Sign up form                  |
| /auth/login                | POST   | Log in Form                   |
| /artists/:page             | GET    | List of all artworks          |
| /artists/search            | GET    | Search by tag                 |
| /artists/daily             | GET    | Random artwork                |
| /artists/search            | POST   | Search of artworks            |
| /exhibitions               | GET    | Exhibitions page              |
| /user/profile              | GET    | Profile page                  |
| /user/edit-profile/:id     | GET    | Edit user profile             |
| /user/profile/:id          | GET    | User profile                  |
| /user/following/delete/:id | GET    | Delete followers              |
| /user/edit/:id             | GET    | Get data of a user for admin  |
| /user/delete/:id           | GET    | Admin user delete a user      |
| /user/edit-profile         | POST   | Edit your profile             |
| /user/following/:id        | POST   | Add a user following          |
| /user/edit-admin/:id       | POST   | Admin user edit a user        |
| /favourites/delete/:id     | GET    | Delete your favourite artwork |
| /favourites/:id            | POST   | Add favourite art to profile  |
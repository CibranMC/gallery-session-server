| Path         | METHOD | Description  |
| ------------ | ------ | ------------ |
| /            | GET    | Home         |
| /auth/login  | POST   | Log in Form  |
| /auth/logout | GET    | log out      |
| /auth/signup | POST   | Sign up form |
| /auth/login  | POST   | Log in Form  |

| /exhibitions | GET | Exhibitions page |
| /shop | GET | Shop page |
| /AboutUs | GET | About Us page |
| /Gallery | GET | Gallery page |

| /artists | GET | List of all artworks |
| /artists/edit/:id | PUT | Get data of a user for admin |
| /artists/delete/:id | DELETE | Admin user delete a user |

| /artWork | GET | List of all artworks |
| /artWork/:id | PUT | Edit artworks |
| /artWork/delete/:id | DELETE | Delete your favourite artwork |

| /user/edit-gallerist/:id | POST | Admin user edit a user |

| URL                            | PATH                   |
| ------------------------------ | ---------------------- |
| /                              | HomePage               |
| /admin                         | admin panel page       |
| /login                         | Login page             |
| /sign-up                       | Register page??? modal |
| /users/my-profile              | user profile page      |
| /users/my-profile/fav-snippets | user profile page      |
| /users/:user_id                | user profile page      |
| /users/:user_id/fav-snippets   | Fav snippet page       |
| /users/list                    | users list page        |
| /snippets/list                 | snippet list page      |
| /snippets/create               | snippet create page    |
| /snippets/edit                 | snippet edit page      |
| /snippets/my-snippets          | own snippet page       |

#env variables

BACK_END_APP_API_URL
BACK_END_URL

# HotToCode-Server

The server for the application HotToCode developed by Santiago Moncada & Jorge Hermo

## Auth routes

| METHOD | ENDPOINT        | RESPONSE    | ACTION                       |
| ------ | --------------- | ----------- | ---------------------------- |
| GET    | api/auth/signup | {user}      | Registers the user on the DB |
| GET    | api/auth/login  | {authToken} | Gets the auth token          |
| GET    | api/auth/verify | {authData}  | Verifies the auth token      |

## User routes

| METHOD | ENDPOINT                         | RESPONSE  | ACTION                |
| ------ | -------------------------------- | --------- | --------------------- |
| GET    | api/users                        | [{user}]  | get all users info    |
| GET    | api/users/details/:user_id       | {user}    | get one user info     |
| PUT    | api/users/edit/:users_id         | {user}    | edit a user           |
| PUT    | api/users/favSnippet/:snippet_id | {snippet} | mark a snippet as fav |
| PUT    | api/users/rmSnippet/:snippet_id  | {snippet} | del snippet from fav  |

## Snippets routes

| METHOD | ENDPOINT                                                          | RESPONSE  | ACTION              |
| ------ | ----------------------------------------------------------------- | --------- | ------------------- |
| GET    | api/snippets/list?user={user_id}&lang={language}&limit={quantity} | [snippet] | get all snippets    |
| GET    | api/snippets/details/:sinppet_id                                  | {snippet} | get snippet details |
| POST   | api/snippets/create                                               | {snippet} | create snippet      |
| PUT    | api/snippets/edit/:snippet_id                                     | {snippet} | edit snippet        |
| DELETE | api/snippets/delete/:snippet_id                                   | {snippet} | delete snippet      |

## Comments routes

| METHOD | ENDPOINT                     | RESPONSE  | ACTION           |
| ------ | ---------------------------- | --------- | ---------------- |
| GET    | api/comments/:post_id        | [comment] | get all comments |
| POST   | api/comments/create/:post_id | {snippet} | create a comment |
| PUT    | api/comments/edit/:post_id   | {comment} | edit a comment   |
| DELETE | api/comments/delete/:post_id | {comment} | delete a comment |

## Environment variables required

PORT

ORIGIN

MONGODB_URI

TOKEN_SECRET

CLOUDINARY_NAME

CLOUDINARY_KEY

CLOUDINARY_SECRET

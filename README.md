# jadiatlet-backend

JadiAtlet Backend

## Setup Database

1. Create database with these names:

- `jadiatlet`

## Setup App

1. Install global dependency:
   ```sh
   npm i -g sequelize-cli
   # or
   yarn global add sequelize-cli
   ```
2. Install local dependencies:
   ```sh
   npm i
   # or
   yarn
   ```
3. Edit `.env`

## Starting App

Without migrations

```sh
npm start
# or
yarn start
```

With migrations

```sh
sequelize db:migrate
npm start
# or
sequelize db:migrate
yarn start
```

Access API server by opening http://localhost:8000

## API Endpoints

### /api/v1/auth

| Endpoint              | HTTP | Description   | Body                                                          |
| --------------------- | ---- | ------------- | ------------------------------------------------------------- |
| `/api/v1/auth/login`  | POST | Sign In users | `email` , `password`                                          |
| `/api/v1/auth/signup` | POST | Sign Up users | `first_name`, `last_name` ,`email` , `password` , `user_type` |


### /api/v1/users


| Endpoint            | HTTP   | Description       | Body                                                                                           |
| ------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------- |
| `/api/v1/users/`    | GET    | Get all users     | -                                                                                              |
| `/api/v1/users/:id` | GET    | Get user by id    | -                                                                                              |
| `/api/v1/users/:id` | PUT    | Update user by id | `first_name`, `last_name` ,`address`, `city`,`overview`, `sport` , `phone` , `profile_picture` |
| `/api/v1/users/:id` | DELETE | DELETE user by id |                                                                                                |


### /api/v1/users/:id/achievement


| Endpoint                                       | HTTP   | Description               | Body                                    |
| ---------------------------------------------- | ------ | ------------------------- | --------------------------------------- |
| `/api/v1/users/:id/achievement`                | GET    | Get all achievements      | -                                       |
| `/api/v1/users/:id/achievement`                | POST   | Create achievements       | `title`, `years` ,`id_coach(params:id)` |
| `/api/v1/users/:id/achievement/achievement_id` | GET    | Get achievements by id    | -                                       |
| `/api/v1/users/:id/achievement/achievement_id` | PUT    | Update achievements by id | `title`, `years`                        |
| `/api/v1/users/:id/achievement/achievement_id` | DELETE | DELETE achievements by id |                                         |


### /api/v1/users/:id/experience


| Endpoint                                     | HTTP   | Description              | Body                                                     |
| -------------------------------------------- | ------ | ------------------------ | -------------------------------------------------------- |
| `/api/v1/users/:id/experience`               | GET    | Get all experiences      | -                                                        |
| `/api/v1/users/:id/experience`               | POST   | Create experiences       | `title`, `start_date` ,`end_date` ,`id_coach(params:id)` |
| `/api/v1/users/:id/experience/experience_id` | GET    | Get experiences by id    | -                                                        |
| `/api/v1/users/:id/experience/experience_id` | PUT    | Update experiences by id | `title`, `start_date` , `end_date`                       |
| `/api/v1/users/:id/experience/experience_id` | DELETE | DELETE experiences by id |                                                          |


### /api/v1/users/:id/course


| Endpoint                             | HTTP   | Description              | Body                                                          |
| ------------------------------------ | ------ | ------------------------ | ------------------------------------------------------------- |
| `/api/v1/users/:id/course`           | GET    | Get all experiences      | -                                                             |
| `/api/v1/users/:id/course`           | POST   | Create experiences       | `start_date` ,`end_date`,`description` ,`id_coach(params:id)` |
| `/api/v1/users/:id/course/course_id` | GET    | Get experiences by id    | -                                                             |
| `/api/v1/users/:id/course/course_id` | PUT    | Update experiences by id | `start_date` ,`end_date`,`description`                        |
| `/api/v1/users/:id/course/course_id` | DELETE | DELETE experiences by id |                                                               |


### /api/v1/users/:id/schedule


| Endpoint                                                   | HTTP   | Description           | Body                                                                  |
| ---------------------------------------------------------- | ------ | --------------------- | --------------------------------------------------------------------- |
| `/api/v1/users/:id/course/:course_id/schedule`             | GET    | Get all schedule      | -                                                                     |
| `/api/v1/users/:id/course/:course_id/schedule`             | POST   | Create schedule       | `day`,`start_hour` ,`end_hour`,`venue` ,`id_course(params:course_id)` |
| `/api/v1/users/:id/course/:course_id/schedule/schedule_id` | GET    | Get schedule by id    | -                                                                     |
| `/api/v1/users/:id/course/:course_id/schedule/schedule_id` | PUT    | Update schedule by id | `day`,`start_hour` ,`end_hour`,`venue`                                |
| `/api/v1/users/:id/course/:course_id/schedule/schedule_id` | DELETE | DELETE schedule by id |                                                                       |

### Mongoose sample

### Installation


`npm install`

### Running

This example requires docker or a local mongodb installation.  If using a local mongodb, see `app.module.ts` for connection options, and make sure there are matching options for the mongodb installation and the source code.

#### Docker

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

### Run the sample

Then, run Nest as usual:

`npm run start`


-- Server Design --
1. define domain/entities and connection and modules
2. define use cases (domain services)
3. Controllers -> Mongoose
    - Apis that represent the use case and operate on the mongoose DB


-- Entities/Domains --
- Employee
    - Fields
        - first name
        - last name
        - position

        - manager
        - tasks

    - Actions
        - get all employees
        - reportToManager (text, report date)
- Manager
    - Fields
        - first name
        - last name
        - position

        - Manager
        - subordinates [employees]
        - reports
    - Actions
        - reportToManager (text, report date)
        - assignTask (text, assign date, due date)
# Digital Skills Learning App
An app designed to help volunteers improve their digital skills.
This is a public repository following open source principles. Please feel free to contribute and share :) 

## Contributors / Team

| Who🧍‍♀️🧍       | Role 🌐     | Intro 💬 |
| :-------------: | :----------: | :-----------: |
| Simon | Yalla - Scrum & Developer | |
| Jem | Yalla - Lead Designer | |
| Joe | Yalla - UI/UX & Development | |
| Ramy | Yalla - Development (Lead) | 
| Fadi | Yalla - Development (Frontend) |
| Ahmed | Yalla - Development |
| Tom | Scouts ⚜️ - Senior Project Manager | |
| Rachel | Scouts ⚜️ - Digital Product Manager | |
| Stefano | Scouts ⚜️ - UX Designer | |
| Adam | Scouts ⚜️ - Digital Volunteer | |
| Harley | Scouts ⚜️ - Digital Volunteer | | 
| Stephanie | Scouts ⚜️ - Digital Volunteer | |
| Andrew | Scouts ⚜️ - Digital Volunteer | Scouter, software dev   |

Going through remote discovery and definition design thinking phases and a two week development sprint this app is a joint effort between an amazing network consisting of Scouts’ volunteers and staff as well as Yalla. 

## Part of the Catalyst and The National Lottery Community Fund COVID-19 Digital Response
The collaboration was made possible by CAST and the National Lottery Community Fund. This fund is aimed at organisations whose work has been affected by COVID-19 and who need emergency funding to continue to deliver essential services. It will support them to develop the digital, data and design capabilities that allow them to address urgent issues and serve the most vulnerable.

## Project outputs overview
- Validated user journeys 
- Mobile prototypes
- Questions set to help someone understand their digital skill level
- Prioritsed backlog
- ALPHA web app – ready to deploy for initial UAT testing
- Four key features: Digital skills test, Natural language search, Sign up to help others, HQ user login able to manage resources and see progress data

## User needs statements (Scouts)
As a Scout volunteer working with young people during the Covid-19 pandemic I urgently need better digital skills to support them through our blended digital and socially distanced Scouting programme. I need to understand my digital skill level and learn/gain confidence in a range of digital skills. So that I can complete administration tasks efficiently, recruit volunteers, communicate with parents and other volunteers and keep up to date with my training, which is increasingly being run using digital tools. Above all I will be able to deliver safe, engaging, informative and fun skills for life for young people.

## Features completed
Two user types: volunteers aiming to learn digital skills and HQ organisation users aiming to manage resources.

1) VOLUNTEER USERS
- Landing page / dashboard
- Assessment (Quiz) and filtering resources based on skill areas and skills they already have
- Authentication
- Digital Skills journey (Completing activities and skills / improving scores / recommended training modules / follow up questions)
- Find help with task (most popular tasks / natural search functionality)
- Support others section (needs dot.digital for DC sign up)
- Delete Account option

2) HQ Users
- Landing page / dashboard
- My volunteers stats
- Skills progress stats
- Manage skill
- Edit existing skills
- Add or update activities
- Delete Account option

## Next steps
- ALPHA product created
- User testing in Scouts
- Seaking further funding to continue to work on the product
- Want the product to be used by others in the sector in a really easy way

## Focus: Reuse
We would love to push this aspect further and essentially create a white-label product that organisations can easily host and customise. 
You can already start using your own version of the app by cloning this repository and deploying / hosting the app on your preferred environment.
Please contact us if you need support.

The current version of this app comes with a lean admin panel (HQ) which allows you to manage learning resources and view insightful stats. 
We would like to add more features to enable organisations to further customise the product in a simple way (e.g. without needing to use any code at all).


## Tech Stack overview
- Frontend >> main technology is ReactJS
- Backend >> main technology is NodeJS
- Database >> main technology is PostgresSQL
- Deployment Platform >> [Heroku](https://www.heroku.com/) / Azure

## Further documentation
- [Project structure overview](https://www.notion.so/Project-Schedule-Overview-101e124ca12d427a9e5ed5630fb8b2fa)

- [Project Schedule / Timings](https://www.notion.so/e465b061753e4d35a1e11a27a56b4465?v=0116b1e25d7e4ea69fa4d29357e41319)

- [Design thinking sessions and exercises overview](https://www.notion.so/Design-Thinking-Sessions-and-Exercises-Schedule-28195f25981146ddb267d857eec079d2)

- [UX user testing documentation](https://www.notion.so/Low-Res-User-Testing-840a400348d44c91a0406d580683776e)

- [High resolution prototype user testing documentation](https://www.notion.so/High-Res-User-Testing-e472fd100a674536b004519c0dfe1b75)

- [Tech Stack recommendations overview](https://www.notion.so/Tech-Stack-External-Services-Deployment-Recommendation-341fdfd5fea0466fb073221a195934e3)

## Ochre reporting overview: https://ochre.thecatalyst.org.uk/v2/initiatives/the-scout-association-improving-volunteers-digital-skills


# Digital Skills App Developers GUID (How to get this product to run and how to customise it)

## Tech stack:
The app's tech stack is built on three aspects 
  - Front end tech stack >> main technology is ReactJS
  - Back end tech stack >> main technology is NodeJS
  - The Database  >> main technology is PostgresSQL

## Cloud Services:
  - Deployment Platform >> [Heroku](https://www.heroku.com/) 
  - Scouts Website

## Getting Started

### How to get a copy of the project up and running on your local machine:
Please ensure you have this software installed and running on your local machine before you attempt to run this webapp.
Node: https://nodejs.org/en/
Postgresql: https://www.postgresql.org/download/

#### Setup
1. Clone the repo
2. Install Dependencies

```cd digital-skills-app```

```$ npm run init:both```

3. Setup local Dev and Test Databases 
    >> Follow sql / postresql steps to set up a database and create super user with admin rights
    
5. Add some more Environment Variables
    >> Create a .env file in the root
    >> Add you database connection strings as DATABASE_URL and TEST_DATABASE_URL
    >> Add more varialbes to your .env file (these are required for our authentication system, e.g. sign-up / log-in)
    >> SECRET=choose-your-secret, TOKEN_NAME=token, TOKEN_MAX_AGE=2592000000 

6. Build the Database

```npm run build:db```

6. Run the Tests
To make sure everything is working as it should.

```$ npm test```

8. Run the Server

```npm run dev```

Wait for a compiled successfully message.

9. Have Fun
The webapp should now be running on localhost:3000 Now you can play with the code all you like 🎉

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.

## For external deployments use docker setup 

- `npm i` in server
- `npm i ` in client
- `docker build --no-cache -t digital-skills-app .`
- `docker run -p 8080:8080 --env-file ./.env -d digital-skills-app`
- `docker ps` => list the running docker containers
- `docker exec -it <container-name or id> bash`  => run a bash inside the running docker container

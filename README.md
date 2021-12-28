To run this app:

1. Install docker on your computer

2. Pull image from https://hub.docker.com/r/webbylabhub/movies
`docker pull webbylabhub/movies`


3. Run it, use 8000 port
`docker run --name movies-api -p 8000:8000 webbylabhub/movies`


3. Pull image from https://hub.docker.com/r/dariiaromanova/movies
`docker pull dariiaromanova/movies`


4. Run app
`docker run --name movies -p 3000:3000 -e API_URL=http://localhost:8000/api/v1 dariiaromanova/movies`


5. Open http://localhost:3000/ in your browser


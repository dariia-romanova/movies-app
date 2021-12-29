To run this app:

1. Install docker on your computer

2. Pull image from https://hub.docker.com/r/webbylabhub/movies
`docker pull webbylabhub/movies`


3. Run it, use 48700 port
`docker run --name movies-api -p 48700:8000 webbylabhub/movies`


3. Pull image from https://hub.docker.com/r/dariiaromanova/movies
`docker pull dariiaromanova/movies`


4. Run app
`docker run --name movies -p 3000:3000 dariiaromanova/movies`


5. Open http://localhost:3000/ in your browser

This app's features:
1. Add and post movie on server
2. Delete movie from server
3. Import text file with movies: https://gist.github.com/k0stik/3028d42973544dd61c3b4ad863378cad
4. Search by title or actor among added movies

Issues: 
1. Load movies from server by 'GET' method isn't availible yet

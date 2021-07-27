export default class Project{

    getProjects(){  

        let app =  [];
        
        let matterApp = {
            name: 'Matter-App',
            description: `Project based on Matter App, its function is to give and receive feedback on specific skills -Js Vanilla.
            `,
            categorie: 'API REST',
            url: 'https://matterapp.netlify.app/',
            urlRepository: 'https://github.com/yarango582/Matter-app',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let triviaApp = {
            name: 'Trivia-App',
            description: `Project Trivia App - Js Vanilla.
            Application to retrieve trivia questions.
            `,
            categorie: 'API REST',
            url: 'https://trivia-app-yarango.netlify.app',
            urlRepository: 'https://github.com/yarango582/api-squad-8',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let pokeAPI = {
            name: 'Poke API',
            description: 'Project Poke Api - React',
            categorie: 'API REST',
            url: 'https://pokedex-yarangodev.netlify.app/',
            urlRepository: 'https://github.com/yarango582/pokedex',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let servidorNode = {
            name: 'Server Auth - Node',
            description: 'Server Auth, JWT, Node, Express, Babel, API',
            categorie: 'API REST',
            url: 'https://github.com/yarango582/servidor_node',
            urlRepository: 'https://github.com/yarango582/servidor_node',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let rickAndMortyApp = {
            name: 'Rick And Morty App',
            description: 'Project Rick And Morty Api - React',
            categorie: 'API REST',
            url: 'https://rickandmortyapp-yarangodev.netlify.app/',
            urlRepository: 'https://github.com/yarango582/RickAndMortyApp',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }

        app.push(matterApp);
        app.push(triviaApp);
        app.push(pokeAPI);
        app.push(servidorNode);
        app.push(rickAndMortyApp)
        
        return app;
    }

}


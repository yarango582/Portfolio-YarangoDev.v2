export default class Project{

    getProjects(){  

        let app =  [];
        
        let matterApp = {
            name: 'Matter-App',
            description: `Project based on Matter App, its function is to give and receive feedback on specific skills -Js Vanilla.
            `,
            categorie: 'API REST',
            url: 'https://matterapp.netlify.app/',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let triviaApp = {
            name: 'Trivia-App',
            description: `Project Trivia App - Js Vanilla.
            Application to retrieve trivia questions.
            `,
            categorie: 'API REST',
            url: 'https://trivia-app-yarango.netlify.app',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let pokeAPI = {
            name: 'Poke API',
            description: 'Project Poke Api - React',
            categorie: 'API REST',
            url: 'https://pokedex-yarangodev.netlify.app/',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let servidorNode = {
            name: 'Servidor Auth - Node',
            description: 'Servidor Auth, JWT, Node, Express, Babel, API',
            categorie: 'API REST',
            url: 'https://github.com/yarango582/servidor_node',
            img: 'https://image.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg'
        }
        let rickAndMortyApp = {
            name: 'Rick And Morty App',
            description: 'Consumo de api rick and morty - React',
            categorie: 'API REST',
            url: 'https://rickandmortyapp-yarangodev.netlify.app/',
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


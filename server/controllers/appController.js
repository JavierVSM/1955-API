const {AppModel} = require( '../models/appModel' );

const AppController = {
        
        getIndex: function (request, response){
            AppModel
                .getAll()
                .then (data  => {
                    response.status( 200 ).json( data );
                });
        },        

        display: function (request, response){
            let id = request.params.name;
            AppModel
            .getbyId (id)
            .then (result  => {
                if (result === null){
                    throw new Error("null");
                }
                response.status( 200 ).json( result );
            })
            .catch( err => {
                response.statusMessage = "No data with this name";
                response.status( 404 ).end();
            });
        },

        add: function (request, response){
            let name = request.params.name;
            const createdAt= new Date();
            const updatedAt= new Date();

            const newData = {
                name,
                createdAt,
                updatedAt
            };

            AppModel
                .create(newData)
                .then( result => {
                    response.status( 201 ).json( result );
            })
                .catch( err => {
                    response.statusMessage = "Something goes wrong!";
                    response.status( 400 ).end();
                });
        },

        delete: function (request, response){
            let id = request.params.name;

            AppModel
            .getbyId (id)
            .then( result => {
                if( result === null ){
                    throw new Error( "That person doesn't exist" );
                }
                else{
                    AppModel
                    .deleteById (id)
                        .then( deleteResult => {
                                response.status( 204 ).end();
                        });
                    }
            })
            .catch( error => {
                response.statusMessage = error.message;
                response.status( 404 ).end();
            })
        }
}

module.exports={AppController}
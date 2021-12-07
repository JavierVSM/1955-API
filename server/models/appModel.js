const mongoose = require ('mongoose');

const AppSchema = new mongoose.Schema({
    name: String,
    createdAt: Date,
    updatedAt: Date
});

const App = mongoose.model ('app', AppSchema);

const AppModel={

    create: function(newData){
        return App.create(newData);
    },

    getAll:function(){
        return App.find();
    },

    getbyId: function (name){
        return App.findOne({name:name})
    },

    deleteById: function( name ){
        return App.remove( {name:name} );
    },

    update: function( id, toUpdate ){
        return App.findOneAndUpdate( {id}, {$set : toUpdate }, {new : true} )
    }
};

module.exports = {AppModel};
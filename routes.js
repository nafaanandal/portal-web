'use strict';

module.exports = function (app) {
    var todoList = require('./controller');

    //tabel user
    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);

    app.route('/users/:user_idsso')
        .get(todoList.findUsers);

    app.route('/users')
        .post(todoList.createUsers);

    app.route('/users')
        .put(todoList.updateUsers);

    app.route('/users')
        .delete(todoList.deleteUsers);

    //tabel institusi
    app.route('/institusi')
        .get(todoList.institusi);

    app.route('/institusi/:id_institusi')
        .get(todoList.findInstitusi);

    app.route('/institusi')
        .post(todoList.createInstitusi);

    app.route('/institusi')
        .put(todoList.updateInstitusi);

    app.route('/institusi')
        .delete(todoList.deleteInstitusi);

    //tabel usergroup
    app.route('/usergroup')
        .get(todoList.usergroup);

    app.route('/usergroup/:id_usergroup')
        .get(todoList.findUsergroup);

    app.route('/usergroup')
        .post(todoList.createUsergroup);

    app.route('/usergroup')
        .put(todoList.updateUsergroup);

    app.route('/usergroup')
        .delete(todoList.deleteUsergroup);

    //tabel relation
    app.route('/relation')
        .get(todoList.relation);

    app.route('/relation/:id_relation')
        .get(todoList.findRelation);

    app.route('/relation')
        .post(todoList.createRelation);

    app.route('/relation')
        .put(todoList.updateRelation);

    app.route('/relation')
        .delete(todoList.deleteRelation);

};
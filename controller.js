'use strict';

var response = require('./res');
var connection = require('./conn');

//db auth tabel user
exports.users = function (req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findUsers = function (req, res) {

    var user_idsso = req.params.user_idsso;

    console.log("Launched");

    connection.query('SELECT * FROM user where idsso  = ?',
        [user_idsso],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

exports.createUsers = function (req, res) {

    var username = req.body.username;
    var password = req.body.password;
    var nama = req.body.nama;
    var email = req.body.email;


    connection.query('INSERT INTO user (username, password, nama, email) values (?,?,?,?)',
        [username, password, nama, email],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan user!", res)
            }
        });
};

exports.updateUsers = function (req, res) {

    var user_idsso = req.body.user_idsso;
    var username = req.body.username;
    var password = req.body.password;
    var nama = req.body.nama;
    var email = req.body.email;

    connection.query('UPDATE user SET username = ?, password = ?, nama = ?, email = ? WHERE idsso = ?',
        [username, password, nama, email, user_idsso],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah user!", res)
            }
        });
};

exports.deleteUsers = function (req, res) {

    var user_idsso = req.body.user_idsso;

    connection.query('DELETE FROM user WHERE idsso = ?',
        [user_idsso],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus user!", res)
            }
        });
};

//db auth tabel institusi
exports.institusi = function (req, res) {
    connection.query('SELECT * FROM institusi', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findInstitusi = function (req, res) {

    var id_institusi = req.params.id_institusi;

    console.log("Launched");

    connection.query('SELECT * FROM institusi where id_institusi  = ?',
        [id_institusi],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

exports.createInstitusi = function (req, res) {

    var nama_institusi = req.body.nama_institusi;

    connection.query('INSERT INTO institusi (nama_institusi) values (?)',
        [nama_institusi],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan!", res)
            }
        });
};

exports.updateInstitusi = function (req, res) {

    var id_institusi = req.body.id_institusi;
    var nama_institusi = req.body.nama_institusi;

    connection.query('UPDATE institusi SET nama_institusi = ? WHERE id_institusi = ?',
        [nama_institusi, id_institusi],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah!", res)
            }
        });
};

exports.deleteInstitusi = function (req, res) {

    var id_institusi = req.body.id_institusi;

    connection.query('DELETE FROM institusi WHERE id_institusi = ?',
        [id_institusi],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus!", res)
            }
        });
};

//db auth tabel usergroup
exports.usergroup = function (req, res) {
    connection.query('SELECT * FROM usergroup', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findUsergroup = function (req, res) {

    var id_usergroup = req.params.id_usergroup;

    console.log("Launched");

    connection.query('SELECT * FROM usergroup where id_usergroup  = ?',
        [id_usergroup],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

exports.createUsergroup = function (req, res) {

    var nama_usergroup = req.body.nama_usergroup;

    connection.query('INSERT INTO usergroup (nama_usergroup) values (?)',
        [nama_usergroup],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan!", res)
            }
        });
};

exports.updateUsergroup = function (req, res) {

    var id_usergroup = req.body.id_usergroup;
    var nama_usergroup = req.body.nama_usergroup;

    connection.query('UPDATE usergroup SET nama_usergroup = ? WHERE id_usergroup = ?',
        [nama_usergroup, id_usergroup],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah!", res)
            }
        });
};

exports.deleteUsergroup = function (req, res) {

    var id_usergroup = req.body.id_usergroup;

    connection.query('DELETE FROM usergroup WHERE id_usergroup = ?',
        [id_usergroup],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus!", res)
            }
        });
};

//db auth tabel relation
exports.relation = function (req, res) {
    connection.query('SELECT * FROM relation', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findRelation = function (req, res) {

    var id_relation = req.params.id_relation;

    console.log("Launched");

    connection.query('SELECT * FROM relation where id_relation  = ?',
        [id_relation],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

exports.createRelation = function (req, res) {

    var idsso_fk = req.body.idsso_fk;
    var id_usergroup_fk = req.body.id_usergroup_fk;
    var id_institusi_fk = req.body.id_institusi_fk;

    connection.query('INSERT INTO relation (idsso_fk, id_usergroup_fk, id_institusi_fk) values (?,?,?)',
        [idsso_fk, id_usergroup_fk, id_institusi_fk],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan user!", res)
            }
        });
};

exports.updateRelation = function (req, res) {

    var id_relation = req.body.id_relation;
    var idsso_fk = req.body.idsso_fk;
    var id_usergroup_fk = req.body.id_usergroup_fk;
    var id_institusi_fk = req.body.id_institusi_fk;

    connection.query('UPDATE relation SET idsso_fk = ?, id_usergroup_fk = ?, id_institusi_fk = ? WHERE id_relation = ?',
        [idsso_fk, id_usergroup_fk, id_institusi_fk, id_relation],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah user!", res)
            }
        });
};

exports.deleteRelation = function (req, res) {

    var id_relation = req.body.id_relation;

    connection.query('DELETE FROM relation WHERE id_relation = ?',
        [id_relation],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus user!", res)
            }
        });
};

//indexs
exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};
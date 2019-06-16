'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data); //data yang akan dikembalikan jadi json
    res.end(); //fungsi yang dipake untuk nutup koneksi ke database setelah data ditampilin ke json
};
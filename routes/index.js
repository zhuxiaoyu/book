/*
 * GET home page.
 */
//var Book=require("./model.js");

var mongoose = require('mongoose');
//var Model=require('./model');
//var JingDongBook=Model.JingDong;
//var AmazonBook=Model.Amazon;
var schema1 = mongoose.Schema({
    book_name: String,
    publisher: String,
    listprice: String,
    imageURL: String,
    author: String
}, {
    collection: 'bookinfo' //这里也可一指明集合也可一不指明
});
var conn1 = mongoose.createConnection('mongodb://zhuxiaoyu915:8129401199@oceanic.mongohq.com:10009/BookComparison'); //连接数据库
//首页
var model1 = conn1.model('model1', schema1);
conn1.on('error', function(error) {
    console.log('cuole' + error);
});

var schema2 = mongoose.Schema({
    book_name: String,
    publisher: String,
    listprice: String,
    imageURL: String,
    author: String
}, {
    collection: 'amazon' //这里也可一指明集合也可一不指明
});
var conn2 = mongoose.createConnection('mongodb://xiezichao:8129401199@kahana.mongohq.com:10089/amazon'); //连接数据库
conn2.on('error', function(error) {
    console.log(error);

});
var model2 = conn2.model('model2', schema2);

exports.index = function(req, res) {
    res.render('index.html', {
        title: 'book'
    });
};
//介绍

//书列表

//查询操作
exports.dosearch = function(req, res) {
    var query_doc = ({
        book_name: req.body.name
    }),
        tt = {},
        lresult = {},
        found = false;
    model1.findOne(query_doc, function(err, result) {
        if (result) {
            lresult["jingdongprice"] = result["listprice"];
            lresult["amazonprice"] = result["listprice"];
            lresult["book_name"] = result["book_name"];
            lresult["author"] = result["author"];
            lresult["publisher"] = result["publisher"];
            lresult["imageURL"] = result["imageURL"];

            console.log(result)
            found = true;
        } else {
            found = false;
            console.log(found)
        }
        model2.findOne(query_doc, function(err, result) {
            //console.log(rr["listprice"]);
            if (result) {
                console.log(result)
                tt["listprice"] = result["listprice"];
                found = true;
            } else {
                found = false | found;
                console.log(found)
            }
            if (found) {
                res.render('booklist.ejs', {
                    title: 'Search for ' + req.body.name,
                    searchresult: lresult,
                    tt: tt
                });
            } else {
                res.json({
                    code: 404,
                    msg: 'not found'
                })
            }
        });
    });
}

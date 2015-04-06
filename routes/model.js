
/*var mongoose=require('mongoose');//定义组件
var Schema=mongoose.Schema;
//mongoose.connect('mongodb://localhost:3000/testdb');
var BookSchema=new Schema(
{id:String,
name:String

}
);
//var Book=mongoose.model('Book',BookSchema);
exports.Book=mongoose.model('Book',BookSchema);*/
var mongoose=require('mongoose');//定义组件
var Schema=mongoose.Schema;
//mongoose.connect('mongodb://localhost:3000/testdb');
var JingDongSchema=new Schema(//这里的schema可以不是用完整的数据库项，只要一个或者多个就行
    {
//ISBN:String,
        book_name:String,
        publisher:String,
        listprice:String,
        imageURL:String,
        author:String/*,
     pages:String,
     listprice:String,
     publisher:String,
     date:String,
     language:String,
     imageURL:String
     */
    },{
        collection:'bookinfo'//这里也可一指明集合也可一不指明
    }
);
//var Book=mongoose.model('Book',BookSchema);
exports.JingDong=mongoose.model('JingDong',JingDongSchema);
var AmazonSchema=new Schema(//这里的schema可以不是用完整的数据库项，只要一个或者多个就行
    {
//ISBN:String,
        ISBN:String,
        price:String,

        /*
     pages:String,
     listprice:String,
     publisher:String,
     date:String,
     language:String,
     imageURL:String
     */
    },{
        collection:'amazon'//这里也可一指明集合也可一不指明
    }
);
//var Book=mongoose.model('Book',BookSchema);
exports.Amazon=mongoose.model('Amazon',AmazonSchema);


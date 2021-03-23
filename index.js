http=require('http');
url=require('url');
querystring=require('querystring');
function OnRequest(request,response){
    var path=url.parse(request.url).pathname;
    console.log('Request for'+path+'recived.');
    var query=url.parse(request.url).query;
    var name=querystring.parse(query)["username"];
    var psw=querystring.parse(query)["psw"];
    response.write('Welcome!'+name+'Successfully Loged In');
    response.end();
}

http.createServer(OnRequest).listen(3000);
console.log("Server Started");

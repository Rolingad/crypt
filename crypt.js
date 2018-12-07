console.log('the bot is starting');

var Twit = require('twit');

var T = new Twit({
		consumer_key: 'DZYd0VLHFN28Eqo26ahB9Ir2r',
		consumer_secret: 'tqMcDLc13IpmVLwYo1joxKhnVpbIDPpMksFixLt8VlLrHzk8MU',
		access_token: '960305547802284032-j1a91OKdMWIsUACdrEY9beSXeVcROJh',
		access_token_secret: 'xOYcHXltVhEyxvDMnAJwEQa127KvXT5dgHdIxpgtP0oIF',

});

var checkRE;


setInterval(cryptoREtweet, 1000*60);

function cryptoREtweet(){

T.get('statuses/home_timeline', {count: 10, exclude_replies: true}, callBackFunction)

function callBackFunction(err, data, response){
    if (err){
        console.log('Uh oh, we got a problem');

    }
    else{
        console.log('We GUUCie bruh');

                var tweets = (data);

            for (var i = 0; i < tweets.length; i++) { 
             var posts = tweets[i].id_str;
             var twayte = tweets[i].id_str;
             if (tweets[0] > checkRE) {
             console.log(posts);
             T.post('statuses/retweet/:id', { id: posts, trim_user: true}, function (err, data, response) {
                console.log(data)});

            }

            else{
                console.log('Already Rewteeted')
                

            }
                checkRE = tweets[0].id_str;
                /*if(i % 2 == 0 && posts.screen_name != 'CryptoAggregate'){
                   T.post('statuses/update', 
                   {status: 'NEW to crypto? don\'t want to clog your timeline? FOLLOW for aggregated crypto news!', 
                   in_reply_to_status_id: twayte, }, function(err, data, response) {console.log(data)}) 
                        
                } */
            }
    }



    
    //removing retweeting same tweet error
 





        }
    }   
    //  checkRE = tweets[1].id_str;

           
    return;


//new to crypto? don't want to follow tons of 
//sources and clog your timeline? FOLLOW for aggregated crypto news! We follow sources so you don't have to!


//
//setInterval(1000*30);



/*
STREAM

have initial id for first argument

GET (statuses/home_timeline) feed with since_id of init / count of 20/25 / exclude_replies = true

for loop through tweet ids

store most recent id in feed for next initial argument; 

change value of that var, retweet it

retweet(POST) all others only last 20? 25? tweets
*/

/*var friendStream = T.stream(users) 

function retweetIt(friendsId, Tweetid){

    //take friendsId and find most recent tweetid
    T.get()

    T.post('statuses/retweet/:id', { id: Tweetid }, 

    function (err, data, response) {
        console.log(data)
    })

} */

/*var params = { 
    q: 'rainbow', 
    count: 3 }

//T.get('search/tweets', params, callBack); */


/*function callBack(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) { 
             console.log(tweets[i].text);
        }; 
}; */

/*T.post('statuses/update', { status: 'CryptoAggregate from node' }, function(err, data, response) {
  console.log(data)
})

var friendsId = {

}
*/

/*var users = T.get('friends/ids', { screen_name: 'CryptoAggregate' },  function (err, data, response) {
  console.log(data)
}) */


//var stream = T.stream('statuses/filter', {follow: users});

/*stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    }
}) */

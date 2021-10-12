const aws = require('aws-sdk');

exports.myLamda = () => {

    const lambda = new aws.Lambda()
    
    const params = {
        FuctionName : "myFirstLambda"
    }
    
    lambda.invoke(params,( err, data) => {
        if(err){
            console.error(err)
        }
        return data;
    })
}
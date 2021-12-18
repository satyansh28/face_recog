import express from 'express';
const user1={
    name:'John_Doe',
    age:26
};
const serverapp=express();
serverapp.get('/',(req,res)=>
{
    res.send(user1 );
});
serverapp.listen(5000);
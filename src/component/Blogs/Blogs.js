import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Difference between javascript and nodejs</h1>
            <p>JavaScript is a simple programming language  running in any browser javascript engine.
                on the other hand node js is an interpreter environment for  a javascript programming
                language holding many excesses .
                it requires libraries which can easily be accessed from javascript programming for better use.</p>
            <h1>When should you use nodejs and when should you use mongodb</h1>
            <p>node.js should be used for non blocking,event-driven servers.
                it is used for traditional websites and back-end api services.
                Mongodb should be used to store things that require zero transaction</p>
            <h1>Differences between sql and nosql databases.</h1>
            <p>sql databases are vertically scalable, on the other hand nosql databases
                are horizontally scalable.sql databases are table based,
                on the other hand nosql databases are document,key-value,graph or wide column stores.</p>
            <h1>What is the purpose of jwt and how does it work</h1>
            <p>jwt is an open standard used to ensure security information between  client and server.
                It contain encoded json object. the application or client request authorization to the autorization server.
                when the authorization is granted, the authorization server return an access token to the application.
                the application uses the access token to access a protected resource.</p>
        </div>
    );
};

export default Blogs;
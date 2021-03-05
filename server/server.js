const dotenv = require('dotenv');
const mongoose = require('mongoose');
const socketIo = require('socket.io');

process.on('uncaughtException', err => {
    console.log('UNHANDLER EXEPTION!    SHUTING DOWN...');
    console.log(err.name , err.message , err.stack);
    process.exit(1);

})

dotenv.config({path: './config.env'});

const DB= process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB ,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true,
        useFindAndModify: false
    })
    .then(()=>{console.log("DB connection successful!");
    })
    .catch(err => {
        console.log(err.name , err.message);
    });


    const app = require('./app');

    const port=process.env.PORT || 8000;
    const server = app.listen(port , ()=>{
        console.log(`app running on port ${port}...`);
    });
    
    // For Admin Chat Cors Error
    const io = socketIo(server, {
        cors: {
            origin: ['http://localhost:4200','http://localhost:3000'],
            methods: ["GET","POST"],
            credentials: true,
        },
        //allowEIO3: false 
    });

    io.on('connection', (socket) => {
        // Listening for chat event
        socket.on('chat', function(data){
            // console.log('chat event trigged at server');
            // console.log('need to notify all the clients about this event');
            io.sockets.emit('chat', data);
        });

        // Listening for typing event
        socket.on('typing', function(data){
            // console.log(`Server received ${data} is typing`);
            // console.log('need to inform all the clients about this');
            io.sockets.emit('typing', data);
            //socket.broadcast.emit('typing', data);
        });
    });
    
    process.on('unhandledRejection', err => {
        console.log('UNHANDLER REJECTION!    SHUTING DOWN...');
        console.log(err.name , err.message , err.stack);
        server.close(() => {
            process.exit(1);
        });
    });
    
    
    
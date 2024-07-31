import express from 'express';

const app = express();

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials : true
}))


// data from Form
app.use(express.json({
    limit: '16kb'
}))

// data from url
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

// for public assets 
app.use(express.static('public'));

// for cookies
app.use(cookieParser());

export { app }
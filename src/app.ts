import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {

    const uri = "mongodb+srv://paulo:777otebeb@cluster0.oklmx.mongodb.net/test?retryWrites=true&w=majority"

    mongoose.set('useCreateIndex', true);
    mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;


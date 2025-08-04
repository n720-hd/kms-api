import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import path from "path";
import { router } from './routers';
import { configChecking } from './middleware/config.checking';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { startScheduler } from './utils/scheduler';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import { setupWebSocketHandlers } from './utils/web.socket';

export default class App {
  private app: Express;
  private server: http.Server;
  public io: SocketIOServer;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new SocketIOServer(this.server, {
      cors: {
        origin: "http://localhost:3000",
        credentials: true
      }
    });
    this.configure();
    this.routes();
    this.handleError();
    this.setupSocketIO();
  }

  private configure(): void {
    this.app.use(
      cors({
        origin: 'http://localhost:3000', 
        credentials: true, 
        
      })
    );  
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(configChecking);
    this.app.use(helmet());
    this.app.use(cookieParser())
  }

  private handleError(): void {
    // Not found handler
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).json({ error: 'Not found!' });
      } else {
        next();
      }
    });

    interface ErrorHandler extends Error{
      msg: string;
      status: number;
    }
  
    // General error handler
    this.app.use(
      (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error:', err);
  
          // Send a JSON response with error details for API requests
          res.status(err.status || 500).json({
            error: 'An internal server error occurred.',
            message: err.msg || 'Something went wrong',
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
          });
        } else {
          next(err); 
        }
      }
    );
  }

  private routes(): void {
    this.app.use(router);
  }

  private setupSocketIO(): void {
    setupWebSocketHandlers(this.io);
  }

  public getApp(): express.Application {
    return this.app
  }

  public start(): void {
    process.env.TZ = 'Asia/Jakarta'

    // Expose the "public" directory
    const publicDirectory = path.join(__dirname, "public/images/proof-of-payment");
    // console.log(publicDirectory)

    this.app.use("/images", express.static(publicDirectory));
    const date = new Date()
    console.log('Current timezone: ', process.env.TZ);
    console.log('Current server time: ', date.toLocaleString('en-US', {timeZone: process.env.TZ}));
    this.server.listen(PORT, () => {
      console.log(`  ➜ [ ϟϟ API ϟϟ ] Local: http://localhost:${PORT}/`);
    });
    startScheduler();
  }
}
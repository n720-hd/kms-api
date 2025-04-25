import { Router } from 'express';

export class SampleRouter {
  private router: Router;


  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {

  }

  getRouter(): Router {
    return this.router;
  }
}

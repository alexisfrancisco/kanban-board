import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BoardComponent } from './app/board/board.component';

bootstrapApplication(BoardComponent);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

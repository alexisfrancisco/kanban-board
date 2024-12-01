import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

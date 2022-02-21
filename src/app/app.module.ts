import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import appRoutes from './routerConfig';
import { AccordianComponent } from './shared/accordian/accordian.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ButtonsComponent } from './shared/buttons/buttons.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { CToPComponent } from './c-to-p/c-to-p.component';
import { ChildComponent } from './c-to-p/child/child.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HomePageComponent,
    GamePageComponent,
    AboutPageComponent,
    AccordianComponent,
    ButtonsComponent,
    CToPComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

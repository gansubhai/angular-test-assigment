import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CToPComponent } from './c-to-p/c-to-p.component';

const appRoutes: Routes = [
    { path: 'home', 
      component: HomePageComponent 
    },
    {
      path: 'game',
      component: GamePageComponent
    },
    { path: 'about',
      component: AboutPageComponent
    },
    { path: 'c-to-p',
      component: CToPComponent
    }
  ];

  export default appRoutes;
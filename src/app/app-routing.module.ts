import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: "", component: AppComponent, pathMatch: 'full' },
  { path: "skillset", 
    loadChildren: () => import('./modules/skillset/skillset.module').then(m => m.SkillsetModule)
  },
  { path: "portfolio", 
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  { path: "about",
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  { path: "profiles",
    loadChildren: () => import('./modules/profiles/profiles.module').then(m => m.ProfilesModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'skillset',
  //   pathMatch: 'full'
  // },
  // { path: "**", component: AppComponent }
  //   loadChildren: () => import('./modules/skillset/skillset.module').then(m => m.SkillsetModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

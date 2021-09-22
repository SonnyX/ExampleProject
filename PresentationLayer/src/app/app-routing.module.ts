import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', data: { breadcrumb: { skip: true } }, loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule), runGuardsAndResolvers: () => false },
  { path: '', data: { breadcrumb: 'Home' }, pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

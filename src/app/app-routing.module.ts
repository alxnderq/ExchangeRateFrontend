import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [],
      {
        preloadingStrategy: PreloadAllModules,
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

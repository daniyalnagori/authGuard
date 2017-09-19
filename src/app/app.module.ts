
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { LoginService} from './login.service';
import { LoginGuard} from './login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule,MdButtonModule,MdMenuModule,MdToolbarModule,MdIconModule,MdCardModule,MdListModule,MdInputModule,MdGridListModule,MdSelectModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './adminLayout/admin-layout.component';
import { AppRoutes } from './app.routing';
import { CoreModule } from './core/core.module';
import { MenuItems } from './admin/admin.menu';
import { SharedModule } from './shared/shared.module';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
     MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdGridListModule,
    FlexLayoutModule,
    MdSelectModule,
    MaterialModule
  ],
  providers: [MenuItems,LoginService,LoginGuard],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
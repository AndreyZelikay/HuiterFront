import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import {AppComponent} from './app.component';
import {TwitComponent} from './twit/twit.component';
import {TapeComponent} from './tape/tape.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommentComponent} from './comment/comment.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserDataProvider} from './Providers/UserDataProvider';
import {AuthGuardService} from './Services/AuthGuardService';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {AuthInterceptor} from './Interceptors/AuthInterceptor';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateTwitComponent } from './create-twit/create-twit.component';

const appRoutes: Routes = [
  {path: 'tape', component: TapeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService]},
  {path: 'create-twit', component: CreateTwitComponent, canActivate: [AuthGuardService]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TwitComponent,
    TapeComponent,
    CommentComponent,
    CreateCommentComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    CreateTwitComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserDataProvider, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { FormsControl } from "@angular/forms";
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
  // FormsModule
} from "angular4-social-login";
import { AppComponent } from "./app.component";

const google_oauth_client_id: string =
  "628736819779-setnktlmkbm2lvvlbmjk1vid07vnsn4j.apps.googleusercontent.com";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocialLoginModule.initialize(config)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

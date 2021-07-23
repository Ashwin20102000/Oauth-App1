import { Component } from "@angular/core";
// import { FormsControl } from "@angular/forms";
import { AuthService, GoogleLoginProvider } from "angular4-social-login";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: any;
  users: any = [];
  clientAge: number;
  clientPhone: string;
  clientLang: string = "English";
  constructor(private _socailAuthServ: AuthService) {}
  signIn(platform: string) {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socailAuthServ.signIn(platform).then((res) => {
      this.user = res;
      let clients = JSON.parse(localStorage.getItem("userData") || "[]");
      let clientObj = clients.filter((client) => {
        return client.email === this.user.email;
      });
      this.clientAge = clientObj[0]?.age; // or cleintObj[0].email
      this.clientPhone = clientObj[0]?.num;
      this.clientLang = clientObj[0]?.lang;
      // console.log(clientObj);
      // console.log(this.clientAge);
    });

    // this.age = age;
  }
  save() {
    let age: number = document.getElementById("age").value;
    let num: number = document.getElementById("num").value;
    let lang: string = document.getElementById("lang").value;
    let email = this.user.email;
    let saveUser = { age, num, lang, email };
    let allUsers = JSON.parse(localStorage.getItem("userData") || "[]");
    if (!allUsers) this.users.push(saveUser);
    else {
      this.users = [];
      this.users.push(...allUsers);
      this.users.push(saveUser);
    }
    console.log(this.users);
    console.log(saveUser);
    localStorage.setItem("userData", JSON.stringify(this.users));
    alert("Successfully Saved...");
  }
}

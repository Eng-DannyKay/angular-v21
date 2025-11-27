import { Component, OnInit, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import { Toolbar, ToolbarWidget, ToolbarWidgetGroup } from '@angular/aria/toolbar';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

interface LoginModel{
  email:string;
  password:string;
}
@Component({
    selector: 'app-root',
    imports: [ Field,AutocompleteComponent,MenuBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angularv21';

  loginModel = signal<LoginModel>({
    email: 'danny@gmial.com',
    password: ''
  })

  loginForm = form(this.loginModel, (path) => {
    required(path.email);
    email(path.email);
    required(path.password);
  });

  ngOnInit(): void {
     // Returns FieldState with value(), valid(), touched(), etc.
    this.loginForm.email()


  }



  updateEmail() {
this.loginForm.email().value.set('example@gmail.com')
  }
  
  onSubmit(event: Event) {
    event.preventDefault();
    const  credentials = this.loginModel();
    console.log('Login submitted', credentials);
    console.log('Email field state:', this.loginForm().value());
  }


}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../components/model/User.modle';
import { LoginService } from '../../../components/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private LoggedIn = new BehaviorSubject<boolean>(false)
  private user: User | null = null;
  private userId : number = 0;
  public spiner : boolean = false
  constructor(private loginService : LoginService) { }
  
  init(){

  }

  set setLoggedIn(value : boolean){
    this.LoggedIn.next(value)
  }
  get isLoggedIn (){
    return this.LoggedIn.asObservable();
  }
  getuser (){
    return this.user;
  }
  async login(userId : number){
    this.spiner = true;
    this.userId = userId;
    if(!this.user){
      
      sessionStorage.clear();
      let res: User;
      res = await this.loginService.getUser(userId)
      sessionStorage.setItem("userId", this.userId.toString())
      this.setAfterLogin(res);
      sessionStorage.setItem("user", JSON.stringify(res))
      this.spiner = false;
      return res;

    }
    this.spiner = false;
    return this.user;
  }

  setAfterLogin(user: User){
    this.user = new User();
    Object.assign(this.user, user)

    if(!this.LoggedIn.value){
    this.setLoggedIn = true;}
  }

  async checkLoogedIn(): Promise<boolean>{
    var user = null;
    var userData = sessionStorage.getItem("user");
    if(userData!= null)
      user = JSON.parse(userData);
    if(user){
      this.setAfterLogin(user);
      return true;
    }
    else
      return false;
  }

  logOut(rout:boolean){
    var id = sessionStorage.getItem("userId");
    sessionStorage.clear();
    this.user = null;
    this.LoggedIn.next(false);

  }
}

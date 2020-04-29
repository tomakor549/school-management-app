import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class UserCreationHelper {
    
    public generateLogin(firstName:string, lastName:string){
        return firstName.substring(0,3) + lastName.substring(0,3) + (Math.floor(Math.random() * 100) + 100).toString().substring(0,3) ;
    }

    public generatePassword()
    {
        return (Math.floor(Math.random() * 100) + 100).toString().substring(0,3);
    }

}
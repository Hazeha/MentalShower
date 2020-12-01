import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class LoginService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private router: Router, private afAuth: AngularFireAuth) { }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    login(username, password) {
        if (username !== '' && password !== '') {
            return this.afAuth.auth.signInWithEmailAndPassword(username, password).then(authState => {
                this.loggedIn.next(true);
                console.log('Success!');
                this.router.navigate(['advancesetting']);
            })
                .catch(
                    error => {
                        this.router.navigate(['login/' + error.message]);
                        console.log(error);
                    }
                );
        }
    }
    logout() {
        this.loggedIn.next(false);
        this.afAuth.auth.signOut();
        this.router.navigate(['/login']);
    }
    signup(username: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(username, password).then(
            authState => {
                console.log('signup-then', authState);
                this.loggedIn.next(true);
                this.router.navigate(['advancesetting']);
            }
        )
            .catch(
                error => {
                    const errorMessage = error.message;
                    this.router.navigate(['signup/' + error.message]);
                    console.log(error);
                }
            );
    }

}

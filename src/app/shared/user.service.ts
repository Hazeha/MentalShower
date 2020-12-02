import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import md5 from 'md5';

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
                console.log(authState);
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
        this.router.navigate(['']);
    }
    signup(username: string, email: string, password: string, photoUrl: string) {
        console.log('from service', photoUrl)
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
            authState => {
                authState.user.updateProfile({
                    displayName: username,
                    photoURL: photoUrl
                });
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

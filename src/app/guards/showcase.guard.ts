// showcase.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ShowcaseGuard implements CanActivate {

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return environment.showCase; // Retorna a variável do ambiente "showcase".
                                     // Se for "true", a navegação é permitida. Se for "false", a navegação é interrompida.
    }
}

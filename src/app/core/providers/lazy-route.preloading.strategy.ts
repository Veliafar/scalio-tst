import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export class LazyRoutePreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, preload: any): Observable<any> {
        if (route.data && route.data.preload) {
            return preload();
        } else {
            return of(null);
        }
    }
}

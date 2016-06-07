import {BrowserXhr} from "@angular/http";
import {Injectable, provide} from "@angular/core";

@Injectable()
export class CORSBrowserXHR extends BrowserXhr {
    build(): any {
        var xhr: any = super.build();
        xhr.withCredentials = true;
        return xhr;
    }
}
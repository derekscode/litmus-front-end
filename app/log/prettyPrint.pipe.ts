import { PipeTransform, Pipe } from 'angular2/core';

@Pipe({
    name: 'prettyPrint'
})

export class PrettyPrintPipe {
    transform(jsonString) {
        var jsonObject = JSON.parse(jsonString);

        var result = JSON.stringify(jsonObject, null, 2)
            .replace(/ /g, '&nbsp;')
            .replace(/\n/g, '<br/>'); 
        
        return result;
    }
}
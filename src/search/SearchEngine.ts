export class SearchEngine{
    getResults(){
        var results = [];
        for(var i=0; i<3; i++){
            results.push({
                id: i + 1,
                value: `Result-${i + 1}`
            })
        }

        return results;
    }
}
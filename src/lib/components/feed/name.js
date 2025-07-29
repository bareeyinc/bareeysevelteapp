export function getFullname (list) {

    let example = list["user"]["username"];

    console.log(list);

    if(list["user"]["profile"] != null){
        let exampledata = JSON.parse(list["user"]["profile"]);

        if(exampledata["fullname"] != null ){
            if(exampledata["fullname"].trim().length > 0){
                example = exampledata["fullname"]
            }
        }
    }

    return example;
}
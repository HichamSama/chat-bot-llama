import {AutoCrud} from "@vaadin/hilla-react-crud";

export default function person(){
    return(
        <AutoCrud service={PersonService} model={PersonModel}/>
    );
}
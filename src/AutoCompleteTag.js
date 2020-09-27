import React from 'react';
import AutoCompleteMutiple from './AutoCompleteMutiple';

class AutoCompleteTag extends React.Component{
    constructor(){
        super();
        this.state={
            
            suggestions:[
                "Alligator",
                "Alddeee",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands"
              ]
        }
    };

    render(){
        return(
            <AutoCompleteMutiple 
            suggestions={this.state.suggestions}
           />

        )
    } 
}
export default AutoCompleteTag;
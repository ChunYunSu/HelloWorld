import React from 'react';
import AutoSuggestion from './AutoSuggestion';
 class AutoCompleteSingle extends React.Component{
    constructor(){
        super();
        this.state={
            
            options:[
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
            <AutoSuggestion options={this.state.options} />

        )
    }

}
export default AutoCompleteSingle;
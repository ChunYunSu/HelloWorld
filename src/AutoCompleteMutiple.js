import React from 'react';
import './AutoCompleteMutiple.css';


class AutoCompleteMutiple extends React.Component {
    static defaultProps = {
      suggestions: []
    };
    constructor(props) {
      super(props);
      this.state = {
        // The active selection's index
        activeSuggestion: 0,
        // The suggestions that match the user's input
        filteredSuggestions: [],
        // Whether or not the suggestion list is shown
        showSuggestions: false,
        // What the user has entered
        userInput: "",
        myItems: [],
        alreadyInItems : false,
      };
      this.helperspan = null;
      this.lastId = -1;
      this.onChange = this.onChange.bind(this);
      this.handleKeypress = this.handleKeypress.bind(this);
      this.makeAddedList = this.makeAddedList.bind(this);
      this.handleClick = this.handleClick.bind(this);
      
    }
    makeAddedList() {
          
          const elements =  this.state.myItems.map((listitem, index) => (
              <li
                  key={listitem.id}
                  onClick={this.handleClick}
                  data-item={listitem.id}
              >
                  {listitem.content}
              </li>
          ));
          return elements
  
      }
    handleClick(event) {
        const idToRemove = Number(event.target.dataset["item"]);
        const newArray = this.state.myItems.filter((listitem) => {return listitem.id !== idToRemove});
        this.setState({ myItems: newArray });
    }
    handleKeypress(event) {
          if (event.key === "Enter") {
        var alreadyInItems = this.state.alreadyInItems;
        if(alreadyInItems)
          return false;
              var newArray = this.state.myItems;
              // var currentcontent = this.state.userInput.trim();
        var currentcontent = (this.state.filteredSuggestions[0] && this.state.filteredSuggestions[0].trim()) ? this.state.filteredSuggestions[0].trim() : this.state.userInput.trim();
              if (!currentcontent) {
                  return; 
              }
              
              newArray.push({
                  content: currentcontent, 
                  id: ++this.lastId
              });
              this.setState({
                  myItems: newArray,
                  userInput: "",
              });
          }
      }
    // Event fired when the input value is changed
    onChange = e => {
      const { suggestions } = this.props;
      let {myItems} = this.state;
      const userInput = e.currentTarget.value;
      //let fItems = this.state.filteredSuggestions;
      let showSuggestions = this.state.showSuggestions;
      let alreadyInItems = this.state.alreadyInItems;
      // Filter our suggestions that don't contain the user's input
      console.log(userInput);
    
      let filteredSuggestions = suggestions.filter(
        suggestion =>{ 
          return suggestion.toLowerCase().startsWith(userInput.toLowerCase())
        }
          
      );
      showSuggestions = true;
      if( myItems && myItems.length > 0){
        filteredSuggestions = filteredSuggestions.filter(function(val) {
          return !myItems.find(function(e){
                  return e.content === val;
                });
        });
          var alreadyIn = myItems.some(function (obj) {
            return obj.content.toLowerCase() === userInput.toLowerCase();
          });
          if(alreadyIn){
            alreadyInItems = true;
            showSuggestions = false;
          }else{
            alreadyInItems = false;
            showSuggestions = true;
          }
        
      }
      
      
      // Update the user input and filtered suggestions, reset the active
      // suggestion and make sure the suggestions are shown
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: showSuggestions,
        userInput: e.currentTarget.value,
        alreadyInItems: alreadyInItems
      });
    };
  
    // Event fired when the user clicks on a suggestion
    onClick = e => {
      // Update the user input and reset the rest of the state
      // this.setState({
      //   activeSuggestion: 0,
      //   filteredSuggestions: [],
      //   showSuggestions: false,
      //   userInput: e.currentTarget.innerText
      // });
      var newArray = this.state.myItems;
              var currentcontent = e.currentTarget.innerText.trim();
              if (!currentcontent) {
                  return; 
              }
              
              newArray.push({
                  content: currentcontent, 
                  id: ++this.lastId
              });
              this.setState({
                  myItems: newArray,
                  userInput: "",
              });
    };
    
    render() {
      const {
        onChange,
        onClick,
        handleKeypress,
        state: {
          activeSuggestion,
          filteredSuggestions,
          showSuggestions,
          userInput,
          alreadyInItems
        }
      } = this;
      let suggestionsListComponent;
      console.log(this.state.myItems);
      if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;
  
                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
  
                return (
                  <li
                    className={className}
                    key={suggestion}
                    onClick={onClick}
                  >
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div className="no-suggestions">
              <em>No suggestions, you're on your own!</em>
            </div>
          );
        }
      } else if(alreadyInItems){
          suggestionsListComponent = (
            <div className="no-suggestions">
              <em>Sorry, Already added</em>
            </div>
          );
      }
      return (
        <>
        <div className="item list_container">
          {this.makeAddedList()}
         </div>
        <div className="item input_container">
           <>
            <input
              type="text"
              autoComplete="off"
              onChange={onChange}
              onKeyPress={handleKeypress}
              value={userInput}
            />
            {suggestionsListComponent}
     
          </>
        </div>
        </>
      );
    }
  }

  export default AutoCompleteMutiple;
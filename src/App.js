import Form from "./components/Form/Form";
import Content from "./components/Content/Content";
import React, {useState} from "react";
import "./App.css"

const initialValue = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

function App() {
    const [value, setValue] = useState(initialValue)
    const [isMatching, SetIsMatching] = useState(true)

    // finding Word, hightlight Word, Replace Word functionalities START
    const onFormInputValueChange = (returnedSearchValue, returnedReplaceContentValue) => {

      const splitSearchIntialValue = initialValue.split(new RegExp(`(\\b${returnedSearchValue}\\b)`, 'gi'));
      //highlighting Word
      if(returnedReplaceContentValue.length < 1){
        const higlightValue =  <span>{ splitSearchIntialValue.map((each, i) => 
          <span key={i} style={each.toLowerCase() === returnedSearchValue.toLowerCase() ? { backgroundColor: 'red'} : {} }>{ each}</span>)} </span>;
          setValue(higlightValue)
        }

        //  if value is not found then display "Not found" START
        const checkIsMatching = splitSearchIntialValue.map(each => each.toLowerCase() === returnedSearchValue.toLowerCase()) 
        if(checkIsMatching.length === 1){
          SetIsMatching(false)
        } else {
          SetIsMatching(true)
        }
        // display "Not found" End

        // Find and Replace functionality START
        if(returnedSearchValue.length > 0 && returnedReplaceContentValue.length > 0){
        const replaceWord = initialValue.replace(new RegExp(`\\b${returnedSearchValue}\\b`, "gi"), returnedReplaceContentValue)
        setValue(replaceWord)
        }
        // Find and Replace functionality End
    }

  return (
    <div>
      {!isMatching && <h3 className="warning">Word Not Found</h3>}
      <Form formInputValue = {onFormInputValueChange} isMatching = {isMatching} />
      <Content value={value}/>
    </div>
  );
}

export default App;

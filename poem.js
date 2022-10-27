//Part 1 - Define the extra information section for the poem

$("#info").html("<p>Extra info will go here.</p>");

// Part 2 - Display the first line of the poem and access info from the poem object if it exists

$.getJSON("poem.json", function(data){ // data variable is the JSON object
  let poemText; // Define a new variable to hold all text
  poemText = "<blockquote><p>"; // Open the starting tags
  // Now you can iterate (map) over the data variable’s .lines property:
  data.lines.map(function(line){ // We get a variable, line
    // Define a blank lineText.
    let lineText = "";
    // Now iterate over each word. This part should be familiar to you from before
    line.map(function(word){
      let wordString;
      wordString = word.text;
      if (word.info){
        wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " "; // Add the word to the lineText variable with spacing
    });
    // Add lineText with a line break to the poemText
    poemText = poemText + lineText + "<br/>";
  });

  // Close the poemText tags
  poemText = poemText + "</p></blockquote>";

  // Replace the content of #poem
  $("#poem").html(poemText);

// Part 3 - Add the click event to the poem
  
// Now that we have the data, we can add the click event to the poem
  $("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo;
    clickedWord = $( this ).text();
    // .data("info") looks for the data-info HTML attribute
    clickedInfo = $( this ).data("info");
    infoText = clickedInfo;
    $("#info").html(infoText);
  });
}); // Close the getJSON method and callback function

// the essential moves of the code are as follows:

//     Run the getJSON() method, passing in the poem.json file as the source.
//     Call the callback function, passing in the data variable (the JSON object).
//     Create a new variable to hold all the text of the poem.
//     map() over the data variable's lines property.
//     map() over each word in each line.
//     Make elements clickable if they have info data.
//     Add each line to the poemText variable with a line break, and add the text to the #poem element.
//     Run the click() method on the #poem element, to see if the user clicks on a word.

// example of map function
//    let myArray = [1, 2, 3]
//    let squaredArray = []
//    squaredArray = myArray.map(function(num) {
//      return num**2;
//     });
// console.log(squaredArray);
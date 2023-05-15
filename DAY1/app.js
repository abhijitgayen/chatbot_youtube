const {botResponse} = require('./chatbot/botResponse')

 
process.stdin.on('data', (data) => {
    // Data is a Buffer, so convert it to a string 
    // trim leading/trailing whitespace
    const user_message = data.toString().trim();
    
    botResponse(user_message).then((response)=>{
        console.log('Me :', user_message);
        console.log('Bot: ',response.message);
    })
    
    if (user_message == 'exit'){
        process.exit();
    }
  });
  
  // Write a prompt to the terminal
  console.log("Enter you message: ");
function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello I have a great discount offer for you!";
    } else if (input == "okay tell me") {
        return "what is your flat preference 1bhk or 2bhk?!";
	}else if (input == "1bhk"){
		return "Ok are you looking for investment purposes or for self-use?!";
	}else if (input == "self use"){
		return "Contact in Sales Executive!";		
    } else {
        return "Sir/Mam contact on (9999888777) number, l'll send all project details,brochures,images,discount offer price,and payment plan on your whatsapp,!";
    } 
		
	
}
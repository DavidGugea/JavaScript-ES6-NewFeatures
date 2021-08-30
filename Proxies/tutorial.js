const gameSettings = {
    date : "2021-28-8"
};

// A proxy is a wrapper for the game settings
// The methods inside the handler are called traps ( see docs for the methods that you can use )
const gameSettingsProxy = new Proxy(gameSettings, {
    // Get TRAP
    get : (o, property) => {
        // o is going to refer to the target object ( in our case -> gameSettings ) 
        // property will refer to the property that you are trying to retrieve
        return property in o ? o[property] : "decode";
    },

    // Set TRAP
    set : (o, property, value) => {
        if(property === "difficulty" && !["easy", "medium", "hard"].includes(value.toLowerCase())){
            throw new Error("Difficulty is invalid!");            
        }

        o[property] = value;
    },

    // Has TRAP
    has : (o, property) => {
        // Trap for "in" keyword ( it can only return true or false )
        if(property === "difficulty"){
            return false;
        }

        return property in o;
    }
});

gameSettingsProxy.difficulty = "easy";
console.log("difficulty" in gameSettingsProxy);

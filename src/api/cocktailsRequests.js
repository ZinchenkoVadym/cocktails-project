export const cocktailsRequests = {
    async getCocktailsAlphabet(letter) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        return await response.json()
    }
}



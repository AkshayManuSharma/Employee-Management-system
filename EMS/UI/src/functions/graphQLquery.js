async function runGraphQLQuery(query,variables){
    try{
        const response = await fetch("http://localhost:3000/graphql",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({query,variables})
        })
        const result = await response.json()
        if(result.errors){
            const error = result.errors[0]
            if(error.extensions.code === "BAD_USER_INPUT"){
                const details = error.extensions.exception.errors.join('\n ');
                alert(`${error.message}:\n ${details}`);
            }else {
                alert(`${error.extensions.code}: ${error.message}`);
            }
        }
        else{
            let keyName = Object.keys(result.data)[0]
            return result.data[keyName]
        }
    }catch(e){
        console.error(e)
        alert(`Error in sending data to server: ${e.message} `)
    }
}

module.exports = {runGraphQLQuery}
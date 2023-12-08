const fs = require('fs')
const { ApolloServer } = require('apollo-server-express');
const { GraphqlDate } = require('./graphqlDate')
const { getEmployeeList, getEmployeeData, createEmployee, deleteEmployeeData, updateEmployeeData } = require('./employee')


const typeDefs = fs.readFileSync('./schema.graphql').toString()

const resolvers = {
    Query : {
        employees : ()=>getEmployeeList(),
        employee : getEmployeeData,
    },
    Mutation : {
        createEmployee,
        updateEmployeeData,
        deleteEmployeeData
    },
    GraphqlDate
}

function installHandler(app, enableCors){
    const graphQLServer = new ApolloServer({
        typeDefs : typeDefs,
        resolvers : resolvers,
        formatError : (er)=>{
            console.log(er)
            return er
        }
    })
    graphQLServer.start().then(()=>{
        graphQLServer.applyMiddleware({app, path : "/graphql", cors : enableCors})
    })
}

module.exports = {installHandler}
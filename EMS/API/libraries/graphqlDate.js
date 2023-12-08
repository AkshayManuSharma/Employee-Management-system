const {GraphQLScalarType , Kind } = require('graphql')

const GraphqlDate = new GraphQLScalarType({
    name: 'GraphqlDate',
    description: 'GraphQL Scalar Date',
    serialize(value) {
        if (value === '') {
            return ''
          }
        const d = new Date(value);
        return d.toISOString();
    },
    parseValue(val) {
      if (val === '') {
        return '';
      }
      const date = new Date(val);
      return Number.isNaN(date) ? undefined : date;
    },
    parseLiteral(ast) {
      if (ast.Kind == Kind.STRING) {
        if (ast.value === '') {
          return '';
        }
        const date = new Date(ast.value);
        return NUmber.isNaN(date) ? undefined : date;
      }
    },
});

module.exports = { GraphqlDate }
import { composeMongoose } from "graphql-compose-mongoose";
import { schemaComposer } from "graphql-compose";
import Todo from "../model/todo.model";

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const TodoTC = composeMongoose(Todo, customizationOptions);

// STEP 3: Add needed CRUD User operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing
schemaComposer.Query.addFields({
  todoById: TodoTC.mongooseResolvers.findById(),
  todoByIds: TodoTC.mongooseResolvers.findByIds(),
  todoOne: TodoTC.mongooseResolvers.findOne(),
  todoMany: TodoTC.mongooseResolvers.findMany(),
  todoDataLoader: TodoTC.mongooseResolvers.dataLoader(),
  todoDataLoaderMany: TodoTC.mongooseResolvers.dataLoaderMany(),
  todoByIdLean: TodoTC.mongooseResolvers.findByIdLean(),
  todoByIdsLean: TodoTC.mongooseResolvers.findByIdsLean(),
  todoOneLean: TodoTC.mongooseResolvers.findOneLean(),
  todoManyLean: TodoTC.mongooseResolvers.findManyLean(),
  todoDataLoaderLean: TodoTC.mongooseResolvers.dataLoaderLean(),
  todoDataLoaderManyLean: TodoTC.mongooseResolvers.dataLoaderManyLean(),
  todoCount: TodoTC.mongooseResolvers.count(),
  todoConnection: TodoTC.mongooseResolvers.connection(),
  todoPagination: TodoTC.mongooseResolvers.pagination(),
});

schemaComposer.Mutation.addFields({
  TodoTCCreateOne: TodoTC.mongooseResolvers.createOne(),
  TodoTCCreateMany: TodoTC.mongooseResolvers.createMany(),
  TodoTCUpdateById: TodoTC.mongooseResolvers.updateById(),
  TodoTCUpdateOne: TodoTC.mongooseResolvers.updateOne(),
  TodoTCUpdateMany: TodoTC.mongooseResolvers.updateMany(),
  TodoTCRemoveById: TodoTC.mongooseResolvers.removeById(),
  TodoTCRemoveOne: TodoTC.mongooseResolvers.removeOne(),
  TodoTCRemoveMany: TodoTC.mongooseResolvers.removeMany(),
});

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;

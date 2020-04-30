"use strict";
/** @format */
// graphql inkmarket backend
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var resolvers_1 = require("./resolvers");
var typeDesf = "\n    type Query {\n        categories : [Category!]!\n        products(category: String!, limit: Int!, after: String): [Product!]!\n        ofertas(category: String!, limit: Int!, after: String): [Oferta!]!\n        providers: [Providers!]!\n        warehouses: [Warehouse!]!\n        directions(uid:String!): [direction!]\n        client(_uid: String): [Client!]\n        order(_uid: String!): [Order]\n        getOrders: [Order]\n    }\n\n    type Mutation {\n        createCategories(input: CategoryInput!) : Category\n        createProduct(input: ProductInput!) : Product\n        createOfertas(input: OffertInput!): Oferta\n        createProviders(input: ProvidersInput!) : Providers\n        createWarehouse(input: WarehouseInput!): Warehouse\n        createClient(input: ClientInput!): Client\n        createOrder(input: OrderInput!): Order\n        createDirection(input: directionInput!) : direction\n        updateQuantity(sku: String!, quantity: Int): Boolean \n\n    }\n\n    input CategoryInput {\n            title: String!\n            description: String!\n            uri: String!\n    }\n    input ProductInput {\n            category: String!\n            name: String!\n            warehouse: String\n            price: Float!\n            quantity: Int!\n            unidad_media: String!\n            uri: String!\n            description: String   \n    }\n\n    input OffertInput {\n            name: String!\n            percentage: Int!\n            product: String!\n            category: String!\n            description: String\n   }\n\n   input ProvidersInput {\n           ruc: String!\n           category: String!\n           razon_social: String!\n           direction: String!\n           phone: String!\n           email: String\n   }\n\n   input WarehouseInput {\n           name: String!\n           direction: String!\n   }\n\n   input ClientInput {\n           razon_social: String!\n           _uid: String!\n           phone: String!\n           email: String!\n           password: String!\n           quantity_family: Int!\n           direction: String\n           \n   }\n\n   input OrderInput {\n           products: [ProducOrder]!\n           direction: String!\n           client: String!\n           price_total: Float!\n           quantity_total: Int!\n   }\n\n   input directionInput {\n           avenida: String!\n           distrito: String!\n           referencie: String!\n           client: String!\n   }\n\n   type direction {\n        _uid: String\n        avenida: String\n        distrito: String\n        referencie: String\n        client: String\n   }\n\n   input ProducOrder {\n        sku: String!\n        quantity: Int!\n        price: Float! \n   }\n\n   type Order {\n        _uid: String\n\tproducts: [OrdersDetail]\n        price_total: Float\n        direction: direction\n        client: Client\n        quantity_total: Int\n        state: Boolean\n   }\n\n   type OrdersDetail {\n        product: Product \n        quantity: Int\n        price: Float   \n   }\n\n   type Client {\n           _uid: String\n           razon_social: String\n           phone: String\n           email: String\n           quantity_family: Int\n           direction: String\n   }\n\n   type Warehouse {\n        _uid: String\n        name: String\n        direction: String\n   }\n\n   type Providers {\n           ruc: String!\n           razon_social: String!\n           direction: String!\n           category: Category\n           phone: String!\n           email: String\n\n   }\n    \n    type Oferta {\n            _uid: String\n            name: String\n            percentage: Int\n            description: String\n            product: Product\n            category: Category\n    }\n\n    type Category {\n            _uid: String\n            title: String\n            description: String\n            uri: String\n            products: [Product!]!\n    }\n\n    type Product {\n            sku: String\n            category: Category\n            warehouse: Warehouse\n            name: String\n            quantity: Int\n            description: String\n            price: Float\n            unidad_media: String\n            uri: String\n            observers: Int   \n    }\n";
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: typeDesf,
    resolvers: resolvers_1.resolvers
});
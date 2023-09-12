import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[
        {
          id: 1,
          name: "Sofas",
          description: "Comfortable and stylish sofas for your living room.",
          status: "Active"
        },
        {
          id: 2,
          name: "Dining Tables",
          description: "Elegant dining tables for family gatherings and dinner parties.",
          status: "Active"
        },
        {
          id: 3,
          name: "Beds",
          description: "Cozy and luxurious beds for a good night's sleep.",
          status: "Active"
        },
        {
          id: 4,
          name: "Wardrobes",
          description: "Spacious wardrobes to keep your clothes organized.",
          status: "Active"
        },
        {
          id: 5,
          name: "Coffee Tables",
          description: "Stylish coffee tables for your living room decor.",
          status: "Active"
        },
        {
          id: 6,
          name: "Bookshelves",
          description: "Functional bookshelves for your home library or office.",
          status: "Active"
        },
        {
          id: 7,
          name: "Office Desks",
          description: "Efficient office desks for a productive work environment.",
          status: "Active"
        },
        {
          id: 8,
          name: "Dressers",
          description: "Beautiful dressers for your bedroom storage needs.",
          status: "Active"
        },
        {
          id: 9,
          name: "Chairs",
          description: "Comfortable and stylish chairs for various rooms.",
          status: "Active"
        },
        {
          id: 10,
          name: "Outdoor Furniture",
          description: "Durable and weather-resistant outdoor furniture for your patio or garden.",
          status: "Active"
        },
        {
          id: 11,
          name: "Kids Furniture",
          description: "Adorable and functional furniture for children's rooms.",
          status: "Active"
        },
        {
          id: 12,
          name: "Antique Furniture",
          description: "Vintage and collectible antique furniture pieces for enthusiasts.",
          status: "Inactive"
        },
        {
          id: 13,
          name: "Furniture Accessories",
          description: "Decorative accessories to enhance the look of your furniture.",
          status: "Inactive"
        },
        {
          id: 14,
          name: "Modular Furniture",
          description: "Flexible and customizable modular furniture for modern living spaces.",
          status: "Inactive"
        },
      ],
    storeProducts:[
        {
          id: 1,
          name: "Elegant Leather Chair",
          price: 199.99,
          skuid: "CH001",
          status: "Active",
          category: "Living Room",
          description: "A luxurious leather chair that adds elegance to your living room decor."
        },
        {
          id: 2,
          name: "Modern Office Chair",
          price: 149.99,
          skuid: "CH002",
          status: "Active",
          category: "Office",
          description: "A sleek and comfortable office chair designed for modern workplaces."
        },
        {
          id: 3,
          name: "Vintage Wooden Chair",
          price: 129.99,
          skuid: "CH003",
          status: "Active",
          category: "Dining Room",
          description: "A charming wooden chair with a vintage look, perfect for your dining area."
        },
        {
          id: 4,
          name: "Outdoor Patio Chair",
          price: 79.99,
          skuid: "CH004",
          status: "Active",
          category: "Outdoor",
          description: "A durable and stylish chair for your outdoor patio or garden."
        },
        {
          id: 5,
          name: "Kids' Cartoon Chair",
          price: 49.99,
          skuid: "CH005",
          status: "Active",
          category: "Kids",
          description: "A fun and colorful chair featuring beloved cartoon characters for kids."
        },
        {
          id: 6,
          name: "Executive High-Back Chair",
          price: 249.99,
          skuid: "CH006",
          status: "Active",
          category: "Office",
          description: "A high-back executive chair designed for comfort and professionalism."
        },
        {
          id: 7,
          name: "Minimalist Dining Chair",
          price: 109.99,
          skuid: "CH007",
          status: "Active",
          category: "Dining Room",
          description: "A minimalistic dining chair that complements various dining table styles."
        },
        {
          id: 8,
          name: "Reclining Lounge Chair",
          price: 179.99,
          skuid: "CH008",
          status: "Active",
          category: "Living Room",
          description: "A comfortable lounge chair with a reclining feature for relaxation."
        },
        {
          id: 9,
          name: "Mesh Back Task Chair",
          price: 89.99,
          skuid: "CH009",
          status: "Active",
          category: "Office",
          description: "A breathable mesh back task chair for ergonomic support during work."
        },
        {
          id: 10,
          name: "Rustic Wooden Rocking Chair",
          price: 159.99,
          skuid: "CH010",
          status: "Active",
          category: "Outdoor",
          description: "A classic wooden rocking chair for enjoying outdoor relaxation."
        },
        {
          id: 11,
          name: "Adjustable Gaming Chair",
          price: 199.99,
          skuid: "CH011",
          status: "Active",
          category: "Gaming",
          description: "An adjustable gaming chair designed for extended gaming sessions."
        },
        {
          id: 12,
          name: "Antique Armchair",
          price: 219.99,
          skuid: "CH012",
          status: "Inactive",
          category: "Living Room",
          description: "A vintage-style armchair that adds a touch of nostalgia to your living space."
        },
        {
          id: 13,
          name: "Industrial Bar Stool",
          price: 79.99,
          skuid: "CH013",
          status: "Inactive",
          category: "Kitchen",
          description: "A sturdy industrial-style bar stool for your kitchen or bar area."
        },
        {
          id: 14,
          name: "Folding Beach Chair",
          price: 49.99,
          skuid: "CH014",
          status: "Inactive",
          category: "Outdoor",
          description: "A portable and foldable beach chair for your seaside adventures."
        },
        {
          id: 15,
          name: "Ergonomic Task Chair",
          price: 129.99,
          skuid: "CH015",
          status: "Inactive",
          category: "Office",
          description: "An ergonomic task chair with adjustable features for office comfort."
        },
        {
          id: 16,
          name: "Classic Baroque Chair",
          price: 299.99,
          skuid: "CH016",
          status: "Inactive",
          category: "Dining Room",
          description: "A classic Baroque-style dining chair for a touch of opulence in your dining area."
        },
        {
          id: 17,
          name: "Bean Bag Chair",
          price: 69.99,
          skuid: "CH017",
          status: "Processing",
          category: "Living Room",
          description: "A cozy and versatile bean bag chair for relaxed seating in the living room."
        },
        {
          id: 18,
          name: "Swivel Desk Chair",
          price: 119.99,
          skuid: "CH018",
          status: "Processing",
          category: "Office",
          description: "A swivel desk chair with a modern design for productivity and style."
        },
        {
          id: 19,
          name: "Adirondack Chair",
          price: 149.99,
          skuid: "CH019",
          status: "Scheduled",
          category: "Outdoor",
          description: "A classic Adirondack chair designed for outdoor relaxation and comfort."
        },
        {
          id: 20,
          name: "Kids' High Chair",
          price: 59.99,
          skuid: "CH020",
          status: "Scheduled",
          category: "Kids",
          description: "A child-friendly high chair designed for your little one's comfort during meals."
        },
      ]
}

const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
     // add reducers
     addProducts:(state,action)=>{
        console.log(action.payload)
        state.storeProducts.push(action.payload)
     },
     addCategory:(state,action)=>{
        console.log(action.payload)
        state.categories.push(action.payload)
     },
     deleteProduct:(state,action)=>{
        const productId = action.payload
        console.log(typeof productId)
        const filteredProducts = state.storeProducts.filter(item=>item.id !== productId)
        return {...state,storeProducts: filteredProducts,};
     },
     deleteCategory:(state,action)=>{
        const categoryId = action.payload
        console.log(categoryId)
        const filterCatgeory = state.categories.filter(item=>item.id !== categoryId)
        return {...state,categories:filterCatgeory}
     },
     updateCategory:(state,action)=>{
        const updatedProductValues = action.payload
        const findExistingCategoryToUpdate = state.categories.findIndex(ctgy=>ctgy.id === updatedProductValues.id)
        console.log(findExistingCategoryToUpdate)
        if(findExistingCategoryToUpdate !== -1){
        state.categories[findExistingCategoryToUpdate] = updatedProductValues
        }
    },
   }
})

export const {addProducts,deleteProduct,addCategory,deleteCategory,updateCategory} = productsSlice.actions
export default productsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[
        {
            "type": "Terracotta Pot",
            "description": "A classic clay pot known for its porous nature, ideal for many types of plants."
        },
        {
            "type": "Ceramic Planter",
            "description": "Elegant and often decorative, ceramic pots come in various colors and designs."
        },
        {
            "type": "Concrete Planter",
            "description": "Sturdy and durable, concrete pots are great for outdoor use and modern aesthetics."
        },
        {
            "type": "Plastic Pot",
            "description": "Lightweight and affordable, plastic pots are available in various sizes and colors."
        },
        {
            "type": "Wooden Planter",
            "description": "Rustic and charming, wooden planters are often used for herbs and flowers."
        },
        {
            "type": "Metal Planter",
            "description": "Sleek and contemporary, metal pots are suitable for both indoor and outdoor settings."
        },
        {
            "type": "Ceramic Glazed Pot",
            "description": "Ceramic pots with a glossy glaze for a stylish and colorful appearance."
        },
        {
            "type": "Hanging Basket",
            "description": "Typically made of wire or woven materials, used for suspended plants."
        },
        {
            "type": "Fiberglass Planter",
            "description": "Lightweight and versatile, fiberglass pots come in various shapes and sizes."
        },
        {
            "type": "Stone Planter",
            "description": "Natural stone pots add a touch of elegance and are often used for larger plants."
        }
    ],
    storeProducts:[
        {
            "name": "Spider Plant",
            "id":1232131312,
            "description": "A popular indoor plant known for its long, arching green and white striped leaves.",
            "price": 19.99,
            "colors_available": ["Green", "Variegated"]
        },
        {
            "name": "Snake Plant",
            "id":1213212122,
            "description": "A hardy plant with tall, sword-shaped leaves that thrive in low light conditions.",
            "price": 24.99,
            "colors_available": ["Green"]
        },
        {
            "name": "Peace Lily",
            "id":122121312,
            "description": "An elegant plant with dark green leaves and white, lily-like flowers.",
            "price": 29.99,
            "colors_available": ["Green"]
        },
        {
            "name": "Fiddle Leaf Fig",
            "id":12132112,
            "description": "A popular choice for its large, violin-shaped leaves and striking appearance.",
            "price": 49.99,
            "colors_available": ["Green"]
        },
        {
            "name": "Monstera",
            "id":12132312,
            "description": "Known for its unique split leaves, this plant adds a tropical touch to any space.",
            "price": 39.99,
            "colors_available": ["Green"]
        },
        {
            "name": "Aloe Vera",
            "id":121312,
            "description": "A succulent plant valued for its soothing gel, often used for medicinal purposes.",
            "price": 14.99,
            "colors_available": ["Green"]
        },
        {
            "name": "Pothos",
            "id":"4355432",
            "description": "A trailing vine with heart-shaped leaves, perfect for hanging baskets.",
            "price": 17.99,
            "colors_available": ["Green", "Golden"]
        },
        {
            "name": "ZZ Plant",
            "id":12132132312,
            "description": "A low-maintenance plant with glossy, dark green leaves.",
            "price": 22.99,
            "colors_available": ["Green"]
        },
        {
            "name": "Jade Plant",
            "id":1213122312,
            "description": "A succulent with thick, fleshy leaves and a tree-like growth habit.",
            "price": 12.99,
            "colors_available": ["Green"]
        },
        {
            "name": "Rubber Plant",
            "id":12132132112,
            "description": "Known for its large, glossy leaves and air-purifying qualities.",
            "price": 27.99,
            "colors_available": ["Green"]
        }
    ],
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
     }
    }
})

export const {addProducts,deleteProduct,addCategory} = productsSlice.actions
export default productsSlice.reducer
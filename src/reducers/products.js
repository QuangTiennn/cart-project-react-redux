var initialState = [
    {
        id : 1,
        name : 'IP7',
        img : 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x460.png',
        price : 500,
        description : 'dien thoai IP7',
        inventory : 10,
        rating : 3
    },
    {
        id : 2,
        name : 'IP8',
        img : 'https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg',
        price : 600,
        description : 'dien thoai IP7',
        inventory : 15,
        rating : 4
    },
    {
        id : 3,
        name : 'IP X',
        img : 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
        price : 700,
        description : 'dien thoai IP7',
        inventory : 20,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return[...state];
    }
}

export default products;
var initialState = [
	{
		id : 1,
		name : 'Iphone 8 Plus',
		Image: 'https://viostore.vn/wp-content/uploads/2018/05/apple-iphone-8-plus-single-sim-4g-64gb-gold-14bc51a9-03a0-4404-ad55-9929c0486f5b.jpg',
		description: 'Sản phẩm do apple sản xuất',
		price: 900,
		iventory : 10,
		rating : 4
	},
	{
		id : 2,
		name : 'Iphone 7 Plus',
		Image: 'https://suachuadienthoai247.com/wp-content/uploads/2020/05/iphone-7-plus-32gb-silver.jpg',
		description: 'Sản phẩm do apple sản xuất',
		price: 700,
		iventory : 10,
		rating : 3
	},
	{
		id : 3,
		name : 'Iphone 6 Plus',
		Image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2020/1/7/637139916609041371_6s-pl-vang-1.png',
		description: 'Sản phẩm do apple sản xuất',
		price: 500,
		iventory : 5,
		rating : 5
	}
]

const products = (state = initialState, action) =>{
	switch(action.type)
	{
		default:
			return [...state]
	}
}


export default products

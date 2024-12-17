"use client"

// ? nexjt js如過用navigation router 去 SPA 切換頁面在layout的stroe不會被初始化, 故此需要如下操作來初始化特定路線的store資料(如果需要的話)

// import { useRef } from 'react'
// import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
// import {
//   initializeProduct,
//   setProductName,
//   Product,
// } from '../lib/features/product/productSlice'

// export default function ProductName({ product }: { product: Product }) {
//   // Initialize the store with the product information
//   const store = useAppStore()
//   const initialized = useRef(false)
//   if (!initialized.current) {
//     store.dispatch(initializeProduct(product))
//     initialized.current = true
//   }
//   const name = useAppSelector((state) => state.product.name)
//   const dispatch = useAppDispatch()

//   return (
//     <input
//       value={name}
//       onChange={(e) => dispatch(setProductName(e.target.value))}
//     />
//   )
// }

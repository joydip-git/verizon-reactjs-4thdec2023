import { useState } from "react"

type InputStateType = {
    name: string,
    value: string,
    id: string
}
export const useForm = () => {

    return useState<InputStateType[]>(
        [
            { name: 'productId', id: 'txtId', value: '0' },
            { name: 'productName', id: 'txtName', value: '' },
            { name: 'productCode', id: 'txtCode', value: '' },
            { name: 'description', id: 'txtDesc', value: '' },
            { name: 'releaseDate', id: 'txtDate', value: new Date().toString() },
            { name: 'price', id: 'txtPrice', value: '0' },
            { name: 'starRating', id: 'txtRating', value: '0' },
            { name: 'imageUrl', id: 'txtImageUrl', value: '' },
        ]
    )
}
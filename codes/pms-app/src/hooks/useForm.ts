import { useState } from "react"

type InputStateType = {
    name: string,
    value: string,
    id: string,
    validationError: string
}
type FormStateType = {
    productId: InputStateType,
    productName: InputStateType,
    productCode: InputStateType,
    description: InputStateType,
    releaseDate: InputStateType,
    imageUrl: InputStateType,
    price: InputStateType,
    starRating: InputStateType
}

export const useForm = () => {

    const [formState, setFormState] = useState<FormStateType>(
        {
            productId: { name: 'productId', id: 'txtId', value: '0', validationError: '' },
            productName: { name: 'productName', id: 'txtName', value: '', validationError: '' },
            productCode: { name: 'productCode', id: 'txtCode', value: '', validationError: '' },
            description: { name: 'description', id: 'txtDesc', value: '', validationError: '' },
            releaseDate: { name: 'releaseDate', id: 'txtDate', value: new Date().toString(), validationError: '' },
            price: { name: 'price', id: 'txtPrice', value: '0', validationError: '' },
            starRating: { name: 'starRating', id: 'txtRating', value: '0', validationError: '' },
            imageUrl: { name: 'imageUrl', id: 'txtImageUrl', value: '', validationError: '' },
        }
    )

    const updateForm = (propName: string, propValue: string | number) => {

        setFormState(
            (current) => {


                return {
                    ...current,
                    [propName]: {

                    }
                }
            }
        )
    }
}
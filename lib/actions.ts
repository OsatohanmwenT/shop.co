"use server"

export const addToCart = async (_id: string) => {
    try {
        const product = {
            product: {
                _type: "reference",
                _ref: _id
            }
        }
    }
    const result = await writeClient
}
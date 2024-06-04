import { describe, it, expect, vi, beforeEach,to } from "vitest";
import { add, getAverage } from '../math'

// Example of mocking a function
// const mockFn = vi.fn();
// mockFn.mockReturnValue(42);
// expect(mockFn().toBe(42));

describe("add", () => {
    it("should add two numbers", () => {
        expect(add(2, 2)).toBe(4)
    });

    it("should handle negative numbers", () => {
        expect(add(-4, 2)).toBe(-2)
    })

})


describe("getAverage", () => {
    it("should return average value of flat array", () => {
        expect(getAverage([1, 2, 3, 4, 5])).toBe(3)
    })
})

//This line replaces the global fetch function with a mock function created by Vitest's 
global.fetch = vi.fn()

describe("fetchData", () => {
    beforeEach(() => {
        fetch.mockClear();
        //clear previous mock calls and results
    })

    const mockData = {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 7.17,
        "rating": 4.94,
        "stock": 5,
        "tags": [
            "beauty",
            "mascara"
        ],
        "brand": "Essence",
        "sku": "RCH45Q1A",
        "weight": 2,
        "dimensions": {
            "width": 23.17,
            "height": 14.43,
            "depth": 28.01
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "Low Stock",
        "reviews": [
            {
                "rating": 2,
                "comment": "Very unhappy with my purchase!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "John Doe",
                "reviewerEmail": "john.doe@x.dummyjson.com"
            },
            {
                "rating": 2,
                "comment": "Not as described!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "Nolan Gonzalez",
                "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Very satisfied!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "Scarlett Wright",
                "reviewerEmail": "scarlett.wright@x.dummyjson.com"
            }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 24,
        "meta": {
            "createdAt": "2024-05-23T08:56:21.618Z",
            "updatedAt": "2024-05-23T08:56:21.618Z",
            "barcode": "9164035109868",
            "qrCode": "https://dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    };

    it("should fetdh data succefully", async () => {

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        })

        const data = await fetchData('https://dummyjson.com/products/1')
        expect(data).toEqual(mockData)
    })

    it("should throw a error when network response is not ok", async ()=>{
        fetch.mockResolvedValueOnce({
            ok:false,
        })

     await expect(fetchData("https://dummyjson.com/products/1")).rejects.toThrow("Network Error");

     
        
    })
});



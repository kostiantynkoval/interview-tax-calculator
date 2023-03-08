import {Response} from "./types";

const URL = "http://localhost:5005/tax-calculator/brackets"
export const fetchTaxRates = async (year?: string): Promise<Response> => {
    try {
        const response = await fetch(`${URL}${year ? `/${year}` : ''}`)
        return response.json()
    } catch (e) {
        throw e
    }
}
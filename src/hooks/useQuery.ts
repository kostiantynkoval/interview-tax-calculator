import {useEffect, useState } from "react";
import {fetchTaxRates} from "../api/networkManager";
import { Response, ErrorCode, SuccessResponseObject, ErrorResponseElement} from "../api/types";

type DataStateObj = {
    data: SuccessResponseObject[] | null;
    error: ErrorResponseElement | null;
    isLoading: boolean
}

const ERROR_MESSAGE = "Unknown Error. Please try again later";

export const useQuery = () => {
    const [dataObj, setDataObj] = useState<DataStateObj>({data: null, error: null, isLoading: false});

    const fetchApi = async (year?: string) => {
        setDataObj({...dataObj, error: null, isLoading: true})
        try {
            // TODO: Figure out why Union Type does not work here
            const data: Response & any = await fetchTaxRates(year)
            if (!data.tax_brackets) {
                setDataObj({data: null, isLoading: false, error: data.errors[0]})
            } else {
                setDataObj({data: data.tax_brackets, isLoading: false, error: null})
            }

        } catch (e) {
            setDataObj({data: null, isLoading: false, error: { code: ErrorCode.INTERNAL_SERVER_ERROR,
                    field: '',
                    message: ERROR_MESSAGE}})
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return  {...dataObj, reFetch: fetchApi};
}
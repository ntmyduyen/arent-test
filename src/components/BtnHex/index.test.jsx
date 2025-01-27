import { renderWithProviders, userEvent } from "@utils/test-utils"
import BtnHex from "."

describe('Button Hex', () => { 
    it("should be render icon and label",  () => {
        const Icon = () => <>text</>
        const { queryByText } = renderWithProviders(<BtnHex
            title="button hex"
            type="type"
            Icon={Icon}
        />)
        const title = queryByText(/button hex/)
        expect(title).toBeInTheDocument()
        const icon = queryByText(/text/)
        expect(icon).toBeInTheDocument()
    })
    it("should be call getMealHistoryByType", async () => {
        const Icon = () => <>text</>
        const type = "MORNING"
        const { queryByTestId, store } = renderWithProviders(<BtnHex
            title="button hex"
            type={type}
            Icon={Icon}
        />)
        await userEvent.click(queryByTestId("btn-hex"))
        // console.log(store.getState().topPage)
        const { mealType, mealHistory } = store.getState().topPage
        expect(mealType).toEqual(type)
        expect(mealHistory.length).not.toEqual(0)
    })
})
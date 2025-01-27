import { renderWithProviders } from "@utils/test-utils"
import BtnMoveToEntry from "."

describe("BtnMoveToEntry", () => {
    it('should be match with snapshot', () => {
        const { container } = renderWithProviders(<BtnMoveToEntry />)
        expect(container).toMatchSnapshot()
    })
})
import { renderWithProviders } from "@utils/test-utils"
import BtnLoadMore from "."

describe('BtnLoadMore', () => { 
    it('should be match with snapshot', () => {
        const { container } = renderWithProviders(<BtnLoadMore />)
        expect(container).toMatchSnapshot()
    })
})
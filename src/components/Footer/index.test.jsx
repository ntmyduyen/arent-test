import { renderWithProviders } from "@utils/test-utils"
import Footer from "."

describe('Footer', () => { 
    it('should be match with snapshot', () => {
        const { container } = renderWithProviders(<Footer />)
        expect(container).toMatchSnapshot()
    })
})
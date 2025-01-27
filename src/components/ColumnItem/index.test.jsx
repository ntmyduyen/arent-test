import { renderWithProviders } from "@utils/test-utils"
import ColumnItem from "."

describe('ColumnItem', () => { 
    it('should be match with snapshot', () => {
        const { container } = renderWithProviders(<ColumnItem
            url="test-url"
            dateTime="DD/MM/YYYY HH:mm"
            title="title"
            tags={["tag1", "tag2"]}
        />)
        expect(container).toMatchSnapshot()
    })
})
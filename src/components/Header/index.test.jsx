import { renderWithProviders, screen, userEvent, waitFor } from "@utils/test-utils"
import Header from "."
import routes from "@data/routes"
import { Route, Routes } from "react-router-dom"
import menu from "@data/menu"

describe('Header', () => { 
    it('should be match with snapshot', () => {
        const { container } = renderWithProviders(<Header />)
        expect(container).toMatchSnapshot()
    })

    it('should go to top page when click logo', async () => {
        const { queryByTestId } = renderWithProviders(<>
            <Header />
            <Routes>
                <Route path="/" element={<div>home page</div>} />
                <Route path={routes.topPage} element={<div>top page</div>} />
            </Routes>
        </>)
        const logoLinkEle = queryByTestId('logo-page')
        expect(logoLinkEle.href).toContain(routes.topPage)
        userEvent.click(logoLinkEle)
        await waitFor(() => {
            expect(screen.getByText(/top page/)).toBeInTheDocument()
        })
    })

    it('should render desktop menu', async () => {
        const { getByText } = renderWithProviders(<Header />)
        await waitFor(() => {
            menu.forEach(({ name }) => {
                expect(getByText(name)).toBeInTheDocument()
            })
        })
    })

    it('should redirect to my record page', async () => {
        const { getByText } = renderWithProviders(<>
            <Header />
            <Routes>
                <Route path="/" element={<div>home page</div>} />
                <Route path={routes.myRecord} element={<div>my record page</div>} />
            </Routes>
        </>)
        await waitFor(() => {
            menu.forEach(({ name }) => {
                expect(getByText(name)).toBeInTheDocument()
            })
        })
        const myRecordMenuEle = getByText(/自分の記録/)
        userEvent.click(myRecordMenuEle.parentNode)
        await waitFor(() => {
            expect(getByText(/my record page/)).toBeInTheDocument()
        })
    })

    it('should render menu mobile', async () => {
        const { getByTestId } = renderWithProviders(<Header />)
        await waitFor(() => {
            expect(getByTestId("menu-mobile")).toBeInTheDocument()
        })
    })

    it('should render list of item menu mobile', async () => {
        const { getByTestId } = renderWithProviders(<Header />)
        await waitFor(() => {
            expect(getByTestId("menu-mobile")).toBeInTheDocument()
        })

        const btnHamburger = getByTestId("btn-hamburger")
        userEvent.click(btnHamburger)
        await waitFor(() => {
            expect(getByTestId("menu-mobile_list-menu")).toBeInTheDocument()
        })
    })

    it('should unmount list of item menu mobile', async () => {
        const { getByTestId, queryByTestId } = renderWithProviders(<Header />)
        await waitFor(() => {
            expect(getByTestId("menu-mobile")).toBeInTheDocument()
        })

        const btnHamburger = getByTestId("btn-hamburger")
        userEvent.click(btnHamburger)
        await waitFor(() => {
            expect(getByTestId("menu-mobile_list-menu")).toBeInTheDocument()
        })
        userEvent.click(btnHamburger)
        await waitFor(() => {
            expect(queryByTestId("menu-mobile_list-menu")).toBeNull()
        })
    })

    it('should unmount list of item menu mobile when click outside', async () => {
        const { getByTestId, queryByTestId } = renderWithProviders(<Header />)
        await waitFor(() => {
            expect(getByTestId("menu-mobile")).toBeInTheDocument()
        })

        const btnHamburger = getByTestId("btn-hamburger")
        userEvent.click(btnHamburger)
        await waitFor(() => {
            expect(getByTestId("menu-mobile_list-menu")).toBeInTheDocument()
        })
        userEvent.click(document.body)
        await waitFor(() => {
            expect(queryByTestId("menu-mobile_list-menu")).toBeNull()
        })
    })


    it('should unmount list of item menu mobile when click item menu', async () => {
        const { getByTestId, queryByTestId, getByText } = renderWithProviders(<Header />)
        await waitFor(() => {
            expect(getByTestId("menu-mobile")).toBeInTheDocument()
        })

        const btnHamburger = getByTestId("btn-hamburger")
        userEvent.click(btnHamburger)
        await waitFor(() => {
            expect(getByTestId("menu-mobile_list-menu")).toBeInTheDocument()
        })
        
        const item = getByText(/コラム一覧/)
        userEvent.click(item)
        await waitFor(() => {
            expect(queryByTestId("menu-mobile_list-menu")).toBeNull()
        })
    })

    it('should unmount list of item menu mobile and go to column page when click column page item menu', async () => {
        const { getByTestId, queryByTestId, getByText } = renderWithProviders(<>
            <Header />
            <Routes>
                <Route path="/" element={<div>home page</div>} />
                <Route path={routes.column} element={<div>column page</div>} />
            </Routes>
        </>)
        await waitFor(() => {
            expect(getByTestId("menu-mobile")).toBeInTheDocument()
        })

        const btnHamburger = getByTestId("btn-hamburger")
        userEvent.click(btnHamburger)
        await waitFor(() => {
            expect(getByTestId("menu-mobile_list-menu")).toBeInTheDocument()
        })
        
        const item = getByText(/コラム一覧/)
        userEvent.click(item)
        await waitFor(() => {
            expect(queryByTestId("menu-mobile_list-menu")).toBeNull()
        })
        expect(getByText(/column page/)).toBeInTheDocument()
    })
})
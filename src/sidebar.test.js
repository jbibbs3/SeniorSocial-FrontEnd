import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar"

describe("Sidebar Navigation", () => {
    test('renders react link', () => {

        render(<MemoryRouter>
            <SideBar />
            </MemoryRouter>
            );

        const iconElement = screen.getByText(/Profile/);
        screen.debug()

        expect(iconElement).toBeInTheDocument()


    })

})
import { render, screen, act, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { HungerDisplay } from "../components/HungerDisplay";
import { usePets } from "../services/queries/petQueries";
import { useUpdateHunger } from "../services/mutations/petmutations";
import { useAuth } from "../context/AuthContext";

// Mocking modules
jest.mock("../services/queries/petQueries");
jest.mock("../services/mutations/petmutations");
jest.mock("../context/AuthContext");

describe("HungerDisplay", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        cleanup();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("renders correctly with the initial HungerValue", () => {
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };

        // Mock implementations
        (useAuth as jest.Mock).mockReturnValue({ user: mockUser });
        (usePets as jest.Mock).mockReturnValue({ data: [mockPet] });

        render(<HungerDisplay/>)

        //now we're gonna check if they're being displayed
        expect(screen.getByText("70")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "meat");
    });

    it("decreases hunger every 2 seconds", async () =>{
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };
        const mockUpdateHunger = jest.fn();

        (useAuth as jest.Mock).mockReturnValue({ user: mockUser });
        (usePets as jest.Mock).mockReturnValue({ data: [mockPet] });
        (useUpdateHunger as jest.Mock).mockReturnValue({ mutateAsync: mockUpdateHunger, });

        render(<HungerDisplay />);

        act(() => {
            jest.advanceTimersByTime(2000); // 2 seconds
          });

        expect(mockUpdateHunger).toHaveBeenCalledWith({
            player_uuid: "mock_user",
            hunger_status: 65, // 70 - 5
        });
    });

    it("clears the interval on unmount", () => {
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };
        
        (useAuth as jest.Mock).mockReturnValue({ user: mockUser });
        (usePets as jest.Mock).mockReturnValue({ data: [mockPet] });
    
        const { unmount } = render(<HungerDisplay />);
    
        unmount();
        act(() => {
          jest.advanceTimersByTime(2000);
        });
    
        // No update calls after unmount
        expect(useUpdateHunger().mutateAsync).not.toHaveBeenCalled();
      });

})
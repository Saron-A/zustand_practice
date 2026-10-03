import { create } from "zustand";

// creating a fake user until we get the real data from backend

// initially any user is null
// verification is a backend work, we only check that it can accept login inputs and route to a dashboard

//Protected route - restrict who can access routes - gn make sure a user is logged in to access certain routes

// we wrap the routes we want to protect by having the component where we declared the protected route logic as a parent route and the route to be protected as a child route

const useAuthStore = create((set) => ({
  user: null,

  login: (email) => {
    set({ user: { id: 1, name: "DemoUser", email } });
  },

  logout: () => {
    set({ user: null });
  },
}));

export default useAuthStore;

## Presentation (Screening Task Walkthrough)

### 1) Goal
Build a simple UI that fetches a restaurant list from a provided JSON endpoint and renders each restaurant as a reusable card component.

### 2) High-level Approach
  - Fetch data on initial load
  - Store restaurants + neighborhood in React state
  - Render a list of `RestaurantCard` components
- Kept responsibilities separated:
  - `RestaurantList`: data fetching + list rendering
  - `RestaurantCard`: presentation (name/image/price/tags/link)

### 3) Data Source
Restaurants are fetched from:
- `web_restaurant_list.json` (provided URL)
The response structure is accessed safely with optional chaining:
- `data?.body?.neighborhood`
- `data?.body?.restaurants`

### 4) Component Flow
1. `useEffect` runs once on mount
2. `fetch()` retrieves JSON
3. `setNeighborhood(...)` and `setRestaurants(...)`
4. UI updates automatically:
   - shows `{restaurants.length} Restaurants in {neighborhood}`
   - maps restaurants to `<RestaurantCard />`

### 5) Key Implementation Details
- **State**
  - `restaurants`: array of restaurant objects
  - `neighborhood`: string
- **Rendering**
  - Uses `map()` with stable React `key={restaurant.id}`
  - Passes props explicitly: `name`, `imageUrl`, `price`, `tags`, `url`
- **Error handling**
  - Wrapped fetch logic in `try/catch`
  - Logs errors to the console to avoid crashing the UI

### 6) UX Notes
- Displays restaurant count and conditionally appends neighborhood:
  - `"{count} Restaurants in {neighborhood}"`
- If neighborhood is missing, it falls back to just:
  - `"{count} Restaurants"`

### 7) Possible Improvements (if more time)
- Loading state + skeleton UI
- User-facing error message instead of only console logging
- Filters/sort (by price, tag, etc.)

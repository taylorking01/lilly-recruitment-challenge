# Lilly Technical Challenge Documentation

## Approach

I focused on fetching data from the backend and displaying it on the frontend. Using an iterative approach, I debugged issues as they arose and refined my implementation. Postman was used to test API endpoints before integrating them.

## Objectives - Solutions

### **Fetching & Displaying Data**

- Used `fetch()` to retrieve medicine data from the backend.
- Parsed JSON response and dynamically displayed data in `index.html`.
- Styled the UI using CSS for better readability.
- Implemented flexbox for improved layout and responsiveness.
- Enhanced hover effects and typography for a better user experience.
- Stored medicines globally to improve filtering and sorting efficiency.
- Implemented real-time search filtering to dynamically update displayed medicines.

### **Handling Missing/Invalid Data**

- Skipped empty medicine names to prevent blank entries.
- Checked for `null` prices and displayed "Price Not Available" instead.
- Implemented error handling to prevent crashes.
- Applied red styling to unavailable prices for clear distinction.

### **Improving Frontend Design & Responsiveness**

- Fixed disclaimer text overflow on smaller screens.
- Centered "Medicine Tracker" title with better padding.
- Improved spacing and alignment for a consistent style across all screen sizes.
- Adjusted text sizes to ensure readability on different devices.
- Added an interactive sorting feature (A-Z) with a toggle button.
- Ensured sorting applies to both full and filtered medicine lists dynamically.
- Ensured sorting and search bar remain properly aligned on smaller screens.
- Positioned sorting and add buttons to the left while keeping the search bar responsive.

### **Adding a Medicine (Form & Modal)**
- Implemented a modal form for adding medicines.
- Ensured the modal remains hidden by default and only appears when the "+" button is clicked.
- Validated form inputs to prevent empty names or invalid prices.
- Sent a `POST` request to the backend to store the new medicine.
- Handled response updates to immediately refresh the medicine list after creation.
- Fixed CORS-related issues to allow communication between frontend and backend.
- Updated the average price dynamically after adding a new medicine.

## Problems & Solutions

- **Empty Names:** Skipped rendering items with missing names.
- **Null Prices:** Ensured `null` values didn’t cause errors.
- **Execution Stopping on Errors:** Wrapped logic to continue processing valid data.
- **Initial Styling Issues:** Improved responsiveness and alignment using flexbox.
- **Text Overflow:** Adjusted disclaimer box to wrap text properly.
- **Search & Sorting Integration:** Ensured that sorting applies correctly even after filtering results.
- **HTTP Fetch Typo:** Fixed incorrect request URL in `fetch()` to allow medicine creation.

## Evaluation

✅ Successfully fetched and displayed data.
✅ Handled errors to ensure smooth user experience.
✅ Used Postman for API testing.
✅ Improved card styling and layout for better readability.
✅ Enhanced site responsiveness and consistency.
✅ Implemented real-time search filtering and dynamic sorting.
✅ Added a modal form for adding new medicines.  
✅ Fixed backend communication issues (CORS and HTTP requests). 
✅ Implemented dynamic average price updates.


### **Future Improvements**

⏳ Medicine deletion

This challenge reinforced my understanding of **JavaScript, API handling, debugging, and responsive UI design**, while providing a structured approach to frontend-backend integration.

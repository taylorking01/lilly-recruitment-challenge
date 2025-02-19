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

### **Handling Missing/Invalid Data**

- Skipped empty medicine names to prevent blank entries.
- Checked for `null` prices and displayed "Price Not Available" instead.
- Implemented error handling to prevent crashes.
- Applied red styling to unavailable prices for clear distinction.

### **Planned Enhancements**

- Add an HTML form to allow users to submit new medicines via the frontend.
- Improve UI by adding a search bar and a table layout.
- Implement an endpoint to compute and display the average price of medicines.

## Problems & Solutions

- **Empty Names:** Skipped rendering items with missing names.
- **Null Prices:** Ensured `null` values didn’t cause errors.
- **Execution Stopping on Errors:** Wrapped logic to continue processing valid data.
- **Initial Styling Issues:** Improved responsiveness and alignment using flexbox.

## Evaluation

✅ Successfully fetched and displayed data.
✅ Handled errors to ensure smooth user experience.
✅ Used Postman for API testing.
✅ Improved card styling and layout for better readability.

### **Future Improvements**

⏳ Implement a user-friendly form for adding medicines.
⏳ Improve frontend design further with a more interactive UI.
⏳ Add pagination and an average price calculator.

This challenge reinforced my understanding of **JavaScript, API handling, debugging, and responsive UI design**, while providing a structured approach to frontend-backend integration.


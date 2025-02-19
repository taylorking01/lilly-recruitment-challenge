# Lilly Technical Challenge Documentation

## Approach

I focused on fetching data from the backend and displaying it on the frontend. Using an iterative approach, I debugged issues as they arose and refined my implementation. Postman was used to test API endpoints before integrating them.

## Objectives - Solutions

### **Fetching & Displaying Data**

- Used `fetch()` to retrieve medicine data from the backend.
- Parsed JSON response and dynamically displayed data in `index.html`.
- Styled the UI using CSS for better readability.

### **Handling Missing/Invalid Data**

- Skipped empty medicine names to prevent blank entries.
- Checked for `null` prices and displayed "Price Not Available" instead.
- Implemented error handling to prevent crashes.

### **Planned Enhancements**

- Add an HTML form to allow users to submit new medicines via the frontend.
- Improve UI by adding a search bar and a table layout.
- Implement an endpoint to compute and display the average price of medicines.

## Problems & Solutions

- **Empty Names:** Skipped rendering items with missing names.
- **Null Prices:** Ensured `null` values didn’t cause errors.
- **Execution Stopping on Errors:** Wrapped logic to continue processing valid data.

## Evaluation

✅ Successfully fetched and displayed data.
✅ Handled errors to ensure smooth user experience.
✅ Used Postman for API testing.

### **Future Improvements**

⏳ Enhance user input validation.
⏳ Improve frontend design with better alignment and styling.
⏳ Add pagination and an average price calculator.

This challenge reinforced my understanding of **JavaScript, API handling, and debugging** while providing a structured approach to **frontend-backend integration**.


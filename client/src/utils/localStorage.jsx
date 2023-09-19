// // Function to set an item in localStorage
// export const setItem = (key, value) => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error('Error storing data in localStorage:', error);
//     }
//   };
  
//   // Function to get an item from localStorage
//   export const getItem = (key) => {
//     try {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : null;
//     } catch (error) {
//       console.error('Error retrieving data from localStorage:', error);
//       return null;
//     }
//   };
  
//   // Function to remove an item from localStorage
//   export const removeItem = (key) => {
//     try {
//       localStorage.removeItem(key);
//     } catch (error) {
//       console.error('Error removing data from localStorage:', error);
//     }
//   };
  
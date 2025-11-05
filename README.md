# React Error Boundary Demo

This project demonstrates practical usage of **React Error Boundaries** to gracefully handle runtime UI failures. The application fetches data from an external API, renders it within a page, and uses an Error Boundary to manage unexpected rendering errors by displaying a fallback interface and allowing controlled recovery via a "Retry" mechanism.

---

## Live Demonstrations


| Normal Functioning Application |
https://error-boundary-before-crash.netlify.app/
The application fetches valid API data and renders without errors. 
| Application After Forced Crash| 
https://error-boundary-after-crash.netlify.app/
The API endpoint is intentionally broken to trigger a UI crash caught by the Error Boundary. |

---

## Features

- Built using **Vite + React**
- Client-side routing via **React Router**
- UI styled with **Tailwind CSS**
- Real-world API integration:
   https://jsonplaceholder.typicode.com/posts

  - Error detection and fallback UI using a custom **Error Boundary**

---

## How the Error Boundary Works

### Normal Operation
1. User navigates to the **Posts** page.
2. The component fetches and displays post data from the API.
3. UI renders successfully.

### Error State (Simulated Crash)
If the API URL is intentionally modified to an invalid endpoint:
```js
*************************************************************************
Outputs before and after Crashes:
Working App:
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/4ddda5a5-32e1-47c6-bde3-24bea8df23e8" />
Fall Back Ui after Crash:
<img width="1918" height="862" alt="image" src="https://github.com/user-attachments/assets/1ce4a851-f95f-4f24-bdc9-27df892ff597" />



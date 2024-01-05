# Calculator App

This is a simple calculator web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The application stores the result in the browser's `localStorage`, ensuring that the result is preserved even if the page is reloaded or closed.

## Features

- **Basic Operations:** Addition, subtraction, multiplication, and division.
- **LocalStorage:** Stores the result locally to prevent loss on page reload.
- **Responsive Design:** Designed to work across different screen sizes.

## Usage

To use the calculator:

1. Clone the repository: `git clone https://github.com/dattu9133/Calculator.git`
2. Open `index.html` in your preferred web browser.

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

The calculator app uses HTML for the structure, CSS for styling, and JavaScript for functionality. The arithmetic operations are performed using JavaScript functions. The code has been updated to avoid using `eval` for calculations, which improves security and reduces the risk of unexpected behavior. Additionally, handling of floating-point numbers has been improved to address potential precision issues.Javascript considers all numeric values as `number` data type, this may cause problem while the floating numbers multiplication and division. I kind of overcomed it in this, feel free to see `script` tag in `index.html`.
for it.

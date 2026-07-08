Topic 2 — HTML Boilerplate

Understand every line:

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>

</body>
</html>

Know why every line exists, not just what it is.

Interview Questions
Explain the HTML boilerplate.
What is <!DOCTYPE html>?
Why is <html lang="en"> used?
Why do we use <head>?
Difference between <head> and <body>?
What is <meta charset="UTF-8">?
Why do we use the viewport meta tag?
What is the <title> tag?
Follow-up
What happens if we remove <!DOCTYPE html>?
What happens if we remove the viewport tag?
Why use UTF-8?
Can we write two <head> tags?
Can we write two <body> tags?




Perfect! Ye **Top 10 most asked HTML interview topic** hai. Freshers se almost har interview me HTML Boilerplate explain karne ko bola jata hai.

Main tumhe **exact interview me bolne wale answers** de raha hoon—simple English, natural, aur confidence ke saath.

---

# HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

Interviewer kabhi bhi bol sakta hai:

> **"Can you explain every line of this code?"**

Tum aise explain karna👇

---

# 1. `<!DOCTYPE html>`

### 🎤 Interview Answer

> `<!DOCTYPE html>` tells the browser that this document is an HTML5 document. It helps the browser render the webpage in standards mode. It is not an HTML tag; it is a declaration, and we always write it at the top of the HTML file.

---

### Follow-up

### Is it an HTML tag?

🎤

> No. It is a declaration, not an HTML tag.

---

### Why do we write it at the top?

🎤

> Because the browser reads it first to know which HTML version it should use while rendering the page.

---

# 2. `<html lang="en">`

### 🎤 Interview Answer

> The `<html>` tag is the root element of an HTML document. All other HTML elements are written inside it. The `lang="en"` attribute tells the browser and screen readers that the language of the webpage is English.

---

### Follow-up

### Why do we use `lang="en"`?

🎤

> It improves accessibility because screen readers know how to pronounce the content correctly. It also helps search engines understand the language of the webpage.

---

### Can we write `lang="hi"`?

🎤

> Yes. If the webpage is in Hindi, we can use `lang="hi"`. We should always use the language that matches the page content.

---

# 3. `<head>`

### 🎤 Interview Answer

> The `<head>` section contains information about the webpage that is mainly used by the browser and search engines. It includes the title, meta tags, CSS links, and JavaScript files. The content inside the head is not displayed on the webpage.

---

### Follow-up

### Can users see the head section?

🎤

> No. Users only see the content inside the body.

---

# 4. `<meta charset="UTF-8">`

### 🎤 Interview Answer

> This tag tells the browser to use UTF-8 character encoding. UTF-8 supports most languages and special characters, so the browser displays text correctly.

---

### Follow-up

### Why do we use UTF-8?

🎤

> Because it supports almost all languages and symbols, preventing text from appearing as unreadable or incorrect characters.

---

### Example

Without UTF-8

```
à¤¹à¤¿à¤‚à¤¦à¥€
```

With UTF-8

```
हिन्दी
```

---

# 5. `<meta name="viewport"...>`

### 🎤 Interview Answer

> The viewport meta tag makes the webpage responsive. It tells the browser to match the page width to the device width and set the initial zoom level to 1. This ensures the webpage displays properly on mobile devices.

---

### Explain Every Part

```html
content="width=device-width, initial-scale=1.0"
```

`width=device-width`

🎤

> It sets the width of the webpage equal to the width of the user's device.

---

`initial-scale=1.0`

🎤

> It sets the initial zoom level to 100%, so the webpage is displayed at its normal size.

---

# 6. `<title>`

### 🎤 Interview Answer

> The `<title>` tag defines the title of the webpage. It appears on the browser tab and is also used by search engines in search results.

---

### Follow-up

### Where is the title displayed?

🎤

> It appears on the browser tab, not inside the webpage.

---

# 7. `<body>`

### 🎤 Interview Answer

> The `<body>` tag contains all the content that is visible to the user, such as headings, paragraphs, images, buttons, links, forms, and tables.

---

### Follow-up

### Can users see the body?

🎤

> Yes. Everything inside the body is visible to users.

---

# Interview Questions

---

# Explain the HTML Boilerplate

### 🎤 Interview Answer

> The HTML boilerplate is the basic structure of every HTML document.
>
> `<!DOCTYPE html>` declares the document as HTML5.
>
> `<html>` is the root element.
>
> `<head>` contains metadata like the title, meta tags, CSS, and JavaScript.
>
> `<body>` contains all the visible content shown to the user.

---

# What is `<!DOCTYPE html>`?

🎤

> It is a declaration that tells the browser to use HTML5 and render the page in standards mode.

---

# Why is `<html lang="en">` used?

🎤

> It specifies that the webpage language is English. This improves accessibility and helps search engines understand the language.

---

# Why do we use `<head>`?

🎤

> We use the head section to store metadata such as the title, meta tags, CSS links, and JavaScript files. This information is mainly for browsers and search engines.

---

# Difference between `<head>` and `<body>`

🎤

> The head contains metadata and is not visible to users, whereas the body contains all the visible content shown on the webpage.

---

# What is `<meta charset="UTF-8">`?

🎤

> It tells the browser to use UTF-8 encoding so that text and special characters are displayed correctly.

---

# Why do we use the viewport meta tag?

🎤

> It makes the webpage responsive by matching the page width to the device width and setting the initial zoom level to 100%.

---

# What is the `<title>` tag?

🎤

> It defines the title displayed on the browser tab and in search engine results.

---

# Follow-up Questions

---

# What happens if we remove `<!DOCTYPE html>`?

🎤 **Interview Answer**

> If we remove it, the browser may enter **Quirks Mode**, where it uses older rendering behavior. This can lead to layout and compatibility issues.

---

# What happens if we remove the viewport tag?

🎤 **Interview Answer**

> On mobile devices, the webpage may not scale correctly. It can appear zoomed out or too wide, making it difficult to use.

---

# Why use UTF-8?

🎤 **Interview Answer**

> UTF-8 supports almost all languages and special characters, ensuring that text is displayed correctly across different devices and browsers.

---

# Can we write two `<head>` tags?

🎤 **Interview Answer**

> No. An HTML document should have only one `<head>` element. Having multiple head tags makes the HTML invalid.

---

# Can we write two `<body>` tags?

🎤 **Interview Answer**

> No. An HTML document should contain only one `<body>` element because it represents the visible content of the webpage.

---

# ⭐ Most Asked Practical Question

### **Interviewer:** "Write the HTML5 boilerplate."

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>

</body>
</html>
```

---

# ⭐ 30-Second Revision

| Question          | One-Line Answer                                        |
| ----------------- | ------------------------------------------------------ |
| `<!DOCTYPE html>` | Declares the document as HTML5.                        |
| `<html>`          | Root element of the HTML document.                     |
| `lang="en"`       | Specifies the page language for accessibility and SEO. |
| `<head>`          | Contains metadata, CSS, JavaScript, and the title.     |
| `<body>`          | Contains all visible webpage content.                  |
| `charset="UTF-8"` | Supports almost all languages and special characters.  |
| `viewport`        | Makes the webpage responsive on different devices.     |
| `<title>`         | Displays the page title on the browser tab.            |

---

# 💡 Bonus Interview Tip (Very Common)

If the interviewer asks:

> **"Which tags are mandatory in an HTML document?"**

You can answer:

> "A basic HTML document should include `<!DOCTYPE html>`, the `<html>` element, a `<head>` section with a `<title>`, and a `<body>` section. These form the standard structure of an HTML page."

This answer sounds natural and shows that you understand **why each line exists**, not just what it does.


Interviewer: "How would you write a main heading, a paragraph, emphasize one word, and write H₂O?"
<h1>HTML Basics</h1>

<p>
HTML is <strong>very important</strong> for web development.
</p>

<p>H<sub>2</sub>O</p>




Topic 3 — Basic HTML Tags

Know these well:

<h1> to <h6>
<p>
<br>
<hr>
<pre>
<b>
<strong>
<i>
<em>
<u>
<mark>
<small>
<sup>
<sub>
Interview Questions
Difference between <b> and <strong>?
Difference between <i> and <em>?
What is <pre>?
Difference between <br> and <hr>?
Which heading should be used for the main title?
Follow-up
Which is better for SEO: <strong> or <b>?
Why should we avoid multiple <h1> tags?
Can we style <strong> using CSS?










<!-- ........................................ -->
Excellent! **Topic 3 – Basic HTML Tags** is one of the **most frequently asked HTML interview topics**, especially for freshers. I'll give you **natural spoken answers** that you can speak confidently in an interview.

---

# Topic 3 – Basic HTML Tags

---

# 1. What is `<h1>` to `<h6>`?

🎤 **Interview Answer**

> HTML provides six heading tags, from `<h1>` to `<h6>`. `<h1>` is the most important and largest heading, while `<h6>` is the least important and smallest. These tags are used to organize the content of a webpage in a proper hierarchy.

Example:

```html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

---

### Follow-up

**Which heading should be used for the main title?**

🎤

> We should use `<h1>` for the main title because it represents the most important heading on the page and is good for both SEO and accessibility.

---

# 2. What is the `<p>` tag?

🎤 **Interview Answer**

> The `<p>` tag is used to define a paragraph. It automatically adds some spacing before and after the paragraph.

Example:

```html
<p>This is a paragraph.</p>
```

---

# 3. What is `<br>`?

🎤 **Interview Answer**

> The `<br>` tag is used to insert a line break. It moves the content to the next line without creating a new paragraph.

Example:

```html
Hello<br>World
```

---

# 4. What is `<hr>`?

🎤 **Interview Answer**

> The `<hr>` tag is used to create a horizontal line. It is generally used to separate different sections of content.

Example:

```html
<hr>
```

---

# Difference between `<br>` and `<hr>`?

🎤 **Interview Answer**

> `<br>` is used to move the content to the next line, whereas `<hr>` creates a horizontal line to separate sections of a webpage.

---

# 5. What is `<pre>`?

🎤 **Interview Answer**

> The `<pre>` tag displays text exactly as it is written in the HTML file. It preserves spaces and line breaks.

Example:

```html
<pre>
Hello
    World
</pre>
```

---

### Follow-up

**Where is `<pre>` used?**

🎤

> It is commonly used to display code snippets, poems, or any text where spacing and formatting should be preserved.

---

# 6. What is `<b>`?

🎤 **Interview Answer**

> The `<b>` tag makes text bold for visual appearance only. It does not add any importance or meaning to the content.

Example:

```html
<b>Hello</b>
```

---

# 7. What is `<strong>`?

🎤 **Interview Answer**

> The `<strong>` tag also makes text bold by default, but it indicates that the content is important. It provides semantic meaning, which is useful for accessibility and SEO.

Example:

```html
<strong>Warning!</strong>
```

---

# Difference between `<b>` and `<strong>`?

🎤 **Interview Answer (Very Important)**

> Both usually display text in bold. The difference is that `<b>` is only for visual styling, while `<strong>` gives semantic importance to the content. Screen readers and search engines understand that text inside `<strong>` is important.

---

### Interview Trick

**Interviewer:** Which one would you prefer?

🎤

> I would prefer `<strong>` whenever the text is important because it improves accessibility and provides semantic meaning.

---

# 8. What is `<i>`?

🎤 **Interview Answer**

> The `<i>` tag displays text in italics for visual styling only. It does not indicate emphasis.

Example:

```html
<i>Hello</i>
```

---

# 9. What is `<em>`?

🎤 **Interview Answer**

> The `<em>` tag displays text in italics and also indicates emphasis. It has semantic meaning and helps screen readers understand that the text should be emphasized.

Example:

```html
<em>Important</em>
```

---

# Difference between `<i>` and `<em>`?

🎤 **Interview Answer**

> Both usually display italic text. The difference is that `<i>` is only for styling, while `<em>` adds semantic emphasis and is better for accessibility.

---

# 10. What is `<u>`?

🎤 **Interview Answer**

> The `<u>` tag underlines the text. It is mainly used for stylistic purposes.

Example:

```html
<u>Hello</u>
```

---

# 11. What is `<mark>`?

🎤 **Interview Answer**

> The `<mark>` tag highlights text with a yellow background by default. It is used to show text that should stand out.

Example:

```html
<mark>Important</mark>
```

---

# 12. What is `<small>`?

🎤 **Interview Answer**

> The `<small>` tag displays text in a smaller font size. It is commonly used for copyright notices, disclaimers, or additional information.

Example:

```html
<small>Copyright 2026</small>
```

---

# 13. What is `<sup>`?

🎤 **Interview Answer**

> The `<sup>` tag displays superscript text, which appears slightly above the normal text.

Example:

```html
x<sup>2</sup>
```

Output:

```
x²
```

---

# 14. What is `<sub>`?

🎤 **Interview Answer**

> The `<sub>` tag displays subscript text, which appears slightly below the normal text.

Example:

```html
H<sub>2</sub>O
```

Output:

```
H₂O
```

---

# Interview Questions

---

# Difference between `<b>` and `<strong>`?

🎤

> `<b>` only makes the text bold for presentation, whereas `<strong>` makes the text bold and also indicates that the content is important. `<strong>` is better for accessibility and semantic HTML.

---

# Difference between `<i>` and `<em>`?

🎤

> `<i>` is used only for italic styling, while `<em>` adds emphasis and semantic meaning. `<em>` is preferred when the text should be emphasized.

---

# What is `<pre>`?

🎤

> The `<pre>` tag preserves spaces and line breaks exactly as written. It is mainly used for code snippets and formatted text.

---

# Difference between `<br>` and `<hr>`?

🎤

> `<br>` inserts a line break, while `<hr>` creates a horizontal line to separate sections of content.

---

# Which heading should be used for the main title?

🎤

> We should use `<h1>` for the main title because it is the highest-level heading and helps both search engines and screen readers understand the primary topic of the page.

---

# Follow-up Questions

---

# Which is better for SEO: `<strong>` or `<b>`?

🎤 **Interview Answer**

> `<strong>` is better because it provides semantic meaning. Search engines and screen readers understand that the text is important, whereas `<b>` only changes the visual appearance.

---

# Why should we avoid multiple `<h1>` tags?

🎤 **Interview Answer**

> Generally, a page should have one main topic, so using one `<h1>` makes the page structure clearer for SEO and accessibility. Other sections should use `<h2>`, `<h3>`, and so on to maintain a proper heading hierarchy.

*(Note: Modern HTML5 technically allows multiple `<h1>` elements in some contexts, but for interviews and best practices, saying "one main `<h1>` per page" is the safest answer.)*

---

# Can we style `<strong>` using CSS?

🎤 **Interview Answer**

> Yes. `<strong>` is an HTML element, so we can apply CSS to change its color, font size, font weight, or any other style.

Example:

```css
strong{
    color:red;
    font-size:20px;
}
```

---

# ⭐ Most Asked Practical Question

**Interviewer:** "How would you write a main heading, a paragraph, emphasize one word, and write H₂O?"

```html
<h1>HTML Basics</h1>

<p>
HTML is <strong>very important</strong> for web development.
</p>

<p>H<sub>2</sub>O</p>
```

---

# ⭐ 30-Second Revision

| Question      | One-Line Answer                                 |
| ------------- | ----------------------------------------------- |
| `<h1>`–`<h6>` | Heading tags from highest to lowest importance. |
| `<p>`         | Defines a paragraph.                            |
| `<br>`        | Inserts a line break.                           |
| `<hr>`        | Creates a horizontal line.                      |
| `<pre>`       | Preserves spaces and line breaks.               |
| `<b>`         | Bold text for appearance only.                  |
| `<strong>`    | Bold text with semantic importance.             |
| `<i>`         | Italic text for appearance only.                |
| `<em>`        | Italic text with semantic emphasis.             |
| `<u>`         | Underlines text.                                |
| `<mark>`      | Highlights text.                                |
| `<small>`     | Displays smaller text.                          |
| `<sup>`       | Superscript text (e.g., x²).                    |
| `<sub>`       | Subscript text (e.g., H₂O).                     |

## 💡 Interview Tip

If an interviewer asks:

> **"What's the difference between normal HTML tags and semantic HTML tags?"**

You can say:

> "Semantic HTML tags describe the meaning of the content, not just its appearance. For example, `<strong>` and `<em>` provide meaning, while `<b>` and `<i>` are mainly for visual styling. Semantic tags improve accessibility, SEO, and code readability."

This is a common follow-up that helps demonstrate a deeper understanding of HTML.

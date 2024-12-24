### **Day 91: Static and Dynamic Rendering in Next.js**

#### **What I Learned**
Today, I explored the concepts of **Static Rendering** and **Dynamic Rendering** in Next.js and how they can optimize application performance.

---

#### **Static Rendering**
Static rendering involves fetching and rendering data on the server at build time or during revalidation. It serves cached results to users, offering several benefits:  
- **Faster Websites**: Prerendered content is cached and globally distributed, improving accessibility and performance.  
- **Reduced Server Load**: Cached content minimizes the need for dynamic content generation for every request.  
- **Improved SEO**: Search engines can easily index prerendered content, boosting rankings.  

**Use Case**: Ideal for static pages like blogs or product listings.  
**Limitation**: Not suitable for frequently updated or user-specific content, like dashboards.  

---

#### **Dynamic Rendering**
Dynamic rendering involves generating content on the server at request time, making it highly adaptable:  
- **Real-Time Data**: Displays up-to-date information, ideal for dashboards.  
- **User-Specific Content**: Perfect for personalized profiles or interactions.  
- **Request-Time Information**: Can handle cookies and query parameters efficiently.  

**Use Case**: Best for applications requiring live updates or personalization.  

---

#### **Key Takeaway**
Choosing between static and dynamic rendering depends on the application's requirements. For fast, globally distributed, and cacheable content, static rendering is the go-to. For real-time, personalized, or frequently changing data, dynamic rendering wins.

---

#### **Source**
Learn more in the [Static and Dynamic Rendering Chapter](https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering).

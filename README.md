# Piga Luku App

### Installation

        npm create vite@latest piga_luku -- --template react

        cd puga_luku
        npm install
        npm run dev
Piga Luku
This is an e-commerce platform that aims to promote the fashion industry by introducing an all-shoe market place. 

Team Members
Clinton Aloo:

Will handle the frontend part of this project which will include User Interface (UI) Design Implementation, Responsive Design, Interactivity and User Experience (UX), Browser Compatibility, Performance Optimization, Frontend Frameworks and Libraries, and Testing and Debugging.
Will mainly be tasked with developing the server side application, data storage, functionality, and communication of web applications and and the Piga Luku software. The backend scipting will mostly be done using Javascript and react as the framework.
This team member will also be tasked with writing the core logic and algorithms that will drive the application’s functionality and process user input.
Because Arnold is passionate and good with design he will handle the fronted to make the project user friendly and more interactive.Clinton on the other hand, has shown passion in scripting languages in our past projects with expertise in Javascript and python. Additionally, he has already pushed to his GitHub, projects that show his understanding of the backend process of an application.
Technologies
1. Languages
   - JavaScript: The primary language for building the frontend components and implementing the interactivity in React.js.

2. Libraries:
   - React.js: A JavaScript library for building user interfaces, specifically focusing on creating reusable UI components.

3. Platforms:
   - Node.js: A server-side JavaScript runtime that allows running JavaScript code outside of the browser and enables server-side rendering with React.

4. Frameworks:
   - None required, as React itself is a library and not a framework.

5. Tools:
   - Babel: A transpiler used to convert modern JavaScript code (ES6+) into backward-compatible versions for older browsers.
   - Webpack: A module bundler that handles assets, dependencies, and optimization of the React application.

6. Books & Resources:
   - "React Up and Running" by Stoyan Stefanov: A comprehensive guide to getting started with React and building real-world applications.
   - Official React documentation and tutorials: React's official website provides extensive documentation and tutorials to help developers learn and understand React.js thoroughly.

Second Options and the Trade-offs
1. State Management:
   - Option 1 (Chosen): React's Context API
   - Option 2: Redux
   Trade-offs:
   - React Context API: It is built into React, so there is no need to add an external library. It is suitable for simple to medium-sized applications with relatively straightforward state management needs. However, for large-scale applications with complex state interactions, it may lead to performance issues and make the code harder to maintain.
   - Redux: Redux is a dedicated state management library that allows a central store and provides a predictable state container. It is more suitable for large and complex applications, offering a clearer separation of concerns and better tools for debugging. However, it introduces additional boilerplate code and may be overkill for small projects with simple state management needs.

   Final Decision: The final decision was based on the complexity and scale of the project. For this small to medium-sized project with manageable state requirements, the React Context API is a good choice as it keeps the codebase leaner and easier to manage.
2. Styling:
   - Option 1 (Chosen): Styled-components
   - Option 2: CSS Modules
   Trade-offs:
   - Styled-components: It is a CSS-in-JS library that allows writing CSS within JavaScript, making it easier to manage and encapsulate component-specific styles. It promotes better component reusability and improves the maintainability of the code. However, it adds a bit of overhead as it requires a separate library, and some developers may find the paradigm shift from traditional CSS challenging.
   - CSS Modules: CSS Modules enable the scoping of styles to individual components, preventing global CSS conflicts. It allows writing CSS as separate files but uses unique class names to scope styles. It is relatively straightforward to integrate and understand, especially for developers already familiar with CSS. However, it might not offer as much flexibility as Styled-components in terms of dynamic styles and conditional rendering.

   Final Decision: The final decision was based on our  familiarity with the technology and the project's specific requirements. 

Challenge statement
This project is aimed to easen the struggle of shopping for shoes by availing everything footwear on one platform making it easy and less time consuming when shopping. The platform will also create employment among many youths in Kenya as it will need support staff that will process and deliver orders. However, what the platform can’t solve include seamless return and refund process as they products have to be thoroughly inspected and the amount paid may take time to be processed. 

Risks
Thre first technical problem that we would be likely to face is scalability where the program can break when the number of concurrent users or traffic grows as business grows. However with a sturdy architecture this can be reduced and mitigated against. The second technical risk which the project could face is the security vulnerabilities since a lot of personal data is shared by clients on the platform. To mitigate this it will be necessary to safeguard client data to avoid data breaches. 

The first non-technical risk that this project faces is market demand and competition from second hand or thrift shoes. However, we believe that our target market is the upper-class who are able to afford and wish to shop from the convince of their phones. 

Infrastructure
Branch and Merging strategy

Although the project will be completed on one GitHub repository, each team member will work on a separate branch to add their contributions to the project. Weekly meetings will be set to compare and approve the codes of bugs and errors. Eventually, merging will be done after all the two branches of the codebase are tested. 

Strategy for deployment

For this project will will use netlify for deployment. Continuous deployment strategy will be applied to keep up with our updates on GitHub.

Populating the app with data
Data will be collected through insertion by clients or superusers, updating, or importing of information into the application’s database. A data schema will be defined which will include the structure and the database or model. The data collected from the app will be sorted into tables, fields, and relationships between different data entries.
Testing
Testing is important to ensure reliability and correctness when using react. For this project we will depend largely on the react testing library and Jest which is also a good tool for the react framework.

Existing Solutions 
True we are not the first or last e-commerce platform that is selling clothing. The likes of Alibaba, and Jumia are big online retail shops that sell not only clothing but a myriad other things. However, our project narrows down the wide niche in the fashion industry by only focusing on promoting one specific attire which is shoes. This will give shoe-lovers the autonomy to quick search and find their favorite pair of sneakers through a touch of a button. 



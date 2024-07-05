React project to prevent page reload after API request

Terminal 1
npm install 

Terminal 1
npm run json

Terminal 2
npm start

I created 3 different react implementations (Hook component, Class component, query component) to add a new option in a dropdown component without reloading the page.

I delegated to the parent page to request the API and sent the results to the child with props, and the page is still refreshing. If I manually change the JSON file the page reloads. I updated the GitHub repository with the new implementation. Should I give up and move to Next.js?

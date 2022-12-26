### Wazobia Web Software Engineer Assessment

---

Hello 👋. If you are seeing this, that means you are about to take the Web Software Engineering Assessment.

You will be building a basic application in which users can signup,login, verify their accounts and implement CRUD operations on Item resources. This simulates the day to day activities you will be carrying out as an engineer with us. 

The Figma design for the application can be found [here](https://www.figma.com/file/YDc7gQSwJH7KnjkErlqXZo/Wazobia-Test?node-id=301%3A159 "here"). If you applied for a frontend role or are not entirely confident in your backend skills you can connect to a test api which is deployed at [test-api.sytbuilder.com](https://test-api.sytbuilder.com "test-api.sytbuilder.com"). The API is implemented in both REST and GraphQL. The REST documentation can be found at [test-api.sytbuilder.com](https://test-api.sytbuilder.com "test-api.sytbuilder.com") while you can view the GraphQL documentation in a GraphQL desktop client at [test-api.sytbuilder.com/graphql](https://test-api.sytbuilder.com/graphql "test-api.sytbuilder.com/graphql"). We highly recommend [Firecamp](https://firecamp.io/graphql "Firecamp"). They have an excellent Chrome Extension.

On the other hand, if you did apply for a full stack role or are confident in your backend skills you can build out your own API to connect to the frontend. We are on the lookout for well rounded engineers who are comfortable working across the entire stack. Hence, its a big plus for you if you can implement both the frontend and the API. 
We majorly make use of PHP/Laravel and Node (Express and Nest JS) so either framework is fine to build out the API (REST or GraphQL).

#### Requirements for the Test
- The entire state of your application should be global. This means that for React you'll be making use of a solution like Redux or the Context API while for Vue a solution like Vuex or similar would be appropriate. This is extremely important. Your application should not make use of local component state.
- Ideally, we would like you to use Typescript to build this application (you get bonus points for this) but we would accept Javascript provided you do an excellent job and have at the very least a bit of exposure to Typescript. 
- We would also prefer you to make use of GraphQL but if you do not have experience with that yet, using REST is fine. We care much more about your ability to learn quickly.
- When the user signs up, they need to be logged in immediately. Obviously at that point, their accounts are not verified. For this duration in which their accounts are not verified, the notice in the dashboard page telling them to verify their accounts needs to always be on the page. Once their account is verified, it should be removed from the page.
- Users should be able to create, view, edit and delete items as indicated in the dashboard page.
- Signing up sends an email to the user's email address for them to verify their accounts. They need to be able to resend this verification email from the UI if they want to as indicated in the dashboard design. The GraphQL and REST endpoints for this are available as you will see in the documentation.
- Obviously, when the user is logged in, they should not be able to access the dashboard and vice versa.
- The user needs to be able to log out.

#### Extra Notes
- When the user signs up/logs in a JWT Token is returned from the API in the response body. This token is valid for 3 days.
- Authenticated requests require an Authorization header with a value of Bearer + the valid JWT token returned from the API.
- For testing purposes, if you need to delete accounts that you have already created, make calls to the respective deleteMe and DELETE /me/{email} GraphQL and REST endpoints.
- We make use of Material UI/Chakra UI/Styled Components for styling but if you are more familiar with a different CSS framework/library that is fine.
- Fork this repository into a private repository to get started. As you work please commit regularly so that we can have an idea of how you work. Submissions that go straight from initial commit to final commit will not be accepted. You have 4 days to complete the task.
- Please execute this task to the best of your ability. We want to see your best possible work. This means thinking through possible edge cases and handling them. Like we said earlier this task is quite similar to the day to day activities you will be carrying out here.
- When you are done, invite @olufuwamichael, @olamileke and @FabulousJay as collaborators on the repository.
- Also send an email to hr@wazobia.tech and aadegbulu@wazobia.tech to serve as a notification of your completion of the assessment. 

If you have any questions, feel free to email hr@wazobia.tech and aadegbulu@wazobia.tech. Good luck!

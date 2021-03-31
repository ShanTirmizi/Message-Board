# Message Board

By [Shan Tirmizi](mailto:tirmizishahnawaz@gmail.com)

Live Site: https://shan-message-board.netlify.app/

## Instructions

1. Navigate to [repo](https://github.com/ShanTirmizi/Message-Board)
2. Clone locally using
   `git clone git@github.com:ShanTirmizi/Message-Board.git`
3. Install dependencies using `npm install`
4. Start your server using `npm start`
5. Navigate to app in [browser](http://localhost:3000)
6. Or alternatively just go on https://shan-message-board.netlify.app/

## Discussion

I used the following technologies: HTML, CSS, React and JavaScript.
I used [create-react-app](https://github.com/facebook/create-react-app)
to generate the scaffolding for this app.

## Requirements

#### Render a comment correctly
#### Render replies of a comment under that comment
#### Handle the thread of replies

I fetched the data from the API using an async function then stored it within a useState hook.

After that, I created a comment component and fed it the data from the hook.

In the comment component, I created a ul tag. Inside that ul tag I created a loop that would render all comments in a li tag and check if a comment has any replies. If the comment has replies it would render another comment component and give it the data of replies. The cycle will repeat until the replies array is empty.

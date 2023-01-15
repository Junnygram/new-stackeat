import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Olaleye",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Cheese burger",
      category: "burger",
      slug: "cheese-burger",
      countInStock: 2,
      rating: 1.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: 10,
    },
    {
      // _id: "2",
      name: "Bacon",
      category: "burger",
      slug: "bacon-burger",
      countInStock: 3,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      price: 100,
    },
    {
      // _id: "3",
      name: "Mushroom Burger",
      category: "burger",
      slug: "mushroom-burger",
      countInStock: 7,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      price: 20,
    },
    {
      // _id: "4",
      name: "Loaded Burger",
      category: "burger",
      slug: "loaded-burger",
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: 50,
    },
    {
      // _id: "5",
      name: "Feta & Spinnach",
      category: "pizza",
      slug: "feta-spinach",
      countInStock: 6,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 20,
    },
    {
      // _id: "6",
      name: "Supreme Pizza",
      category: "pizza",
      slug: "supreme-burger",
      countInStock: 7,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 50,
    },
    {
      // _id: "7",
      name: "Meat Lovers",
      category: "pizza",
      slug: "meat-lovers",
      countInStock: 8,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 100,
    },
    {
      // _id: "8",
      name: "Cheese Pizza",
      category: "pizza",
      slug: "cheese-pizza",
      countInStock: 9,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 10,
    },
    {
      // _id: "9",
      name: "Kale Salad",
      category: "salad",
      slug: "kale-salad",
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 20,
    },
    {
      // _id: "10",
      name: "Ceasar Salad",
      category: "salad",
      slug: "ceasar-salad",
      countInStock: 15,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 50,
    },
    {
      // _id: "11",
      name: "Loaded Salad",
      category: "salad",
      slug: "loaded-salad",
      countInStock: 6,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 100,
    },
    {
      // _id: "12",
      name: "Fruit Salad",
      category: "salad",
      slug: "fruit-salad",
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      price: 10,
    },
    {
      // _id: "13",
      name: "Wings",
      category: "chicken",
      slug: "chicken-wings",
      countInStock: 8,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 20,
    },
    {
      // _id: "14",
      name: "Baked Chicken",
      category: "chicken",
      slug: "baked-chicken",
      countInStock: 6,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 100,
    },
    {
      // _id: "15",
      name: "Chicken Tenders",
      category: "chicken",
      slug: "chicken-tenders",
      countInStock: 15,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 10,
    },
    {
      // _id: "16",
      name: "Chicken Kabob",
      category: "chicken",
      slug: "chicken-kabob",
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      image:
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: "50",
    },
  ],
  categories: [
    {
      id: 1,
      name: "Fast Food",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    },
    {
      id: 3,
      name: "Wings",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    },
    {
      id: 4,
      name: "Indian",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    },
    {
      id: 5,
      name: "Latest Deals",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    },
    {
      id: 6,
      name: "Rewards",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
    },
    {
      id: 7,
      name: "Best Overall",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png",
    },
    {
      id: 8,
      name: "Shipped Free",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png",
    },
  ],
};
export default data;
